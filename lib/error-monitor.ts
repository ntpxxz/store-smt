import { logger, captureException } from '@/lib/logger';

export type ErrorSeverity = 'info' | 'warning' | 'error' | 'critical';

export interface ErrorEvent {
  id: string;
  timestamp: string;
  message: string;
  severity: ErrorSeverity;
  context?: Record<string, unknown>;
  stackTrace?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
}

export interface ErrorMetrics {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsBySeverity: Record<ErrorSeverity, number>;
  lastErrorTime?: string;
}

class ErrorMonitor {
  private errors: ErrorEvent[] = [];
  private maxErrors = 100; // Keep last 100 errors in memory
  private listeners: Set<(error: ErrorEvent) => void> = new Set();

  constructor() {
    // Setup global error handlers
    if (typeof window !== 'undefined') {
      window.addEventListener('error', this.handleGlobalError);
      window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
    }
  }

  /**
   * Track an error event
   */
  track(
    message: string,
    severity: ErrorSeverity = 'error',
    context?: Record<string, unknown>,
    stackTrace?: string
  ): ErrorEvent {
    const error: ErrorEvent = {
      id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      message,
      severity,
      context,
      stackTrace,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    };

    this.errors.push(error);
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }

    // Log locally
    logger[severity === 'critical' || severity === 'error' ? 'error' : 'warn']({
      type: 'ERROR_MONITOR',
      ...error,
    }, `[${severity.toUpperCase()}] ${message}`);

    // Send to Sentry if critical
    if (severity === 'critical' || severity === 'error') {
      captureException(new Error(message), {
        errorId: error.id,
        severity,
        ...context,
      });
    }

    // Notify listeners
    this.listeners.forEach(listener => listener(error));

    return error;
  }

  /**
   * Track an API error
   */
  trackApiError(
    endpoint: string,
    status: number,
    message: string,
    details?: Record<string, unknown>
  ): ErrorEvent {
    const severity = status >= 500 ? 'critical' : status >= 400 ? 'error' : 'warning';
    return this.track(`API Error: ${endpoint} (${status})`, severity, {
      endpoint,
      status,
      ...details,
    });
  }

  /**
   * Track a network error
   */
  trackNetworkError(message: string, context?: Record<string, unknown>): ErrorEvent {
    return this.track(`Network Error: ${message}`, 'error', context);
  }

  /**
   * Global error handler
   */
  private handleGlobalError = (event: ErrorEvent) => {
    this.track(
      event.message,
      'error',
      { type: 'uncaught_error' },
      event.error?.stack
    );
  };

  /**
   * Unhandled promise rejection handler
   */
  private handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    const message = event.reason instanceof Error 
      ? event.reason.message 
      : String(event.reason);
    
    this.track(
      `Unhandled Promise Rejection: ${message}`,
      'error',
      { type: 'unhandled_promise_rejection' },
      event.reason instanceof Error ? event.reason.stack : undefined
    );
  };

  /**
   * Subscribe to error events
   */
  subscribe(listener: (error: ErrorEvent) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Get all tracked errors
   */
  getErrors(): ErrorEvent[] {
    return [...this.errors];
  }

  /**
   * Get error metrics
   */
  getMetrics(): ErrorMetrics {
    const metrics: ErrorMetrics = {
      totalErrors: this.errors.length,
      errorsByType: {},
      errorsBySeverity: {
        info: 0,
        warning: 0,
        error: 0,
        critical: 0,
      },
      lastErrorTime: this.errors[this.errors.length - 1]?.timestamp,
    };

    this.errors.forEach(err => {
      // Count by severity
      metrics.errorsBySeverity[err.severity]++;

      // Count by type
      const type = err.context?.type as string || 'unknown';
      metrics.errorsByType[type] = (metrics.errorsByType[type] || 0) + 1;
    });

    return metrics;
  }

  /**
   * Clear error history
   */
  clear(): void {
    this.errors = [];
  }

  /**
   * Export errors for debugging
   */
  export(): string {
    return JSON.stringify({
      errors: this.errors,
      metrics: this.getMetrics(),
      exportedAt: new Date().toISOString(),
    }, null, 2);
  }

  /**
   * Cleanup event listeners
   */
  destroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('error', this.handleGlobalError);
      window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
    }
    this.listeners.clear();
  }
}

// Export singleton instance
export const errorMonitor = new ErrorMonitor();

export default errorMonitor;
