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
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa] p-6 font-sans">
            <div className="w-full max-w-[400px] bg-white rounded-[30px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400"></div>
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-blue-600 rounded-[22px] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_20px_rgba(37,99,235,0.2)] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <i className="fa-solid fa-warehouse text-white text-4xl"></i>
                    </div>
                    <h1 className="text-3xl font-black text-zinc-900 tracking-tighter">Warehouse OS</h1>
                    <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mt-2">Next-Gen Logistics</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Access ID</label>
                        <div className="relative">
                            <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 text-sm"></i>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-zinc-50 border border-zinc-100 rounded-[15px] py-4 pl-12 pr-4 text-zinc-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all placeholder:text-zinc-300"
                                placeholder="admin@warehouse.os"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Security Key</label>
                        <div className="relative">
                            <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 text-sm"></i>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-zinc-50 border border-zinc-100 rounded-[15px] py-4 pl-12 pr-4 text-zinc-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all placeholder:text-zinc-300"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>
                    {error && (
                        <div className="bg-red-50 border border-red-100 p-4 rounded-[15px] flex items-center gap-3 animate-shake">
                            <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                            <p className="text-red-600 text-xs font-black uppercase tracking-wider">{error}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-zinc-900 hover:bg-black text-white py-5 rounded-[18px] font-black text-lg shadow-2xl transition-all active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-3 group"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>Initialize System <i className="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i></>
                        )}
                    </button>
                </form>
                <div className="mt-10 pt-8 border-t border-zinc-50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Server Online</span>
                    </div>
                    <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">v4.2.0-PRO</span>
                </div>
            </div>
            <div className="mt-8 flex items-center gap-4 opacity-30">
                <i className="fa-solid fa-shield-halved text-zinc-400"></i>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Encrypted Session</p>
            </div>
        </div>
    );
};
