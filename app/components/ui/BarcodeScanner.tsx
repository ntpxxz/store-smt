import React, { useState, useEffect, useRef } from 'react';
import { playScannerSound } from '@/lib/audio';
import { Html5Qrcode } from 'html5-qrcode';

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
    const [status, setStatus] = useState<ScanStatus>('idle');
    const [cameraError, setCameraError] = useState(false);
    const scannerRef = useRef<Html5Qrcode | null>(null);
    const [scannedResult, setScannedResult] = useState<string | null>(null);

    useEffect(() => {
        const scannerId = "barcode-reader";
        let isActive = true;

        const startScanner = async () => {
            try {
                const html5QrCode = new Html5Qrcode(scannerId);
                scannerRef.current = html5QrCode;

                const config = {
                    fps: 10,
                    qrbox: { width: 250, height: 250 },
                    aspectRatio: 1.0
                };

                await html5QrCode.start(
                    { facingMode: "environment" },
                    config,
                    (decodedText) => {
                        if (isActive) {
                            handleScanResult(decodedText);
                        }
                    },
                    (errorMessage) => {
                        // Ignore frequent errors like "No barcode found"
                    }
                );
            } catch (err) {
                console.error("Scanner start error:", err);
                if (isActive) setCameraError(true);
            }
        };

        startScanner();

        return () => {
            isActive = false;
            if (scannerRef.current && scannerRef.current.isScanning) {
                scannerRef.current.stop().catch(err => console.error("Scanner stop error:", err));
            }
        };
    }, []);

    const handleScanResult = (scannedValue: string) => {
        if (status !== 'idle') return;

        setScannedResult(scannedValue);
        let newStatus: ScanStatus = 'success';

        if (expectedValue && scannedValue !== expectedValue) {
            newStatus = 'error';
        } else if (alreadyProcessed) {
            newStatus = 'duplicate';
        }

        setStatus(newStatus);
        playScannerSound(newStatus);

        if (newStatus === 'success') {
            // Stop scanning once success is found
            if (scannerRef.current && scannerRef.current.isScanning) {
                scannerRef.current.pause();
            }
            setTimeout(() => onScan(scannedValue), 800);
        } else {
            setTimeout(() => {
                setStatus('idle');
                setScannedResult(null);
                if (newStatus === 'error' && onError) {
                    onError(scannedValue);
                }
            }, 1500);
        }
    };

    const handleSimulationScan = () => {
        if (status !== 'idle') return;
        const isMockError = expectedValue && Math.random() < 0.2;
        const scannedValue = isMockError ? "WRONG-SKU-" + Math.floor(Math.random() * 999) : (expectedValue || "SKU-AUTO-" + Math.floor(Math.random() * 1000));
        handleScanResult(scannedValue);
    };

    return (
        <div className="absolute inset-0 bg-white/95 z-[100] flex flex-col animate-fade-in">
            <div className="flex items-center justify-between p-8 text-app-text">
                <button onClick={onClose} className="w-12 h-12 flex items-center justify-center rounded-[18px] bg-black/5 backdrop-blur-md border border-black/5 active:scale-90 transition-transform">
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>
                <div className="text-center">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-app-text-muted mt-1">{subtitle}</p>
                </div>
                <div className="w-12"></div>
            </div>

            <div className="flex-1 relative flex items-center justify-center p-8">
                <div className="relative w-full aspect-square max-w-[340px] bg-zinc-100 rounded-[40px] border-4 border-black/5 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.05)]" onClick={handleSimulationScan}>
                    <div id="barcode-reader" className="absolute inset-0 w-full h-full object-cover"></div>

                    {cameraError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-zinc-200/50 z-10">
                            <i className="fa-solid fa-video-slash text-app-text-muted text-4xl mb-4"></i>
                            <p className="text-[10px] text-app-text-muted uppercase font-semibold tracking-wider leading-relaxed">System Camera Offline<br />Tap to simulation scan</p>
                        </div>
                    )}

                    <div className="absolute inset-0 border-[50px] border-white/60 pointer-events-none z-20"></div>

                    {status === 'idle' && (
                        <div className="absolute left-10 right-10 h-1 bg-brand-primary shadow-[0_0_30px_rgba(124,58,237,0.5)] animate-scan z-20 rounded-full"></div>
                    )}

                    {status === 'success' && (
                        <div className="absolute inset-0 bg-brand-success/90 flex flex-col items-center justify-center z-30 animate-fade-in">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                                <i className="fa-solid fa-check text-5xl text-brand-success"></i>
                            </div>
                            <span className="text-white font-bold text-xl uppercase tracking-wider mt-6">Match Found</span>
                            <p className="text-white/80 text-sm mt-2 font-mono">{scannedResult}</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="absolute inset-0 bg-brand-error/90 flex flex-col items-center justify-center z-30 animate-fade-in">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-shake">
                                <i className="fa-solid fa-xmark text-5xl text-brand-error"></i>
                            </div>
                            <span className="text-white font-bold text-xl uppercase tracking-wider mt-6">SKU Mismatch</span>
                            <p className="text-white/80 text-sm mt-2 font-mono">{scannedResult}</p>
                        </div>
                    )}

                    {status === 'duplicate' && (
                        <div className="absolute inset-0 bg-brand-orange/90 flex flex-col items-center justify-center z-30 animate-fade-in">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                <i className="fa-solid fa-clone text-5xl text-brand-orange"></i>
                            </div>
                            <span className="text-white font-bold text-xl uppercase tracking-wider mt-6">Already Scanned</span>
                            <p className="text-white/80 text-sm mt-2 font-mono">{scannedResult}</p>
                        </div>
                    )}

                    {/* Corner Brackets */}
                    <div className="absolute top-12 left-12 w-10 h-10 border-t-4 border-l-4 border-black/20 rounded-tl-lg z-20"></div>
                    <div className="absolute top-12 right-12 w-10 h-10 border-t-4 border-r-4 border-black/20 rounded-tr-lg z-20"></div>
                    <div className="absolute bottom-12 left-12 w-10 h-10 border-b-4 border-l-4 border-black/20 rounded-bl-lg z-20"></div>
                    <div className="absolute bottom-12 right-12 w-10 h-10 border-b-4 border-r-4 border-black/20 rounded-br-lg z-20"></div>
                </div>
            </div>

            <div className="p-12 text-center">
                <p className="text-app-text-muted text-[10px] font-semibold uppercase tracking-widest mb-6">Position barcode within frame</p>
                <div className="flex justify-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-app-text-muted"><i className="fa-solid fa-bolt-lightning"></i></div>
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-app-text-muted"><i className="fa-solid fa-magnifying-glass-plus"></i></div>
                </div>
            </div>
        </div>
    );
};

