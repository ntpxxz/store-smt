import React, { useState } from 'react';
import { api } from '@/lib/api-client';

interface LoginScreenProps {
    onLogin: (token: string, user: any) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('admin@warehouse.os');
    const [password, setPassword] = useState('password123');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await api.auth.login({ email, password });
            localStorage.setItem('auth_token', data.token);
            onLogin(data.token, data.user);
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 font-sans">
            <div className="w-full max-w-[420px] ios-card p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
                <div className="text-center mb-12">
                    <div className="w-24 h-24 gradient-primary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-primary/30 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <i className="fa-solid fa-warehouse text-white text-5xl"></i>
                    </div>
                    <h1 className="text-4xl font-bold text-app-text leading-none">Warehouse OS</h1>
                    <p className="text-app-text-muted text-[10px] font-semibold uppercase tracking-wider mt-4">Next-Gen Logistics</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                        <label className="block text-[10px] font-semibold text-app-text-muted uppercase tracking-wider ml-1">Access ID</label>
                        <div className="relative">
                            <i className="fa-solid fa-envelope absolute left-5 top-1/2 -translate-y-1/2 text-app-text-muted text-base"></i>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/5 border border-app-border rounded-2xl py-5 pl-14 pr-5 text-app-text font-medium focus:outline-none focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary/30 transition-all placeholder:text-app-text/20"
                                placeholder="admin@warehouse.os"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="block text-[10px] font-semibold text-app-text-muted uppercase tracking-wider ml-1">Security Key</label>
                        <div className="relative">
                            <i className="fa-solid fa-lock absolute left-5 top-1/2 -translate-y-1/2 text-app-text-muted text-base"></i>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/5 border border-app-border rounded-2xl py-5 pl-14 pr-5 text-app-text font-medium focus:outline-none focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary/30 transition-all placeholder:text-app-text/20"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>
                    {error && (
                        <div className="bg-brand-error/10 border border-brand-error/20 p-5 rounded-2xl flex items-center gap-4 animate-shake">
                            <i className="fa-solid fa-circle-exclamation text-brand-error text-lg"></i>
                            <p className="text-brand-error text-[10px] font-semibold uppercase tracking-wider leading-relaxed">{error}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full gradient-primary text-white py-6 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-2xl shadow-brand-primary/20 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4 group"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>Initialize System <i className="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i></>
                        )}
                    </button>
                </form>
                <div className="mt-12 pt-10 border-t border-app-border flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-brand-success rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">Server Online</span>
                    </div>
                    <span className="text-[10px] font-semibold text-app-text-muted/40 uppercase tracking-wider">v4.2.0-PRO</span>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-4 opacity-30">
                <i className="fa-solid fa-shield-halved text-app-text"></i>
                <p className="text-[10px] font-semibold text-app-text uppercase tracking-widest">Encrypted Session</p>
            </div>
        </div>
    );
};



