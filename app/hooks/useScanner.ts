import { useState, useCallback } from 'react';

interface ScanContext {
    title: string;
    subtitle: string;
    expected: string;
    alreadyProcessed: boolean;
    onComplete: (val: string) => void;
    onError: (val: string) => void;
}

export const useScanner = () => {
    const [scannerOpen, setScannerOpen] = useState(false);
    const [scanContext, setScanContext] = useState<ScanContext>({
        title: '',
        subtitle: '',
        expected: '',
        alreadyProcessed: false,
        onComplete: () => { },
        onError: () => { },
    });

    const openScanner = useCallback((
        title: string,
        subtitle: string,
        expected: string,
        processed: boolean,
        onComplete: (val: string) => void,
        onError?: (val: string) => void
    ) => {
        setScanContext({
            title,
            subtitle,
            expected,
            alreadyProcessed: processed,
            onComplete,
            onError: onError || (() => { }),
        });
        setScannerOpen(true);
    }, []);

    const closeScanner = useCallback(() => {
        setScannerOpen(false);
    }, []);

    return {
        scannerOpen,
        scanContext,
        openScanner,
        closeScanner,
    };
};
