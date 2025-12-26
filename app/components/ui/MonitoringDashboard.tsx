import React, { useState, useEffect } from 'react';
import { errorMonitor, ErrorEvent, ErrorMetrics } from '@/lib/error-monitor';

interface MonitoringDashboardProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MonitoringDashboard: React.FC<MonitoringDashboardProps> = ({ isOpen, onClose }) => {
    const [errors, setErrors] = useState<ErrorEvent[]>([]);
    const [metrics, setMetrics] = useState<ErrorMetrics | null>(null);
    const [activeTab, setActiveTab] = useState<'errors' | 'metrics'>('metrics');

    useEffect(() => {
        if (!isOpen) return;

        // Update on mount
        setErrors(errorMonitor.getErrors());
        setMetrics(errorMonitor.getMetrics());

        // Subscribe to new errors
        const unsubscribe = errorMonitor.subscribe(() => {
            setErrors(errorMonitor.getErrors());
            setMetrics(errorMonitor.getMetrics());
        });

        return unsubscribe;
    }, [isOpen]);

    if (!isOpen) return null;

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'critical':
                return 'text-brand-error bg-brand-error/10';
            case 'error':
                return 'text-brand-error bg-brand-error/5';
            case 'warning':
                return 'text-yellow-600 bg-yellow-50';
            default:
                return 'text-blue-600 bg-blue-50';
        }
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Error Monitoring</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                    >
                        <i className="fa-solid fa-xmark text-gray-500"></i>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 px-6 pt-4 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('metrics')}
                        className={`px-4 py-2 font-medium transition-all ${
                            activeTab === 'metrics'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <i className="fa-solid fa-chart-bar mr-2"></i>
                        Metrics
                    </button>
                    <button
                        onClick={() => setActiveTab('errors')}
                        className={`px-4 py-2 font-medium transition-all ${
                            activeTab === 'errors'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <i className="fa-solid fa-list mr-2"></i>
                        Errors ({errors.length})
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {activeTab === 'metrics' && metrics && (
                        <div className="space-y-4">
                            {/* Total Errors */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-1">Total Errors</p>
                                    <p className="text-3xl font-bold text-brand-error">{metrics.totalErrors}</p>
                                </div>
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-1">Last Error</p>
                                    <p className="text-sm text-gray-900 font-mono">
                                        {metrics.lastErrorTime
                                            ? new Date(metrics.lastErrorTime).toLocaleTimeString()
                                            : 'N/A'}
                                    </p>
                                </div>
                            </div>

                            {/* Errors by Severity */}
                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-3">Errors by Severity</h3>
                                <div className="space-y-2">
                                    {Object.entries(metrics.errorsBySeverity).map(([severity, count]) => (
                                        <div key={severity} className="flex items-center justify-between">
                                            <span className="text-sm capitalize font-medium text-gray-700">
                                                {severity}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full ${
                                                            severity === 'critical'
                                                                ? 'bg-brand-error'
                                                                : severity === 'error'
                                                                ? 'bg-orange-500'
                                                                : severity === 'warning'
                                                                ? 'bg-yellow-500'
                                                                : 'bg-blue-500'
                                                        }`}
                                                        style={{
                                                            width: `${
                                                                metrics.totalErrors > 0
                                                                    ? (count / metrics.totalErrors) * 100
                                                                    : 0
                                                            }%`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="text-sm font-bold text-gray-900 w-8 text-right">
                                                    {count}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Errors by Type */}
                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-3">Errors by Type</h3>
                                <div className="space-y-2">
                                    {Object.entries(metrics.errorsByType).map(([type, count]) => (
                                        <div key={type} className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-700">{type}</span>
                                            <span className="text-sm font-bold text-gray-900">{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'errors' && (
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {errors.length === 0 ? (
                                <div className="text-center py-8">
                                    <i className="fa-solid fa-check-circle text-green-500 text-3xl mb-2"></i>
                                    <p className="text-gray-600">No errors recorded</p>
                                </div>
                            ) : (
                                errors.map(error => (
                                    <div
                                        key={error.id}
                                        className={`p-3 rounded-lg border ${getSeverityColor(
                                            error.severity
                                        )} border-current border-opacity-20`}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="text-xs font-bold uppercase">
                                                {error.severity}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {new Date(error.timestamp).toLocaleTimeString()}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 mb-1">
                                            {error.message}
                                        </p>
                                        {error.context && (
                                            <p className="text-xs text-gray-600 font-mono">
                                                {JSON.stringify(error.context).slice(0, 100)}...
                                            </p>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex gap-2 p-6 border-t border-gray-200">
                    <button
                        onClick={() => {
                            const data = errorMonitor.export();
                            const blob = new Blob([data], { type: 'application/json' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `errors-${new Date().toISOString()}.json`;
                            a.click();
                        }}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                    >
                        <i className="fa-solid fa-download mr-2"></i>
                        Export Errors
                    </button>
                    <button
                        onClick={() => {
                            errorMonitor.clear();
                            setErrors([]);
                            setMetrics(errorMonitor.getMetrics());
                        }}
                        className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all"
                    >
                        <i className="fa-solid fa-trash mr-2"></i>
                        Clear History
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MonitoringDashboard;
