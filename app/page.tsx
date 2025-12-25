'use client';

import React, { useState, useEffect, useRef } from 'react';
import { View, Part, MO, InboundInvoice, InboundItem, Movement, Activity } from '@/lib/types';
import { api } from '@/lib/api-client';

const Checkbox: React.FC<{ label: string; checked: boolean; onChange: (v: boolean) => void }> = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group select-none">
    <div
      onClick={() => onChange(!checked)}
      className={`w-6 h-6 rounded-ios-sm border-2 flex items-center justify-center transition-all ${checked ? 'bg-brand-primary border-brand-primary' : 'border-app-border group-hover:border-brand-primary/50'}`}
    >
      {checked && <i className="fa-solid fa-check text-white text-xs"></i>}
    </div>
    <span className="text-xs font-bold text-brand-muted group-hover:text-app-text transition-colors">{label}</span>
  </label>
);

const SegmentedControl: React.FC<{ options: string[]; value: string; onChange: (v: any) => void }> = ({ options, value, onChange }) => (
  <div className="flex bg-app-bg p-1 rounded-ios-sm border border-app-border w-full">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onChange(opt.toLowerCase())}
        className={`flex-1 py-1.5 rounded-[10px] text-[10px] font-bold uppercase tracking-widest transition-all ${value.toLowerCase() === opt.toLowerCase() ? 'bg-app-surface text-app-text shadow-sm' : 'text-brand-muted hover:text-app-text'}`}
      >
        {opt}
      </button>
    ))}
  </div>
);

// --- Login Component ---
const LoginScreen: React.FC<{ onLogin: (token: string, user: any) => void }> = ({ onLogin }) => {
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

// --- Audio Utility ---

const playScannerSound = (type: 'success' | 'error' | 'duplicate') => {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === 'success') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } else if (type === 'error') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } else if (type === 'duplicate') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    osc.start();
    osc.frequency.setValueAtTime(440, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(330, ctx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.stop(ctx.currentTime + 0.3);
  }
};

// --- Components ---

const StatusBar: React.FC = () => (
  <div className="h-12 w-full flex items-end justify-between px-6 pb-2 text-xs font-medium z-50 bg-app-surface/90 backdrop-blur-md sticky top-0 border-b border-app-border shrink-0 text-app-text">
    <span>9:41 AM</span>
    <div className="flex gap-2 items-center">
      <span className="flex items-center gap-1 text-brand-success">
        <div className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse"></div>
        AS400 Online
      </span>
      <i className="fa-solid fa-wifi ml-2"></i>
      <i className="fa-solid fa-battery-full"></i>
    </div>
  </div>
);

const Navigation: React.FC<{ active: View; onSwitch: (v: View) => void; onQuickRelocate: () => void }> = ({ active, onSwitch, onQuickRelocate }) => {
  const tabs = [
    { id: View.HOME, icon: 'fa-house', label: 'Home' },
    { id: View.INBOUND, icon: 'fa-truck-ramp-box', label: 'Inbound' },
    { id: View.INVENTORY, icon: 'fa-shapes', label: 'Parts', center: true },
    { id: View.PICKING, icon: 'fa-dolly', label: 'Pick' },
    { id: View.MENU, icon: 'fa-bars', label: 'Menu' },
  ];

  return (
    <div className="absolute bottom-0 w-full h-[88px] bg-app-surface/90 backdrop-blur-xl border-t border-app-border flex items-center justify-around pb-6 z-40">
      {/* Quick Move FAB */}
      <button
        onClick={onQuickRelocate}
        className="absolute -top-16 right-6 w-14 h-14 bg-brand-primary rounded-full shadow-2xl shadow-brand-primary/40 flex items-center justify-center text-white active:scale-90 transition-transform z-50 group"
      >
        <i className="fa-solid fa-bolt text-xl group-active:rotate-12"></i>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-success rounded-full border-2 border-app-bg"></div>
      </button>

      {tabs.map((tab) => {
        const isActive = active === tab.id || (tab.id === View.INVENTORY && (active === View.PART_DETAIL || active === View.MOVE_STOCK || active === View.LOCATIONS));
        return (
          <button
            key={tab.id}
            onClick={() => onSwitch(tab.id)}
            className={`flex flex-col items-center gap-1.5 w-16 group transition-all ${isActive ? 'active' : 'opacity-60'} ${tab.center ? '-mt-8' : ''}`}
          >
            <div className={tab.center ? `w-14 h-14 bg-app-surface border border-app-border rounded-[15px] flex items-center justify-center shadow-lg group-[.active]:border-brand-primary group-[.active]:bg-brand-primary group-[.active]:shadow-[0_0_20px_rgba(0,70,255,0.4)]` : ''}>
              <i className={`fa-solid ${tab.icon} text-xl ${isActive ? 'text-brand-primary' : 'text-brand-muted'} ${tab.center && isActive ? 'text-white' : ''}`}></i>
            </div>
            <span className={`text-[10px] ${isActive ? 'text-app-text font-bold' : 'text-brand-muted'} ${tab.center ? 'mt-1' : ''}`}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// --- Error Modal ---

const ErrorModal: React.FC<{ title: string; message: string; onClose: () => void }> = ({ title, message, onClose }) => {
  return (
    <div className="absolute inset-0 z-[110] flex items-center justify-center p-6 bg-brand-error/20 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-sm bg-app-surface border border-brand-error/30 rounded-[30px] p-8 shadow-2xl text-center animate-shake">
        <div className="w-20 h-20 bg-brand-error rounded-[22px] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_20px_rgba(220,38,38,0.2)]">
          <i className="fa-solid fa-triangle-exclamation text-white text-4xl"></i>
        </div>
        <h2 className="text-2xl font-black text-app-text mb-2 tracking-tighter">{title}</h2>
        <p className="text-brand-muted text-sm mb-8 font-medium leading-relaxed">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-brand-error text-white py-5 rounded-[18px] font-black text-lg shadow-xl active:scale-95 transition-all"
        >
          Dismiss & Retry
        </button>
      </div>
    </div>
  );
};

// --- Scanner Overlay ---

type ScanStatus = 'idle' | 'success' | 'error' | 'duplicate';

const BarcodeScanner: React.FC<{
  onClose: () => void;
  onScan: (scannedValue: string) => void;
  onError?: (scannedValue: string) => void;
  title: string;
  subtitle: string;
  expectedValue?: string;
  alreadyProcessed?: boolean;
}> = ({ onClose, onScan, onError, title, subtitle, expectedValue, alreadyProcessed }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<ScanStatus>('idle');
  const [cameraError, setCameraError] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let isActive = true;

    async function startCamera() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError(true);
        return;
      }
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } } });
      } catch (err) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: true });
        } catch (err2) {
          if (isActive) setCameraError(true);
        }
      }
      if (isActive && stream && videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => videoRef.current?.play().catch(e => console.error(e));
      }
    }
    startCamera();
    return () => { isActive = false; if (stream) stream.getTracks().forEach(track => track.stop()); };
  }, []);

  const handleTriggerScan = () => {
    if (status !== 'idle') return;

    const isMockError = expectedValue && Math.random() < 0.2;
    const scannedValue = isMockError ? "WRONG-SKU-" + Math.floor(Math.random() * 999) : (expectedValue || "SKU-AUTO-" + Math.floor(Math.random() * 1000));

    let newStatus: ScanStatus = 'success';

    if (expectedValue && scannedValue !== expectedValue) {
      newStatus = 'error';
    } else if (alreadyProcessed) {
      newStatus = 'duplicate';
    }

    setStatus(newStatus);
    playScannerSound(newStatus);

    if (newStatus === 'success') {
      setTimeout(() => onScan(scannedValue), 800);
    } else {
      setTimeout(() => {
        setStatus('idle');
        if (newStatus === 'error' && onError) {
          onError(scannedValue);
        }
      }, 1000);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/95 z-[100] flex flex-col animate-fade-in">
      <div className="flex items-center justify-between p-8 text-white">
        <button onClick={onClose} className="w-12 h-12 flex items-center justify-center rounded-[18px] bg-white/10 backdrop-blur-md border border-white/10 active:scale-90 transition-transform">
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
        <div className="text-center">
          <h3 className="text-xl font-black tracking-tight">{title}</h3>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-1">{subtitle}</p>
        </div>
        <div className="w-12"></div>
      </div>

      <div className="flex-1 relative flex items-center justify-center p-8">
        <div className="relative w-full aspect-square max-w-[340px] bg-zinc-900 rounded-[40px] border-4 border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]" onClick={handleTriggerScan}>
          {!cameraError ? (
            <video ref={videoRef} autoPlay playsInline muted className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${status !== 'idle' ? 'opacity-20' : 'opacity-40'}`} />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-zinc-800/50">
              <i className="fa-solid fa-video-slash text-white/20 text-4xl mb-4"></i>
              <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em] leading-relaxed">System Camera Offline<br />Tap to simulation scan</p>
            </div>
          )}

          <div className="absolute inset-0 border-[50px] border-black/60 pointer-events-none"></div>

          {status === 'idle' && (
            <div className="absolute left-10 right-10 h-1 bg-brand-primary shadow-[0_0_30px_rgba(37,99,235,0.8)] animate-scan z-20 rounded-full"></div>
          )}

          {status === 'success' && (
            <div className="absolute inset-0 bg-brand-success/90 flex flex-col items-center justify-center z-30 animate-fade-in">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <i className="fa-solid fa-check text-5xl text-brand-success"></i>
              </div>
              <span className="text-white font-black text-xl uppercase tracking-[0.2em] mt-6">Match Found</span>
            </div>
          )}

          {status === 'error' && (
            <div className="absolute inset-0 bg-brand-error/90 flex flex-col items-center justify-center z-30 animate-fade-in">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-shake">
                <i className="fa-solid fa-xmark text-5xl text-brand-error"></i>
              </div>
              <span className="text-white font-black text-xl uppercase tracking-[0.2em] mt-6">SKU Mismatch</span>
            </div>
          )}

          {status === 'duplicate' && (
            <div className="absolute inset-0 bg-brand-orange/90 flex flex-col items-center justify-center z-30 animate-fade-in">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <i className="fa-solid fa-clone text-5xl text-brand-orange"></i>
              </div>
              <span className="text-white font-black text-xl uppercase tracking-[0.2em] mt-6">Already Scanned</span>
            </div>
          )}

          {/* Corner Brackets */}
          <div className="absolute top-12 left-12 w-10 h-10 border-t-4 border-l-4 border-white/40 rounded-tl-lg"></div>
          <div className="absolute top-12 right-12 w-10 h-10 border-t-4 border-r-4 border-white/40 rounded-tr-lg"></div>
          <div className="absolute bottom-12 left-12 w-10 h-10 border-b-4 border-l-4 border-white/40 rounded-bl-lg"></div>
          <div className="absolute bottom-12 right-12 w-10 h-10 border-b-4 border-r-4 border-white/40 rounded-br-lg"></div>
        </div>
      </div>

      <div className="p-12 text-center">
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Position barcode within frame</p>
        <div className="flex justify-center gap-6">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/30"><i className="fa-solid fa-bolt-lightning"></i></div>
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/30"><i className="fa-solid fa-magnifying-glass-plus"></i></div>
        </div>
      </div>
    </div>
  );
};

// --- System Alert ---
const SystemAlert: React.FC<{ message: string; type?: 'error' | 'success'; onClose: () => void }> = ({ message, type = 'error', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-brand-success' : 'bg-brand-error';
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';

  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 z-[120] w-[90%] max-w-[380px] animate-fade-in">
      <div className={`${bgColor} text-white p-5 rounded-[22px] shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex items-center gap-4 border border-white/20 backdrop-blur-md`}>
        <div className="w-12 h-12 bg-white/20 rounded-[15px] flex items-center justify-center shrink-0 shadow-inner">
          <i className={`fa-solid ${icon} text-2xl`}></i>
        </div>
        <div className="flex-1">
          <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-0.5 opacity-80">{type === 'success' ? 'System Notification' : 'Security Alert'}</h4>
          <p className="text-sm font-bold leading-tight">{message}</p>
        </div>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>
    </div>
  );
};

// --- Stock Movement Chart Component ---

const StockChart: React.FC<{ part: Part }> = ({ part }) => {
  const history = [...(part.movements || [])].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (history.length < 2) return (
    <div className="mt-8 bg-app-surface border border-app-border rounded-[15px] p-6 text-center">
      <p className="text-xs text-brand-muted font-bold uppercase tracking-widest">Insufficient trend data</p>
    </div>
  );

  // Reconstruction of balance history based on current quantity
  // We work backwards to find previous levels
  let reconstruction = [{ date: 'Now', val: part.qty }];
  let runningQty = part.qty;

  const reversedHistory = [...history].reverse();
  reversedHistory.forEach((move, i) => {
    if (move.type === 'inbound') runningQty -= move.qty;
    else if (move.type === 'transfer' || move.type === 'adjustment') runningQty += move.qty;

    reconstruction.unshift({
      date: move.date.split('-').slice(1).join('/'),
      val: Math.max(0, runningQty)
    });
  });

  // Limit to last 6 points for clarity on mobile
  const plotPoints = reconstruction.slice(-6);

  const width = 320;
  const height = 120;
  const paddingX = 40;
  const paddingY = 25;

  const maxVal = Math.max(...plotPoints.map(p => p.val)) || 10;
  const minVal = Math.min(...plotPoints.map(p => p.val));
  const range = (maxVal - minVal) || 10;

  const getX = (index: number) => (index / (plotPoints.length - 1)) * (width - paddingX * 2) + paddingX;
  const getY = (val: number) => height - ((val - minVal) / range) * (height - paddingY * 2) - paddingY;

  const pathD = plotPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.val)}`).join(' ');
  const areaD = `${pathD} L ${getX(plotPoints.length - 1)} ${height} L ${getX(0)} ${height} Z`;

  return (
    <div className="mt-8 bg-app-surface border border-app-border rounded-[15px] p-6 text-left relative overflow-hidden group">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 text-brand-muted">
          <i className="fa-solid fa-chart-line text-brand-primary"></i>
          Stock Trends
        </h3>
        <span className="text-[10px] font-black text-brand-success uppercase tracking-widest">+12% vs LY</span>
      </div>

      <div className="relative w-full h-[120px]">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0046FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0046FF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid Lines */}
          <line x1={paddingX} y1={getY(maxVal)} x2={width - paddingX} y2={getY(maxVal)} stroke="var(--color-app-border)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1={paddingX} y1={getY(minVal)} x2={width - paddingX} y2={getY(minVal)} stroke="var(--color-app-border)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Area Fill */}
          <path d={areaD} fill="url(#chartFill)" />

          {/* Line Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#0046FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_4px_10px_rgba(0,70,255,0.3)]"
          />

          {/* Points */}
          {plotPoints.map((p, i) => (
            <circle
              key={i}
              cx={getX(i)}
              cy={getY(p.val)}
              r="4"
              fill="var(--color-app-surface)"
              stroke="#0046FF"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-between mt-4 px-2">
        {plotPoints.map((p, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-[8px] font-black text-brand-muted uppercase tracking-tighter">{p.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Zone & Status Helper ---

const getLocationMeta = (aisle: string, binNumber: number, inventory: Part[]) => {
  const binFullString = `Aisle ${aisle}, Bin ${binNumber < 10 ? '0' + binNumber : binNumber}`;
  const partsInBin = inventory.filter(p => p.location === binFullString);

  const types = [
    { name: 'IQC Zone', icon: 'fa-microscope', short: 'IQC' },
    { name: 'Pick Zone', icon: 'fa-hand-pointer', short: 'PICK' },
    { name: 'Bulk Store', icon: 'fa-box-archive', short: 'STORE' },
    { name: 'Restricted', icon: 'fa-lock', short: 'SAFE' }
  ];

  const typeIndex = Math.floor((binNumber - 1) / 2);
  const type = types[typeIndex] || types[2];

  let occupancy = partsInBin.length > 0 ? (partsInBin.length / 5) * 100 : 0;
  if (occupancy > 100) occupancy = 100;

  let statusColor = 'brand-blue';
  let statusLabel = 'Normal';

  if (partsInBin.length === 0) {
    statusColor = 'brand-success';
    statusLabel = 'Empty';
  } else if (partsInBin.length >= 5) {
    statusColor = 'brand-error';
    statusLabel = 'Full';
  } else {
    statusColor = 'brand-blue';
    statusLabel = 'Normal';
  }

  return { type, occupancy, statusColor, statusLabel, partsInBin };
};

// --- App Container ---

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [inventory, setInventory] = useState<Part[]>([]);
  const [moList, setMoList] = useState<MO[]>([]);
  const [inbound, setInbound] = useState<InboundInvoice[]>([]);
  const [activityLog, setActivityLog] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeMO, setActiveMO] = useState<MO | null>(null);
  const [activeInbound, setActiveInbound] = useState<InboundInvoice | null>(null);
  const [activePart, setActivePart] = useState<Part | null>(null);
  const [aiInsight, setAiInsight] = useState<string>("Analyzing logistics...");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDetailsCollapsed, setIsDetailsCollapsed] = useState(false);
  const [scannerOpen, setScannerOpen] = useState(false);

  useEffect(() => {
    // Mock AI Insight
    const insights = [
      "Inventory levels for Gear Nylon 20T are critical. Consider reordering.",
      "Picking speed is up 12% this shift. Great job!",
      "Inbound dock is clear. Ready for next shipment.",
      "Smart Priority: Focus on MO #9992 for urgent delivery."
    ];
    setAiInsight(insights[Math.floor(Math.random() * insights.length)]);
  }, [inventory, moList]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.setProperty('--color-app-bg', '#09090b');
      root.style.setProperty('--color-app-surface', '#18181b');
      root.style.setProperty('--color-app-border', '#27272a');
      root.style.setProperty('--color-app-text', '#fafafa');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--color-app-bg', '#fafafa');
      root.style.setProperty('--color-app-surface', '#ffffff');
      root.style.setProperty('--color-app-border', '#e4e4e7');
      root.style.setProperty('--color-app-text', '#09090b');
    }
  }, [isDarkMode]);

  const [scanContext, setScanContext] = useState({
    title: '',
    subtitle: '',
    expected: '',
    alreadyProcessed: false,
    onComplete: (val: string) => { },
    onError: (val: string) => { }
  });
  const [sysAlert, setSysAlert] = useState<{ message: string; type: 'error' | 'success' } | null>(null);
  const [prominentError, setProminentError] = useState<{ title: string; message: string } | null>(null);

  // Locations/Move States
  const [selectedAisle, setSelectedAisle] = useState('A');
  const [selectedBin, setSelectedBin] = useState<string | null>(null);
  const [transferQty, setTransferQty] = useState<number>(0);
  const [destAisle, setDestAisle] = useState('A');
  const [destBin, setDestBin] = useState('01');

  const [inboundSubTab, setInboundSubTab] = useState<'all' | 'pending' | 'received'>('all');
  const [inventoryFilter, setInventoryFilter] = useState<Part['status'] | 'all'>('all');
  const [moFilter, setMoFilter] = useState<MO['status'] | 'all'>('all');
  const [moSearch, setMoSearch] = useState("");


  // Data Fetching
  const fetchData = async () => {
    setLoading(true);
    try {
      const [invData, mosData, inbData, insightData] = await Promise.all([
        api.inventory.getAll(),
        api.mos.getAll(),
        api.inbound.getAll(),
        api.insights.get()
      ]);
      setInventory(invData);
      setMoList(mosData);
      setInbound(inbData);
      setAiInsight(insightData.insight);
    } catch (err) {
      console.error('Data fetch error:', err);
      setSysAlert({ message: 'Failed to sync with server', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (token: string, userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
    fetchData();
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Persist theme and update class
  useEffect(() => {
    const root = document.getElementById('root');
    if (isDarkMode) {
      root?.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      root?.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const addActivity = (type: Activity['type'], label: string, description: string) => {
    const newActivity: Activity = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      label,
      timestamp: 'Just now',
      description
    };
    setActivityLog(prev => [newActivity, ...prev].slice(0, 5));
  };

  const openScanner = (
    title: string,
    subtitle: string,
    expected: string,
    processed: boolean,
    onComplete: (val: string) => void,
    onError?: (val: string) => void
  ) => {
    setScanContext({ title, subtitle, expected, alreadyProcessed: processed, onComplete, onError: onError || (() => { }) });
    setScannerOpen(true);
  };

  const handleQuickRelocate = () => {
    openScanner('Quick Relocate (Step 1)', 'Scan SKU to move', '', false, (sku) => {
      const part = inventory.find(p => p.sku === sku || p.id === sku);
      if (!part) {
        setSysAlert({ message: `SKU ${sku} not found.`, type: 'error' });
        return;
      }
      setTimeout(() => {
        openScanner(`Move ${part.name}`, 'Scan Destination Bin (e.g. A-01)', '', false, (binCode) => {
          const match = binCode.match(/([A-Z])-?0?(\d+)/i);
          const finalLocation = match ? `Aisle ${match[1].toUpperCase()}, Bin ${match[2].padStart(2, '0')}` : binCode;
          handleAssignPartToBin(part.sku, finalLocation);
        });
      }, 500);
    });
  };

  const handleAssignPartToBin = async (scannedPartSku: string, targetLocation: string) => {
    const partToMove = inventory.find(p => p.sku === scannedPartSku || p.id === scannedPartSku);
    if (!partToMove) {
      setSysAlert({ message: `SKU "${scannedPartSku}" not found in system.`, type: 'error' });
      return;
    }

    try {
      await api.inventory.move(partToMove.id, {
        qty: partToMove.qty,
        destination: targetLocation,
        type: 'transfer'
      });

      addActivity('move', partToMove.sku, `Relocated to ${targetLocation}`);
      setSysAlert({ message: `${partToMove.name} moved to ${targetLocation}`, type: 'success' });
      fetchData(); // Refresh data
    } catch (err: any) {
      setSysAlert({ message: err.message || 'Failed to move part', type: 'error' });
    }
  };

  const handleExecuteTransfer = async () => {
    if (!activePart) return;
    const newLocation = `Aisle ${destAisle}, Bin ${destBin}`;

    if (transferQty <= 0 || transferQty > activePart.qty) {
      setSysAlert({ message: "Invalid transfer quantity.", type: "error" });
      return;
    }

    try {
      await api.inventory.move(activePart.id, {
        qty: transferQty,
        destination: newLocation,
        type: 'transfer'
      });

      addActivity('move', activePart.sku, `Moved to ${newLocation}`);
      setSysAlert({ message: `${activePart.name} moved to ${newLocation}`, type: 'success' });
      setCurrentView(View.INVENTORY);
      setActivePart(null);
      fetchData();
    } catch (err: any) {
      setSysAlert({ message: err.message || 'Failed to transfer part', type: 'error' });
    }
  };

  const handlePickPart = async (moId: string, scannedPartId: string) => {
    try {
      const updatedMO = await api.mos.pick(moId, scannedPartId);
      setMoList(prev => prev.map(mo => mo.id === moId ? updatedMO : mo));
      if (activeMO?.id === moId) setActiveMO(updatedMO);
      if (updatedMO.progress === 100) addActivity('pick', `MO #${moId}`, 'Order picking completed');
      setSysAlert({ message: 'Item picked successfully', type: 'success' });
    } catch (err: any) {
      setSysAlert({ message: err.message || 'Failed to pick item', type: 'error' });
    }
  };

  const handleReceiveItem = async (invoiceId: string, itemId: string, actualQty: number) => {
    try {
      await api.inbound.receive(invoiceId, itemId, actualQty);
      addActivity('receive', 'Inbound', `Received item from invoice ${invoiceId}`);
      setSysAlert({ message: 'Item received successfully', type: 'success' });
      fetchData();
    } catch (err: any) {
      setSysAlert({ message: err.message || 'Failed to receive item', type: 'error' });
    }
  };

  const getStatusMeta = (status: Part['status']) => {
    switch (status) {
      case 'critical': return { icon: 'fa-triangle-exclamation', color: 'text-brand-error', bg: 'bg-brand-error/10', text: 'text-brand-error' };
      case 'low': return { icon: 'fa-circle-exclamation', color: 'text-brand-orange', bg: 'bg-brand-orange/10', text: 'text-brand-orange' };
      case 'normal': return { icon: 'fa-circle-check', color: 'text-brand-success', bg: 'bg-brand-success/10', text: 'text-brand-success' };
      case 'fast': return { icon: 'fa-bolt', color: 'text-brand-blue', bg: 'bg-brand-blue/10', text: 'text-brand-blue' };
      default: return { icon: 'fa-circle', color: 'text-brand-muted', bg: 'bg-brand-muted/10', text: 'text-brand-muted' };
    }
  };

  const renderLocationStatusTag = (lStatus?: string, size: 'sm' | 'md' = 'sm') => {
    if (!lStatus) return null;
    let config = {
      color: 'text-brand-muted',
      bg: 'bg-app-surface',
      border: 'border-app-border',
      icon: 'fa-question-circle'
    };

    switch (lStatus) {
      case 'Available':
        config = { color: 'text-brand-success', bg: 'bg-brand-success/15', border: 'border-brand-success/40', icon: 'fa-circle-check' };
        break;
      case 'Reserved':
        config = { color: 'text-brand-blue', bg: 'bg-brand-blue/15', border: 'border-brand-blue/40', icon: 'fa-clock' };
        break;
      case 'On Hold':
        config = { color: 'text-brand-orange', bg: 'bg-brand-orange/15', border: 'border-brand-orange/40', icon: 'fa-pause-circle' };
        break;
    }

    return (
      <span className={`flex items-center gap-1.5 font-black uppercase rounded-full border ${config.bg} ${config.color} ${config.border} ${size === 'sm' ? 'text-[8px] px-2 py-0.5' : 'text-[9px] px-2.5 py-1'}`}>
        <i className={`fa-solid ${config.icon} ${size === 'sm' ? 'text-[7px]' : 'text-[8px]'}`}></i>
        {lStatus}
      </span>
    );
  };

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 pt-6 pb-2">
              <div className="flex justify-between items-center mb-6">
                <div className="text-app-text">
                  <div className="flex items-center gap-2 mb-2 opacity-50">
                    <i className="fa-solid fa-warehouse text-brand-primary text-xs"></i>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Smart Warehouse</span>
                  </div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider font-bold mb-1">Station B-12</p>
                  <h1 className="text-2xl font-bold">Good Afternoon,<br /><span className="text-brand-primary font-black">{user?.name || 'Alex M.'}</span></h1>
                </div>
                <div className="w-12 h-12 rounded-[15px] bg-app-surface border border-app-border flex items-center justify-center relative shadow-lg text-app-text">
                  <i className="fa-solid fa-user"></i>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-success rounded-full border-2 border-app-surface"></div>
                </div>
              </div>

              {/* KPI Section */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-app-surface border border-app-border p-4 rounded-[20px] shadow-lg flex items-center gap-4 text-app-text">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-app-bg" />
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="25.12" className="text-brand-success" />
                    </svg>
                    <span className="absolute text-[10px] font-black">98%</span>
                  </div>
                  <div>
                    <h5 className="text-[8px] font-black text-brand-muted uppercase tracking-widest">Accuracy</h5>
                    <p className="text-xs font-black">Excellent</p>
                  </div>
                </div>
                <div className="flex-1 bg-app-surface border border-app-border p-4 rounded-[20px] shadow-lg flex items-center gap-4 text-app-text">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <i className="fa-solid fa-gauge-high"></i>
                  </div>
                  <div>
                    <h5 className="text-[8px] font-black text-brand-muted uppercase tracking-widest">Speed</h5>
                    <p className="text-xs font-black">42 items/h</p>
                  </div>
                </div>
              </div>

              {/* Smart Advice Card */}
              <div className="bg-app-surface/80 border border-app-border p-5 rounded-[20px] mb-8 relative overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 -mr-12 -mt-12 rounded-full blur-[40px]"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-[12px] flex items-center justify-center shadow-[0_0_15px_rgba(0,70,255,0.3)]"><i className="fa-solid fa-bolt-lightning text-white text-sm"></i></div>
                    <div>
                      <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">Smart Priority</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse"></div>
                        <span className="text-[8px] font-black text-brand-muted uppercase tracking-widest">Live Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-tight text-app-text font-medium mb-5 italic">"{aiInsight}"</p>
                <div className="flex gap-2">
                  <button onClick={() => setCurrentView(View.PICKING)} className="flex-1 bg-app-bg border border-app-border py-2.5 rounded-[12px] text-[10px] font-black uppercase tracking-widest text-brand-primary flex items-center justify-center gap-2 active:scale-95 transition-all">Go to Pick <i className="fa-solid fa-arrow-right text-[8px]"></i></button>
                  <button onClick={() => setCurrentView(View.INBOUND)} className="flex-1 bg-app-bg border border-app-border py-2.5 rounded-[12px] text-[10px] font-black uppercase tracking-widest text-brand-muted flex items-center justify-center gap-2 active:scale-95 transition-all">Inbound <i className="fa-solid fa-truck text-[8px]"></i></button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div onClick={() => setCurrentView(View.PICKING)} className="bg-brand-primary text-white p-5 rounded-[15px] relative overflow-hidden cursor-pointer active:scale-95 transition-all group shadow-[0_0_20px_rgba(0,70,255,0.25)]">
                  <div className="flex justify-between items-start mb-8"><span className="bg-black/20 px-2.5 py-1 rounded-[3px] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">Priority</span><div className="w-8 h-8 rounded-[15px] bg-black/20 flex items-center justify-center"><i className="fa-solid fa-arrow-right -rotate-45 text-sm"></i></div></div>
                  <h2 className="text-4xl font-black mb-1 tracking-tighter">{moList.length}</h2>
                  <p className="text-xs font-bold opacity-80 uppercase tracking-wide">Waiting MO (Pick)</p>
                </div>
                <div onClick={() => { setCurrentView(View.LOCATIONS); setSelectedBin(null); }} className="bg-app-surface border border-app-border p-5 rounded-[15px] relative overflow-hidden cursor-pointer active:scale-95 transition-all hover:border-brand-muted/50 text-app-text">
                  <div className="flex justify-between items-start mb-8"><span className="bg-app-bg px-2.5 py-1 rounded-[3px] text-[10px] font-bold text-brand-muted uppercase tracking-wider">Map</span><div className="w-8 h-8 rounded-[15px] bg-app-bg flex items-center justify-center"><i className="fa-solid fa-chevron-right text-xs text-brand-muted"></i></div></div>
                  <h2 className="text-4xl font-black mb-1 tracking-tighter">12</h2>
                  <p className="text-xs text-brand-muted uppercase tracking-wide">Empty Bins</p>
                </div>
              </div>

              {/* Recent Activity Timeline */}
              <div className="px-2">
                <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-[0.3em] mb-4">Recent Shifts Logs</h4>
                <div className="space-y-4">
                  {activityLog.map(act => (
                    <div key={act.id} className="flex gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className={`w-2 h-2 rounded-full mt-1.5 ${act.type === 'move' ? 'bg-brand-blue' : act.type === 'receive' ? 'bg-brand-success' : 'bg-brand-orange'}`}></div>
                        <div className="w-0.5 flex-1 bg-app-border my-1"></div>
                      </div>
                      <div className="pb-4">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-black text-app-text">{act.label}</span>
                          <span className="text-[8px] text-brand-muted font-bold uppercase tracking-widest">{act.timestamp}</span>
                        </div>
                        <p className="text-[11px] text-brand-muted leading-tight">{act.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case View.INBOUND:
        const fltInb = inboundSubTab === 'all'
          ? inbound
          : inbound.filter(i => {
            if (inboundSubTab === 'received') return i.status === 'completed';
            return i.status === inboundSubTab;
          });
        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border text-app-text">
              <h2 className="text-xl font-bold mb-4">Inbound Logistics</h2>
              <div className="flex gap-2 overflow-x-auto no-scrollbar">{['all', 'pending', 'received'].map(f => <button key={f} onClick={() => setInboundSubTab(f as any)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${inboundSubTab === f ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-app-bg border-app-border text-brand-muted'}`}>{f}</button>)}</div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {fltInb.map((inv) => (
                  <div key={inv.id} onClick={() => { setActiveInbound(inv); setCurrentView(View.LOCATIONS); }} className="bg-app-surface p-5 rounded-[15px] border border-app-border flex justify-between items-center hover:bg-app-surface-hover transition-all cursor-pointer shadow-sm group active:scale-95 text-app-text">
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 bg-app-bg rounded-[15px] flex items-center justify-center text-2xl shadow-inner border border-app-border group-hover:scale-105 transition-transform ${inv.status === 'completed' ? 'text-brand-success' : 'text-brand-muted'}`}><i className="fa-solid fa-truck-ramp-box"></i></div>
                      <div>
                        <h4 className="font-black text-base leading-tight mb-1">{inv.id}</h4>
                        <div className="flex flex-col gap-1">
                          <p className="text-[10px] text-brand-muted font-black uppercase tracking-widest">{inv.vendor}</p>
                          <p className="text-[10px] text-brand-primary font-mono font-bold uppercase tracking-widest">{inv.po}</p>
                        </div>
                      </div>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[10px] text-brand-muted group-hover:translate-x-1 transition-transform"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case View.LOCATIONS:
        if (activeInbound) {
          const rvdCount = activeInbound.items.filter(i => i.received).length;
          const totalItems = activeInbound.items.length;
          return (
            <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
              <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 flex items-center gap-4 border-b border-app-border text-app-text">
                <button onClick={() => { setActiveInbound(null); setCurrentView(View.INBOUND); }} className="w-10 h-10 rounded-[15px] bg-app-bg flex items-center justify-center border border-app-border active:bg-app-surface-hover transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
                <div><h3 className="font-bold text-xs text-brand-muted uppercase tracking-widest">Input Invoice</h3><h2 className="font-black text-lg">{activeInbound.id}</h2></div>
              </div>
              <div className="p-6">
                <div className="bg-app-surface p-5 rounded-[15px] border border-app-border mb-8 shadow-inner relative overflow-hidden text-app-text">
                  <div className="flex justify-between mb-2"><span className="text-xs text-brand-muted font-bold uppercase tracking-wider">Vendor</span><span className="text-xs font-black">{activeInbound.vendor}</span></div>
                  <div className="flex justify-between mb-2"><span className="text-xs text-brand-muted font-bold uppercase tracking-wider">PO Number</span><span className="text-xs font-mono font-bold">{activeInbound.po}</span></div>
                </div>
                <div className="flex justify-between items-end mb-4 px-2">
                  <h4 className="font-black text-xs uppercase tracking-widest text-brand-muted">PO Items</h4>
                  <span className="text-[10px] text-brand-primary font-bold">{rvdCount}/{totalItems} Received</span>
                </div>
                <div className="space-y-3 mb-8">
                  {activeInbound.items.map((item) => (
                    <div key={item.id} className={`bg-app-surface p-4 rounded-[15px] border flex flex-col transition-all group relative overflow-hidden ${item.received ? 'border-brand-success/30 bg-brand-success/5 opacity-60' : 'border-app-border hover:border-brand-primary/50'}`}>
                      <div className="flex items-center justify-between text-app-text">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className={`w-12 h-12 rounded-[15px] flex items-center justify-center font-black transition-colors shrink-0 ${item.received ? 'bg-brand-success text-white' : 'bg-app-bg text-brand-muted border border-app-border'}`}>{item.received ? <i className="fa-solid fa-check"></i> : item.id}</div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-base truncate">{item.name}</h4>
                            <p className="text-[10px] font-mono font-bold text-brand-muted tracking-tighter">{item.sku}</p>
                          </div>
                        </div>
                        {item.received ? (
                          <div className="text-right">
                            <p className="font-black text-lg text-brand-success">{item.receivedQty || item.qty}</p>
                            <p className="text-[10px] font-black uppercase tracking-wider text-brand-success">{item.unit}</p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Expected:</span>
                              <span className="text-sm font-black text-app-text">{item.qty} {item.unit}</span>
                            </div>
                            <button onClick={() => openScanner(`Receive ${item.name}`, `SKU: ${item.sku}`, item.id, item.received, () => handleReceiveItem(activeInbound.id, item.id, item.qty))} className="w-12 h-12 rounded-[15px] bg-brand-primary text-white flex items-center justify-center active:scale-90 transition-all shadow-lg"><i className="fa-solid fa-barcode text-xl"></i></button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button disabled={rvdCount < totalItems} onClick={() => { setActiveInbound(null); setCurrentView(View.INBOUND); }} className={`w-full py-5 rounded-[15px] font-black text-lg flex items-center justify-center gap-3 transition-all shadow-2xl ${rvdCount === totalItems ? 'bg-brand-primary text-white' : 'bg-app-surface text-brand-muted cursor-not-allowed border border-app-border'}`}>Finish Inbound <i className="fa-solid fa-circle-check"></i></button>
              </div>
            </div>
          );
        } else if (selectedBin) {
          const binIndex = parseInt(selectedBin.split('-')[1]);
          const locationMeta = getLocationMeta(selectedAisle, binIndex, inventory);
          const binFullString = `Aisle ${selectedAisle}, Bin ${binIndex < 10 ? '0' + binIndex : binIndex}`;

          return (
            <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
              <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 flex items-center gap-4 border-b border-app-border text-app-text">
                <button onClick={() => setSelectedBin(null)} className="w-10 h-10 rounded-[15px] bg-app-bg flex items-center justify-center border border-app-border active:bg-app-surface-hover transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
                <div><h3 className="font-bold text-xs text-brand-muted uppercase tracking-widest">Location Storage</h3><h2 className="font-black text-lg">Bin {selectedBin}</h2></div>
              </div>
              <div className="p-6">
                <div className="bg-app-surface p-6 rounded-[15px] border border-app-border mb-8 flex items-center justify-between shadow-inner relative overflow-hidden text-app-text">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 -mr-16 -mt-16 rounded-full blur-3xl`}></div>
                  <div>
                    <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${locationMeta.statusColor.replace('text-', 'bg-')} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
                      <p className="font-black text-lg">{locationMeta.statusLabel}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">Occupancy</p>
                    <p className={`font-black text-lg ${locationMeta.statusColor}`}>{locationMeta.occupancy.toFixed(0)}%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4 pl-2">
                  <h4 className="font-black text-xs uppercase tracking-widest text-brand-muted">Stored SKU List</h4>
                  {locationMeta.occupancy < 100 && (
                    <button onClick={() => openScanner('Assign Part', `Bin: ${selectedBin}`, '', false, (v) => handleAssignPartToBin(v, binFullString))} className="text-[10px] font-black text-brand-primary uppercase tracking-widest flex items-center gap-1.5"><i className="fa-solid fa-plus-circle"></i> Assign Part</button>
                  )}
                </div>

                <div className="space-y-4">
                  {locationMeta.partsInBin.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-app-border rounded-[20px] bg-app-bg/50">
                      <div className="w-16 h-16 bg-app-surface rounded-full flex items-center justify-center mx-auto mb-4 border border-app-border">
                        <i className="fa-solid fa-box-open text-brand-muted text-2xl"></i>
                      </div>
                      <p className="text-xs text-brand-muted font-bold mb-4">Location is currently empty.</p>
                      <button onClick={() => openScanner('Assign Part', `Bin: ${selectedBin}`, '', false, (v) => handleAssignPartToBin(v, binFullString))} className="bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-lg active:scale-95 transition-all">Assign New SKU</button>
                    </div>
                  ) : (
                    locationMeta.partsInBin.map(item => (
                      <div key={item.id} onClick={() => { setActivePart(item); setCurrentView(View.PART_DETAIL); }} className="bg-app-surface p-4 rounded-[15px] border border-app-border flex justify-between items-center group active:scale-95 transition-all cursor-pointer text-app-text">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-app-bg rounded-[15px] flex items-center justify-center text-2xl border border-app-border">{item.icon}</div>
                          <div>
                            <h4 className="font-bold text-sm">{item.name}</h4>
                            <p className="text-[10px] font-mono font-bold text-brand-muted tracking-tighter">{item.sku}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-lg">{item.qty.toLocaleString()}</p>
                          <p className="text-[9px] font-black uppercase text-brand-muted tracking-widest">{item.unit}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
              <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border">
                <h2 className="text-xl font-bold mb-4 text-app-text">Warehouse Explorer</h2>
                <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
                  {['A', 'B', 'C', 'Z'].map(aisle => (
                    <button key={aisle} onClick={() => setSelectedAisle(aisle)} className={`px-6 py-2 rounded-[15px] text-xs font-black transition-all ${selectedAisle === aisle ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'bg-app-surface border border-app-border text-brand-muted'}`}>Aisle {aisle}</button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2.5 px-1">
                  {[{ color: 'bg-brand-success', label: 'Empty' }, { color: 'bg-brand-blue', label: 'Normal' }, { color: 'bg-brand-error', label: 'Full' }].map(l => (
                    <div key={l.label} className="flex items-center gap-1.5 bg-app-surface/40 px-3 py-1.5 rounded-[10px] border border-app-border">
                      <div className={`w-2 h-2 rounded-full ${l.color}`}></div>
                      <span className="text-[9px] font-black text-brand-muted uppercase tracking-widest">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(binNum => {
                    const meta = getLocationMeta(selectedAisle, binNum, inventory);
                    return (
                      <div key={binNum} onClick={() => setSelectedBin(`${selectedAisle}-0${binNum}`)} className={`bg-app-surface p-5 rounded-[15px] border transition-all cursor-pointer active:scale-95 group relative overflow-hidden ${selectedBin === `${selectedAisle}-0${binNum}` ? `border-brand-primary bg-brand-primary/10` : 'border-app-border hover:border-brand-muted/50'}`}>
                        <div className={`absolute top-0 right-0 w-12 h-12 ${meta.statusColor.replace('text-', 'bg-')}/5 -mr-4 -mt-4 rounded-full blur-xl transition-colors`}></div>
                        <div className="flex justify-between items-start mb-4 relative z-10 text-app-text">
                          <div>
                            <h4 className="font-black text-xl tracking-tighter">{selectedAisle}-0{binNum}</h4>
                            <div className="flex items-center gap-1.5 mt-1 opacity-60"><i className={`fa-solid ${meta.type.icon} text-[8px]`}></i><span className="text-[8px] font-black uppercase tracking-widest">{meta.type.short}</span></div>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${meta.statusColor.replace('text-', 'bg-')} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
                        </div>
                        <div className="mt-6 space-y-1.5 relative z-10">
                          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-brand-muted"><span>Occupancy</span><span className={meta.statusLabel === 'Full' ? meta.statusColor : 'text-app-text'}>{meta.occupancy.toFixed(0)}%</span></div>
                          <div className="w-full bg-app-bg h-1.5 rounded-full overflow-hidden border border-app-border"><div className={`h-full transition-all duration-700 ${meta.statusColor.replace('text-', 'bg-')}`} style={{ width: `${meta.occupancy}%` }}></div></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

      case View.MOVE_STOCK:
        if (!activePart) return null;
        const isExceeding = transferQty > activePart.qty;
        const isInvalid = transferQty <= 0 || isExceeding || `Aisle ${destAisle}, Bin ${destBin}` === activePart.location;

        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 glass z-20 flex items-center gap-4 border-b border-app-border text-app-text">
              <button onClick={() => setCurrentView(View.PART_DETAIL)} className="w-10 h-10 flex items-center justify-center rounded-ios-sm bg-app-bg hover:bg-app-surface-hover border border-app-border transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
              <div><h3 className="font-bold text-[10px] uppercase tracking-widest text-brand-muted">Stock Relocation</h3><h2 className="font-bold text-lg">{activePart.name}</h2></div>
            </div>
            <div className="p-6">
              <div className="ios-card p-8 mb-8 relative overflow-hidden text-app-text">
                <div className="flex items-center justify-between mb-10">
                  <div className="text-center flex-1"><p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-2">Source</p><p className="font-bold text-brand-primary text-sm">{activePart.location}</p></div>
                  <div className="px-6 text-brand-muted opacity-30"><i className="fa-solid fa-arrow-right-long text-2xl"></i></div>
                  <div className="text-center flex-1"><p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-2">Destination</p><p className="font-bold text-brand-success text-sm">Aisle {destAisle}, Bin {destBin}</p></div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-brand-muted">
                    <span>Quantity to move</span>
                    <span className={`${isExceeding ? 'text-brand-error' : 'text-app-text'} font-bold`}>{transferQty} / {activePart.qty} {activePart.unit}</span>
                  </div>

                  <div className="relative">
                    <input
                      type="number"
                      value={transferQty}
                      onChange={(e) => setTransferQty(Math.max(0, parseInt(e.target.value) || 0))}
                      className={`w-full bg-app-bg border ${isExceeding ? 'border-brand-error' : 'border-app-border'} rounded-ios-sm py-5 text-app-text text-3xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary transition-all`}
                    />
                    {isExceeding && (
                      <p className="text-brand-error text-[10px] font-bold uppercase tracking-widest mt-3 text-center">Exceeds available stock</p>
                    )}
                  </div>

                  <input
                    type="range"
                    min="1"
                    max={activePart.qty}
                    value={transferQty > activePart.qty ? activePart.qty : transferQty}
                    onChange={(e) => setTransferQty(parseInt(e.target.value))}
                    className="w-full accent-brand-primary h-2 bg-app-bg rounded-full appearance-none cursor-pointer"
                  />

                  <div className="flex gap-3">
                    <button onClick={() => setTransferQty(Math.floor(activePart.qty * 0.25))} className="flex-1 bg-app-bg py-3 rounded-ios-sm border border-app-border text-[10px] font-bold uppercase tracking-widest text-brand-muted active:bg-app-surface transition-colors">25%</button>
                    <button onClick={() => setTransferQty(Math.floor(activePart.qty * 0.50))} className="flex-1 bg-app-bg py-3 rounded-ios-sm border border-app-border text-[10px] font-bold uppercase tracking-widest text-brand-muted active:bg-app-surface transition-colors">50%</button>
                    <button onClick={() => setTransferQty(activePart.qty)} className="flex-1 bg-app-bg py-3 rounded-ios-sm border border-app-border text-[10px] font-bold uppercase tracking-widest text-brand-primary active:bg-app-surface transition-colors">Max</button>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-[11px] uppercase tracking-widest text-brand-muted mb-5 pl-2">Select Target Bin</h4>
                <div className="grid grid-cols-4 gap-4">
                  {['01', '02', '03', '04', '05', '06', '07', '08'].map(b => (
                    <button key={b} onClick={() => setDestBin(b)} className={`py-5 rounded-ios-sm text-sm font-bold transition-all border ${destBin === b ? `bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20` : 'bg-app-surface border-app-border text-brand-muted'}`}>{b}</button>
                  ))}
                </div>
              </div>
              <button
                onClick={handleExecuteTransfer}
                disabled={isInvalid}
                className={`w-full py-5 rounded-ios-sm font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg ${!isInvalid ? 'bg-brand-primary text-white shadow-brand-primary/20 active:scale-95' : 'bg-app-surface text-brand-muted cursor-not-allowed border border-app-border'}`}
              >
                Confirm Relocation
              </button>
            </div>
          </div>
        );

      case View.PICKING:
        const srtMO = moList.filter(mo => (moFilter === 'all' || mo.status === moFilter)).filter(mo => mo.id.includes(moSearch) || mo.description.includes(moSearch)).sort((a, b) => (a.status === 'urgent' ? -1 : 1));
        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border text-app-text">
              <h2 className="text-xl font-bold mb-4">Production Queue</h2>
              <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">{['all', 'urgent', 'ready', 'scheduled'].map(f => <button key={f} onClick={() => setMoFilter(f as any)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${moFilter === f ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-app-bg border-app-border text-brand-muted'}`}>{f}</button>)}</div>
              <div className="relative"><i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted text-xs"></i><input type="text" placeholder="Search MO # or Description..." value={moSearch} onChange={(e) => setMoSearch(e.target.value)} className="w-full bg-app-bg border border-app-border rounded-[15px] py-3 pl-10 pr-4 text-xs font-bold focus:outline-none focus:border-brand-primary transition-colors" /></div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {srtMO.map((mo) => (
                  <div key={mo.id} onClick={() => { setActiveMO(mo); setCurrentView(View.MO_DETAIL); }} className="bg-app-surface p-5 rounded-[15px] border border-app-border flex flex-col hover:bg-app-surface-hover transition-all cursor-pointer shadow-sm group active:scale-95 text-app-text">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center text-lg shadow-inner border border-app-border ${mo.status === 'urgent' ? 'bg-brand-error text-white animate-pulse' : 'bg-app-bg text-brand-muted group-hover:text-brand-primary transition-colors'}`}><i className={mo.status === 'urgent' ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-dolly"}></i></div>
                        <div className="min-w-0">
                          <h4 className="font-black text-base leading-tight mb-1">MO #{mo.id}</h4>
                          <p className="text-[10px] text-brand-muted font-bold truncate uppercase tracking-widest">{mo.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className={`text-xs font-black ${mo.progress === 100 ? 'text-brand-success' : 'text-brand-primary'}`}>{mo.progress}%</span>
                        <i className="fa-solid fa-chevron-right text-[10px] text-brand-muted group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                    <div className="w-full bg-app-bg h-2 rounded-full overflow-hidden border border-app-border"><div className={`h-full transition-all duration-1000 ${mo.status === 'urgent' ? 'bg-brand-error' : 'bg-brand-primary'}`} style={{ width: `${mo.progress}%` }}></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case View.MO_DETAIL:
        if (!activeMO) return null;
        const pkdCount = activeMO.parts.filter(p => p.picked).length;
        const totParts = activeMO.parts.length;
        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 glass z-20 flex items-center gap-4 border-b border-app-border text-app-text">
              <button onClick={() => setCurrentView(View.PICKING)} className="w-10 h-10 rounded-ios-sm bg-app-bg flex items-center justify-center border border-app-border active:bg-app-surface-hover transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
              <div><h3 className="font-bold text-[10px] text-brand-muted uppercase tracking-widest">Order Checklist</h3><h2 className="font-bold text-lg">MO #{activeMO.id}</h2></div>
            </div>
            <div className="p-6">
              <div className="ios-card p-6 mb-8 relative overflow-hidden text-app-text">
                <div className="flex justify-between mb-4"><span className="text-xs text-brand-muted font-bold uppercase tracking-widest">Product</span><span className="text-sm font-bold">{activeMO.description}</span></div>
                <div className="mt-6 space-y-2.5">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-brand-muted"><span>Progress</span><span className="text-brand-primary">{activeMO.progress}%</span></div>
                  <div className="w-full bg-app-bg h-2 rounded-full overflow-hidden border border-app-border"><div className={`h-full transition-all duration-500 bg-brand-primary`} style={{ width: `${activeMO.progress}%` }}></div></div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {activeMO.parts.map((part, idx) => (
                  <div key={part.id} className={`ios-card p-5 flex items-center justify-between transition-all ${part.picked ? 'opacity-50 bg-brand-success/5' : ''}`}>
                    <div className="flex items-center gap-5 flex-1 min-w-0 text-app-text">
                      <div className={`w-14 h-14 rounded-ios-sm flex items-center justify-center font-bold ${part.picked ? 'bg-brand-success text-white' : 'bg-app-bg text-brand-muted border border-app-border'}`}>{part.picked ? <i className="fa-solid fa-check"></i> : idx + 1}</div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-base truncate mb-0.5">{part.name}</h4>
                        <p className="text-[10px] text-brand-muted font-bold uppercase tracking-widest">{part.id}</p>
                      </div>
                    </div>
                    {!part.picked && (
                      <button
                        onClick={() => openScanner(
                          `Pick ${part.name}`,
                          `BOM ID: ${part.id}`,
                          part.id,
                          part.picked,
                          (v) => handlePickPart(activeMO.id, v),
                          (scanned) => setProminentError({
                            title: "BOM SKU Mismatch",
                            message: `Scanned code "${scanned}" is not part of this manufacturing order. Please verify the physical component and try again.`
                          })
                        )}
                        className="w-12 h-12 rounded-ios-sm bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-sm active:scale-90 transition-transform"
                      >
                        <i className="fa-solid fa-barcode text-xl"></i>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button disabled={pkdCount < totParts} onClick={() => { setActiveMO(null); setCurrentView(View.PICKING) }} className={`w-full py-4.5 rounded-ios-sm font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg ${pkdCount === totParts ? 'bg-brand-primary text-white shadow-brand-primary/20' : 'bg-app-surface text-brand-muted cursor-not-allowed border border-app-border'}`}>Complete Order</button>
            </div>
          </div>
        );

      case View.INVENTORY:
        const fltInv = inventoryFilter === 'all' ? inventory : inventory.filter(i => i.status === inventoryFilter);
        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border flex justify-between items-center text-app-text"><h2 className="text-xl font-bold">Active Stock</h2><div className="flex gap-2 overflow-x-auto no-scrollbar">{['all', 'critical', 'low', 'normal', 'fast'].map(f => <button key={f} onClick={() => setInventoryFilter(f as any)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${inventoryFilter === f ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-app-bg border-app-border text-brand-muted'}`}>{f}</button>)}</div></div>
            <div className="p-6">
              <div className="space-y-4">
                {fltInv.map(item => {
                  const statusMeta = getStatusMeta(item.status);
                  return (
                    <div key={item.id} onClick={() => { setActivePart(item); setCurrentView(View.PART_DETAIL); }} className="bg-app-surface p-5 rounded-[15px] border border-app-border flex justify-between items-center hover:bg-app-surface-hover transition-all cursor-pointer shadow-sm group active:scale-95 text-app-text">
                      <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 bg-app-bg rounded-[15px] flex items-center justify-center text-3xl shadow-inner border border-app-border relative group-hover:scale-105 transition-transform`}><div className={`absolute inset-0 rounded-[15px] opacity-10 ${statusMeta.bg}`}></div>{item.icon}</div>
                        <div>
                          <h4 className="font-black text-base leading-tight mb-1">{item.name}</h4>
                          <div className="flex flex-col gap-1.5">
                            <p className="text-[11px] text-brand-muted font-mono font-bold uppercase tracking-widest">{item.sku}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest"><i className="fa-solid fa-location-dot mr-1"></i>{item.location}</p>
                              {renderLocationStatusTag(item.locationStatus)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <div className="flex items-center gap-3">
                          <div className="relative flex items-center justify-center"><div className={`absolute inset-0 rounded-full blur-[8px] opacity-50 ${statusMeta.bg} animate-pulse-slow`}></div><div className={`w-7 h-7 rounded-full flex items-center justify-center z-10 border border-white/20 shadow-lg ${statusMeta.bg} ${statusMeta.text}`}><i className={`fa-solid ${statusMeta.icon} text-[11px]`}></i></div></div>
                          <p className={`font-black text-2xl tracking-tighter ${statusMeta.color}`}>{item.qty.toLocaleString()}</p>
                        </div>
                        <p className="text-[10px] text-brand-muted font-black uppercase tracking-widest mt-0.5">{item.unit}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case View.PART_DETAIL:
        if (!activePart) return null;
        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 flex items-center justify-between border-b border-app-border text-app-text"><button onClick={() => setCurrentView(View.INVENTORY)} className="w-10 h-10 flex items-center justify-center rounded-[15px] bg-app-bg border border-app-border transition-colors"><i className="fa-solid fa-arrow-left"></i></button><h3 className="font-black text-sm uppercase tracking-[0.2em] text-brand-muted">Part Detail</h3><div className="w-10"></div></div>
            <div className="p-6 text-center text-app-text">
              <div className="w-28 h-28 mx-auto bg-app-bg rounded-[15px] flex items-center justify-center text-5xl mb-4 shadow-xl border border-app-border">{activePart.icon}</div>
              <h2 className="text-3xl font-black mb-1 leading-tight">{activePart.name}</h2>
              <div className="flex flex-col items-center gap-2">
                <p className="text-brand-primary text-sm font-mono font-black tracking-widest uppercase">SKU: {activePart.sku}</p>
                {renderLocationStatusTag(activePart.locationStatus, 'md')}
              </div>

              {/* Collapsible Trigger for Part Details */}
              <button
                onClick={() => setIsDetailsCollapsed(!isDetailsCollapsed)}
                className="w-full mt-8 flex items-center justify-between px-4 py-2 border-b border-app-border text-brand-muted hover:text-app-text transition-colors"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Stock Information</span>
                <i className={`fa-solid fa-chevron-${isDetailsCollapsed ? 'down' : 'up'} text-[10px]`}></i>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isDetailsCollapsed ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}`}>
                <div className="mt-4 bg-app-surface border border-app-border rounded-[15px] p-6 mb-2 text-left">
                  <div className="flex justify-between items-center mb-4"><h3 className="font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">Inventory Live</h3><span className={`text-[10px] uppercase tracking-widest font-black ${activePart.status === 'critical' ? 'text-brand-error' : 'text-brand-success'}`}>{activePart.status}</span></div>
                  <div className="flex items-end gap-2 mb-4"><span className="text-5xl font-black tracking-tighter">{activePart.qty.toLocaleString()}</span><span className="text-sm text-brand-muted mb-2 font-black uppercase tracking-widest">{activePart.unit}</span></div>
                </div>

                {/* Enhanced Stock Chart Component */}
                <StockChart part={activePart} />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <button className="bg-app-bg border border-app-border text-app-text font-bold uppercase tracking-widest py-5 rounded-ios-sm text-xs active:scale-95 transition-all">Adjust Qty</button>
                <button onClick={() => { setTransferQty(Math.max(1, Math.min(activePart.qty, 1))); setCurrentView(View.MOVE_STOCK); }} className="bg-brand-primary text-white font-bold uppercase tracking-widest py-5 rounded-ios-sm text-xs shadow-lg shadow-brand-primary/20 active:scale-95 transition-all">Move Stock</button>
              </div>
            </div>
          </div>
        );

      case View.MENU:
        return (
          <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter p-8 text-app-text">
            <div className="mb-8 flex items-center gap-6 p-6 bg-app-surface rounded-[15px] border border-app-border shadow-xl">
              <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-2xl shadow-2xl ring-4 ring-brand-primary/20 text-white"><i className="fa-solid fa-user-astronaut"></i></div>
              <div><h2 className="text-xl font-black">{user?.name || 'Alex Miller'}</h2><p className="text-brand-muted text-[10px] font-black uppercase tracking-widest">{user?.role || 'Senior Specialist'} • Floor B</p></div>
            </div>

            {/* Theme Toggle Section */}
            <div className="bg-app-surface p-6 rounded-[15px] border border-app-border mb-8 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-app-bg flex items-center justify-center text-brand-primary border border-app-border">
                    <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest">Appearance</h4>
                    <p className="text-[10px] text-brand-muted font-bold">{isDarkMode ? 'Dark' : 'Light'} Mode Active</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 flex items-center ${isDarkMode ? 'bg-brand-primary' : 'bg-zinc-300'}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white shadow-lg transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Warehouse Map', icon: 'fa-map-location-dot', color: 'text-brand-blue', view: View.LOCATIONS },
                { label: 'Bulk Transfer', icon: 'fa-truck-ramp-box', color: 'text-brand-orange' },
                { label: 'Sync Status', icon: 'fa-arrows-rotate', color: 'text-brand-success' },
                { label: 'Logout', icon: 'fa-power-off', color: 'text-brand-error', action: () => { localStorage.removeItem('auth_token'); window.location.reload(); } }
              ].map(item => (
                <button key={item.label} onClick={() => { if (item.view) setCurrentView(item.view); if (item.action) item.action(); }} className="bg-app-surface aspect-square rounded-[15px] border border-app-border flex flex-col items-center justify-center gap-5 transition-all active:scale-95 shadow-xl group">
                  <div className={`w-14 h-14 rounded-[15px] bg-app-bg border border-app-border flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform ${item.color}`}><i className={`fa-solid ${item.icon} text-2xl`}></i></div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-center px-4 leading-tight">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      default: return null;
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa]">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-zinc-100 rounded-[25px] animate-pulse"></div>
          <div className="absolute inset-0 w-24 h-24 border-t-4 border-blue-600 rounded-[25px] animate-spin"></div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-zinc-900 font-black text-lg tracking-tighter">Initializing Core</h3>
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mt-1">Syncing Warehouse Data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden bg-zinc-100 font-sans theme-transition">
      <div className="relative w-full h-full max-w-[420px] bg-zinc-50 flex flex-col mx-auto overflow-hidden shadow-xl">
        <i className="fa-solid fa-warehouse watermark"></i>
        <StatusBar />
        {renderContent()}
        <Navigation active={currentView} onSwitch={(v) => { setCurrentView(v); setActiveInbound(null); setActivePart(null); setSelectedBin(null); }} onQuickRelocate={handleQuickRelocate} />
        {scannerOpen && (
          <BarcodeScanner
            title={scanContext.title}
            subtitle={scanContext.subtitle}
            expectedValue={scanContext.expected}
            alreadyProcessed={scanContext.alreadyProcessed}
            onClose={() => setScannerOpen(false)}
            onScan={(v) => { setScannerOpen(false); scanContext.onComplete(v); }}
            onError={(v) => { setScannerOpen(false); scanContext.onError(v); }}
          />
        )}
        {prominentError && (
          <ErrorModal
            title={prominentError.title}
            message={prominentError.message}
            onClose={() => setProminentError(null)}
          />
        )}
        {sysAlert && <SystemAlert message={sysAlert.message} type={sysAlert.type} onClose={() => setSysAlert(null)} />}
      </div>
    </div>
  );
};

export default App;
