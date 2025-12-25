import React, { useState, useEffect, useRef } from 'react';
import { playScannerSound } from '@/lib/audio';

type ScanStatus = 'idle' | 'success' | 'error' | 'duplicate';

interface BarcodeScannerProps {
    onClose: () => void;
    onScan: (scannedValue: string) => void;
    onError?: (scannedValue: string) => void;
    title: string;
    subtitle: string;
    expectedValue?: string;
    alreadyProcessed?: boolean;
}

export const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onClose, onScan, onError, title, subtitle, expectedValue, alreadyProcessed }) => {
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
