import React from 'react';
import { logger, captureException } from '@/lib/logger';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorCount: number;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorCount: 0 };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        const errorCount = this.state.errorCount + 1;
        
        logger.error({
            type: 'REACT_ERROR_BOUNDARY',
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            count: errorCount,
            timestamp: new Date().toISOString(),
        }, 'React Error Boundary caught error');

        captureException(error, {
            component: 'ErrorBoundary',
            errorInfo,
            count: errorCount,
            severity: errorCount > 2 ? 'critical' : 'error',
        });

        this.setState({ errorCount });
    }

    handleDismiss = () => {
        this.setState({ hasError: false, error: null });
    };

    handleReload = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError && this.state.error) {
            const isDevelopment = process.env.NODE_ENV === 'development';
            const errorCount = this.state.errorCount;

            return (
                <div className="flex flex-col flex-1 items-center justify-center p-6 bg-gradient-to-br from-brand-error/5 to-brand-error/10 min-h-screen">
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center border border-brand-error/20">
                        {/* Error Icon */}
                        <div className="w-16 h-16 bg-brand-error/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i className="fa-solid fa-triangle-exclamation text-brand-error text-3xl"></i>
                        </div>

                        {/* Error Title */}
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            {errorCount > 2 ? 'Critical Error' : 'Oops! Something went wrong'}
                        </h1>

                        {/* Error Message */}
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            {errorCount > 2
                                ? 'The app has encountered multiple errors. Please reload and try again.'
                                : 'An unexpected error occurred. Our team has been notified.'}
                        </p>

                        {/* Error Details (Dev Only) */}
                        {isDevelopment && (
                            <div className="mb-6 p-3 bg-gray-100 rounded-lg text-left max-h-40 overflow-y-auto">
                                <p className="text-xs font-mono text-gray-700 break-words">
                                    <strong>Error:</strong> {this.state.error.message}
                                </p>
                                {this.state.error.stack && (
                                    <p className="text-xs font-mono text-gray-600 mt-2 break-words">
                                        <strong>Stack:</strong> {this.state.error.stack.slice(0, 200)}...
                                    </p>
                                )}
                                <p className="text-xs text-gray-500 mt-2">Errors this session: {errorCount}</p>
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={this.handleDismiss}
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
                            >
                                <i className="fa-solid fa-rotate-left mr-2"></i>
                                Try Again
                            </button>
                            <button
                                onClick={this.handleReload}
                                className="flex-1 px-4 py-3 rounded-lg bg-brand-error text-white font-medium hover:bg-brand-error/90 transition-all"
                            >
                                <i className="fa-solid fa-home mr-2"></i>
                                Go Home
                            </button>
                        </div>

                        {/* Error ID for support */}
                        <p className="text-xs text-gray-400 mt-4">
                            Error ID: {this.state.error.message?.slice(0, 8).toUpperCase() || 'UNKNOWN'}
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
