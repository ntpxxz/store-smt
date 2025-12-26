import { NextRequest, NextResponse } from 'next/server';
import { logger, captureException } from '@/lib/logger';

export type ApiErrorCode = 
  | 'UNAUTHORIZED' | 'FORBIDDEN' | 'NOT_FOUND' | 'CONFLICT'
  | 'VALIDATION_ERROR' | 'INTERNAL_ERROR' | 'SERVICE_UNAVAILABLE'
  | 'RATE_LIMITED' | 'INVALID_REQUEST' | 'DATABASE_ERROR';

export interface ApiErrorResponse {
  success: false;
  error: {
    code: ApiErrorCode;
    message: string;
    details?: Record<string, unknown>;
  };
  requestId: string;
  timestamp: string;
}

export interface ApiSuccessResponse<T = any> {
  success: true;
  data: T;
  requestId: string;
  timestamp: string;
}

export type ApiResponse<T = any> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Generate a unique request ID for tracking
 */
export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a standardized success response
 */
export function successResponse<T>(data: T, status = 200): NextResponse<ApiSuccessResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      requestId: generateRequestId(),
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

/**
 * Create a standardized error response
 */
export function errorResponse(
  code: ApiErrorCode,
  message: string,
  status: number,
  details?: Record<string, unknown>,
  requestId?: string
): NextResponse<ApiErrorResponse> {
  const rid = requestId || generateRequestId();
  
  logger.warn({
    type: 'API_ERROR',
    code,
    message,
    status,
    details,
    requestId: rid,
    timestamp: new Date().toISOString(),
  }, `API Error: ${code}`);

  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details && { details }),
      },
      requestId: rid,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

/**
 * Standardized error handlers for common scenarios
 */
export const ApiErrors = {
  unauthorized: (message = 'Unauthorized', rid?: string) =>
    errorResponse('UNAUTHORIZED', message, 401, undefined, rid),

  forbidden: (message = 'Access denied', rid?: string) =>
    errorResponse('FORBIDDEN', message, 403, undefined, rid),

  notFound: (message = 'Resource not found', rid?: string) =>
    errorResponse('NOT_FOUND', message, 404, undefined, rid),

  conflict: (message = 'Resource conflict', rid?: string) =>
    errorResponse('CONFLICT', message, 409, undefined, rid),

  validationError: (details: Record<string, unknown>, rid?: string) =>
    errorResponse('VALIDATION_ERROR', 'Validation failed', 400, details, rid),

  internalError: (message = 'Internal server error', rid?: string) =>
    errorResponse('INTERNAL_ERROR', message, 500, undefined, rid),

  serviceUnavailable: (message = 'Service temporarily unavailable', rid?: string) =>
    errorResponse('SERVICE_UNAVAILABLE', message, 503, undefined, rid),

  rateLimited: (retryAfter?: number, rid?: string) => {
    const res = errorResponse(
      'RATE_LIMITED',
      'Too many requests. Please try again later.',
      429,
      retryAfter ? { retryAfter } : undefined,
      rid
    );
    if (retryAfter) {
      res.headers.set('Retry-After', String(retryAfter));
    }
    return res;
  },

  invalidRequest: (message = 'Invalid request', rid?: string) =>
    errorResponse('INVALID_REQUEST', message, 400, undefined, rid),

  databaseError: (message = 'Database error', rid?: string) =>
    errorResponse('DATABASE_ERROR', message, 500, undefined, rid),
};

/**
 * Wrap an API route handler with error handling
 */
export function withErrorHandling<T extends any[] = any[], R = any>(
  handler: (...args: T) => Promise<NextResponse<ApiResponse<R>>> | NextResponse<ApiResponse<R>>
) {
  return async (...args: T): Promise<NextResponse<ApiResponse<R>>> => {
    const requestId = generateRequestId();
    const startTime = Date.now();

    try {
      logger.debug({ requestId, method: (args[0] as NextRequest)?.method }, 'API request started');
      const result = await handler(...args);
      
      const duration = Date.now() - startTime;
      logger.info({ requestId, duration, status: result.status }, 'API request completed');
      
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      logger.error({
        requestId,
        duration,
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      }, 'API request failed');

      captureException(error, {
        requestId,
        handler: handler.name,
        duration,
      });

      // Return generic error to client (don't expose internals)
      return errorResponse(
        'INTERNAL_ERROR',
        'An unexpected error occurred',
        500,
        process.env.NODE_ENV === 'development' && error instanceof Error
          ? { message: error.message }
          : undefined,
        requestId
      );
    }
  };
}

/**
 * Extract request ID from headers for tracking
 */
export function getRequestId(request: NextRequest): string {
  return (request.headers.get('x-request-id') || generateRequestId()).toString();
}
