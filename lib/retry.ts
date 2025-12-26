import { errorMonitor } from '@/lib/error-monitor';
import { logger } from '@/lib/logger';

export interface RetryConfig {
  maxRetries: number;
  initialDelayMs: number;
  maxDelayMs: number;
  backoffMultiplier: number;
  jitterFraction: number; // 0.1 = 10% jitter
  shouldRetry?: (error: any, attempt: number) => boolean;
}

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 30000,
  backoffMultiplier: 2,
  jitterFraction: 0.1,
};

/**
 * Calculate delay with exponential backoff and jitter
 */
function calculateDelay(attempt: number, config: RetryConfig): number {
  const exponentialDelay = Math.min(
    config.initialDelayMs * Math.pow(config.backoffMultiplier, attempt),
    config.maxDelayMs
  );

  // Add jitter to prevent thundering herd
  const jitter = exponentialDelay * config.jitterFraction * Math.random();
  return exponentialDelay + jitter;
}

/**
 * Default retry predicate - retry on network errors and 5xx status codes
 */
function defaultShouldRetry(error: any, attempt: number, maxRetries: number): boolean {
  if (attempt >= maxRetries) return false;

  // Retry on network errors
  if (error?.message?.includes('fetch') || error?.message?.includes('Network')) {
    return true;
  }

  // Retry on 5xx server errors
  if (error?.status >= 500 && error?.status < 600) {
    return true;
  }

  // Retry on 408 (Request Timeout) and 429 (Too Many Requests)
  if (error?.status === 408 || error?.status === 429) {
    return true;
  }

  return false;
}

/**
 * Retry a function with exponential backoff
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<T> {
  const fullConfig: RetryConfig = { ...DEFAULT_RETRY_CONFIG, ...config };
  let lastError: any;
  let attempt = 0;

  while (attempt <= fullConfig.maxRetries) {
    try {
      logger.debug({ attempt: attempt + 1, maxRetries: fullConfig.maxRetries }, 'Retry attempt');
      return await fn();
    } catch (error) {
      lastError = error;
      const shouldRetry = fullConfig.shouldRetry
        ? fullConfig.shouldRetry(error, attempt)
        : defaultShouldRetry(error, attempt, fullConfig.maxRetries);

      if (!shouldRetry) {
        logger.warn(
          {
            attempt: attempt + 1,
            error: error instanceof Error ? error.message : String(error),
            retryable: false,
          },
          'Retry failed (not retryable)'
        );
        break;
      }

      if (attempt < fullConfig.maxRetries) {
        const delay = calculateDelay(attempt, fullConfig);
        logger.warn(
          {
            attempt: attempt + 1,
            delayMs: Math.round(delay),
            error: error instanceof Error ? error.message : String(error),
          },
          'Retry scheduled'
        );

        // Track retry in error monitor
        errorMonitor.track(
          `Retry attempt ${attempt + 1}/${fullConfig.maxRetries}: ${
            error instanceof Error ? error.message : String(error)
          }`,
          'warning',
          { attempt: attempt + 1, delayMs: delay }
        );

        await new Promise(resolve => setTimeout(resolve, delay));
      }

      attempt++;
    }
  }

  logger.error(
    {
      totalAttempts: attempt + 1,
      error: lastError instanceof Error ? lastError.message : String(lastError),
    },
    'All retry attempts failed'
  );

  errorMonitor.track(
    `Failed after ${fullConfig.maxRetries} retries`,
    'error',
    { maxRetries: fullConfig.maxRetries }
  );

  throw lastError;
}

/**
 * Retry a fetch request
 */
export async function retryFetch(
  url: string,
  options?: RequestInit,
  retryConfig?: Partial<RetryConfig>
): Promise<Response> {
  return retryWithBackoff(
    () => fetch(url, options),
    {
      ...retryConfig,
      shouldRetry: (error, attempt) => {
        // Don't retry 4xx client errors (except 408 and 429)
        if (error?.status >= 400 && error?.status < 500) {
          if (error?.status !== 408 && error?.status !== 429) {
            return false;
          }
        }
        return retryConfig?.shouldRetry
          ? retryConfig.shouldRetry(error, attempt)
          : defaultShouldRetry(error, attempt, retryConfig?.maxRetries || DEFAULT_RETRY_CONFIG.maxRetries);
      },
    }
  );
}

/**
 * Retry with circuit breaker pattern
 */
export class CircuitBreaker {
  private failureCount = 0;
  private successCount = 0;
  private lastFailureTime?: number;
  private state: 'closed' | 'open' | 'half-open' = 'closed';

  constructor(
    private failureThreshold = 5,
    private successThreshold = 2,
    private timeoutMs = 60000 // 1 minute
  ) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      const timeSinceLastFailure = Date.now() - (this.lastFailureTime || 0);
      if (timeSinceLastFailure < this.timeoutMs) {
        throw new Error(
          `Circuit breaker is open. Retry in ${Math.ceil((this.timeoutMs - timeSinceLastFailure) / 1000)}s`
        );
      }
      this.state = 'half-open';
      logger.info({}, 'Circuit breaker: transitioning to half-open');
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess(): void {
    this.failureCount = 0;
    if (this.state === 'half-open') {
      this.successCount++;
      if (this.successCount >= this.successThreshold) {
        this.state = 'closed';
        this.successCount = 0;
        logger.info({}, 'Circuit breaker: closed');
      }
    }
  }

  private onFailure(): void {
    this.lastFailureTime = Date.now();
    this.failureCount++;
    this.successCount = 0;

    if (this.failureCount >= this.failureThreshold) {
      this.state = 'open';
      logger.warn({ failureCount: this.failureCount }, 'Circuit breaker: opened');
      errorMonitor.track('Circuit breaker opened', 'error', { failureCount: this.failureCount });
    }
  }

  getState(): string {
    return this.state;
  }

  reset(): void {
    this.failureCount = 0;
    this.successCount = 0;
    this.lastFailureTime = undefined;
    this.state = 'closed';
  }
}
