import { Part } from './types';

export const playScannerSound = (type: 'success' | 'error' | 'duplicate') => {
    if (typeof window === 'undefined') return;

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
