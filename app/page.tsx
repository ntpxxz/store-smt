'use client';

import React, { useState, useEffect } from 'react';
import { View, Part, MO, InboundInvoice } from '@/lib/types';
import { api } from '@/lib/api-client';
import { useAppData } from '@/app/hooks/useAppData';
import { useScanner } from '@/app/hooks/useScanner';

// Components
import { StatusBar } from '@/app/components/layout/StatusBar';
import { Navigation } from '@/app/components/layout/Navigation';
import { ErrorModal } from '@/app/components/ui/ErrorModal';
import { SystemAlert } from '@/app/components/ui/SystemAlert';
import { BarcodeScanner } from '@/app/components/ui/BarcodeScanner';
import QueueDashboard from '@/app/components/ui/QueueDashboard';
import { getPendingCount } from '@/lib/offline';

// Views
import { LoginScreen } from '@/app/components/views/LoginScreen';
import { HomeView } from '@/app/components/views/HomeView';
import { InboundView } from '@/app/components/views/InboundView';
import { InboundDetailView } from '@/app/components/views/InboundDetailView';
import { LocationMapView } from '@/app/components/views/LocationMapView';
import { BinDetailView } from '@/app/components/views/BinDetailView';
import { MoveStockView } from '@/app/components/views/MoveStockView';
import { PickingView } from '@/app/components/views/PickingView';
import { MODetailView } from '@/app/components/views/MODetailView';
import { InventoryView } from '@/app/components/views/InventoryView';
import { PartDetailView } from '@/app/components/views/PartDetailView';
import { MenuView } from '@/app/components/views/MenuView';

const App: React.FC = () => {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  // App State
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const {
    inventory, setInventory,
    moList, setMoList,
    inbound, setInbound,
    activityLog, aiInsight,
    loading, sysAlert, setSysAlert,
    fetchData, addActivity
  } = useAppData(isAuthenticated);

  // Scanner Hook
  const { scannerOpen, scanContext, openScanner, closeScanner } = useScanner();

  // View Specific State
  const [activePart, setActivePart] = useState<Part | null>(null);
  const [activeMO, setActiveMO] = useState<MO | null>(null);
  const [activeInbound, setActiveInbound] = useState<InboundInvoice | null>(null);

  const [selectedAisle, setSelectedAisle] = useState('A');
  const [selectedBin, setSelectedBin] = useState<string | null>(null);

  const [transferQty, setTransferQty] = useState(0);
  const [destAisle, setDestAisle] = useState('A');
  const [destBin, setDestBin] = useState('01');

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<Part['status'] | 'all'>('all');

  const [moSearch, setMoSearch] = useState('');
  const [moFilter, setMoFilter] = useState<MO['status'] | 'all'>('all');

  const [inboundSubTab, setInboundSubTab] = useState<'all' | 'pending' | 'received'>('all');

  // Settings State
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [autoScan, setAutoScan] = useState(true);
  const [showHelp, setShowHelp] = useState(true);
  const [language, setLanguage] = useState('EN');

  // Error State
  const [prominentError, setProminentError] = useState<{ title: string; message: string } | null>(null);

  const [queueOpen, setQueueOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);

  // Initial Auth Check
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
      // Ideally we would validate the token here or fetch user profile
      setUser({ name: 'Admin User', role: 'ADMIN' }); // Mock for now or fetch from API
    }
  }, []);

  // Poll pending queue count
  useEffect(() => {
    let mounted = true;
    const refresh = async () => {
      try {
        const c = await getPendingCount();
        if (mounted) setPendingCount(c);
      } catch (e) {
        // ignore
      }
    };
    void refresh();
    const iv = setInterval(() => void refresh(), 3000);

    // Listen to offline queue events to show immediate toasts
    const onQueued = (ev: Event) => {
      const detail: any = (ev as CustomEvent).detail;
      setSysAlert({ message: `Operation queued: ${detail.method} ${detail.path}`, type: 'success' });
      void refresh();
    };

    const onSyncSuccess = (ev: Event) => {
      const detail: any = (ev as CustomEvent).detail;
      setSysAlert({ message: `Synced: ${detail.path}`, type: 'success' });
      void refresh();
    };

    const onSyncFailure = (ev: Event) => {
      const detail: any = (ev as CustomEvent).detail;
      setSysAlert({ message: `Sync failed: ${detail.path} (status ${detail.status})`, type: 'error' });
      void refresh();
    };

    const onConflict = (ev: Event) => {
      const detail: any = (ev as CustomEvent).detail;
      setSysAlert({ message: `Conflict syncing ${detail.path}. Please resolve in queue.`, type: 'error' });
      setQueueOpen(true);
      void refresh();
    };

    const onSyncError = (ev: Event) => {
      const detail: any = (ev as CustomEvent).detail;
      setSysAlert({ message: `Sync error: ${detail.error}`, type: 'error' });
      void refresh();
    };

    window.addEventListener('offline:queued', onQueued as EventListener);
    window.addEventListener('offline:sync:success', onSyncSuccess as EventListener);
    window.addEventListener('offline:sync:failure', onSyncFailure as EventListener);
    window.addEventListener('offline:conflict', onConflict as EventListener);
    window.addEventListener('offline:sync:error', onSyncError as EventListener);

    return () => { mounted = false; clearInterval(iv); window.removeEventListener('offline:queued', onQueued as EventListener); window.removeEventListener('offline:sync:success', onSyncSuccess as EventListener); window.removeEventListener('offline:sync:failure', onSyncFailure as EventListener); window.removeEventListener('offline:conflict', onConflict as EventListener); window.removeEventListener('offline:sync:error', onSyncError as EventListener); };
  }, []);

  const handleLogin = (token: string, userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    setUser(null);
    setCurrentView(View.HOME);
  };

  // --- Handlers ---

  const handleExecuteTransfer = async () => {
    if (!activePart) return;
    try {
      const res = await api.inventory.transfer(activePart.id, transferQty, `Aisle ${destAisle}, Bin ${destBin}`);

      // If queued, do optimistic update and notify user
      if (res && (res as any).queued) {
        setInventory(prev => prev.map(p => p.id === activePart.id ? { ...p, qty: p.qty - transferQty } : p));
        await fetchData();
        addActivity('move', 'Stock Transfer (queued)', `Moved ${transferQty} ${activePart.unit} of ${activePart.sku} to ${destAisle}-${destBin}`);
        setSysAlert({ message: 'Stock transfer queued (offline). It will sync when online.', type: 'success' });
        setCurrentView(View.PART_DETAIL);
        return;
      }

      // Normal success flow
      setInventory(prev => prev.map(p => {
        if (p.id === activePart.id) {
          return { ...p, qty: p.qty - transferQty };
        }
        return p;
      }));
      await fetchData();

      addActivity('move', 'Stock Transfer', `Moved ${transferQty} ${activePart.unit} of ${activePart.sku} to ${destAisle}-${destBin}`);
      setSysAlert({ message: 'Stock transfer confirmed', type: 'success' });
      setCurrentView(View.PART_DETAIL);
    } catch (err) {
      setProminentError({ title: 'Transfer Failed', message: 'Could not execute stock transfer. Please try again.' });
    }
  };

  const handlePickPart = async (moId: string, partId: string) => {
    closeScanner();
    try {
      const res = await api.mos.pick(moId, partId);

      if (res && (res as any).queued) {
        // Apply optimistic local update
        setMoList(prev => prev.map(m => {
          if (m.id === moId) {
            const updatedParts = m.parts.map(p => p.id === partId ? { ...p, picked: true } : p);
            const progress = Math.round((updatedParts.filter(p => p.picked).length / updatedParts.length) * 100);
            return { ...m, parts: updatedParts, progress };
          }
          return m;
        }));
        setSysAlert({ message: 'Pick recorded offline and queued for sync', type: 'success' });
        addActivity('pick', `MO #${moId}`, 'Pick queued (offline)');
        return;
      }

      const updatedMO = res as any;
      setMoList(prev => prev.map(mo => mo.id === moId ? updatedMO : mo));
      if (activeMO?.id === moId) setActiveMO(updatedMO);
      if ((updatedMO.progress || 0) === 100) addActivity('pick', `MO #${moId}`, 'Order picking completed');
      setSysAlert({ message: 'Item picked successfully', type: 'success' });
    } catch (err) {
      setProminentError({ title: 'Pick Failed', message: 'Could not record pick. Please try again.' });
    }
  };

  const handleReceiveItem = async (invoiceId: string, itemId: string, actualQty: number) => {
    closeScanner();
    try {
      const res = await api.inbound.receive(invoiceId, itemId, actualQty);

      if (res && (res as any).queued) {
        // Optimistic update: mark received locally
        setInbound(prev => prev.map(inv => {
          if (inv.id === invoiceId) {
            const updatedItems = inv.items.map(i => i.id === itemId ? { ...i, received: true, receivedQty: actualQty } : i);
            const allReceived = updatedItems.every(i => i.received);
            return { ...inv, items: updatedItems, status: allReceived ? 'completed' : inv.status };
          }
          return inv;
        }));
        setSysAlert({ message: 'Receive recorded offline and queued for sync', type: 'success' });
        return;
      }

      setInbound(prev => prev.map(inv => {
        if (inv.id === invoiceId) {
          const updatedItems = inv.items.map(i => i.id === itemId ? { ...i, received: true, receivedQty: actualQty } : i);
          const allReceived = updatedItems.every(i => i.received);
          return { ...inv, items: updatedItems, status: allReceived ? 'completed' : inv.status };
        }
        return inv;
      }));
      setSysAlert({ message: 'Item received successfully', type: 'success' });
    } catch (err) {
      setProminentError({ title: 'Receive Failed', message: 'Could not receive item. Please try again.' });
    }
  };

  const handleAssignPartToBin = async (scannedPartSku: string, targetLocation: string) => {
    closeScanner();
    const part = inventory.find(p => p.sku === scannedPartSku || p.id === scannedPartSku);
    if (part) {
      try {
        const res = await api.inventory.transfer(part.id, part.qty, targetLocation);

        if (res && (res as any).queued) {
          // optimistic local update
          setInventory(prev => prev.map(p => p.id === part.id ? { ...p, location: targetLocation } : p));
          await fetchData();
          setSysAlert({ message: `Assignment of ${part.sku} queued (offline)`, type: 'success' });
          return;
        }

        await fetchData();
        setSysAlert({ message: `Assigned ${part.sku} to ${targetLocation}`, type: 'success' });
      } catch (err) {
        setProminentError({ title: 'Assignment Failed', message: 'Could not assign part. Please try again.' });
      }
    } else {
      setProminentError({ title: 'Part Not Found', message: `SKU ${scannedPartSku} not found in inventory.` });
    }
  };

  const handleNavigateToMap = () => {
    setActiveInbound(null);
    setSelectedBin(null);
    setCurrentView(View.LOCATIONS);
  };

  // --- Render ---

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-app-bg">
        <div className="w-16 h-16 border-4 border-brand-primary/10 border-t-brand-primary rounded-full animate-spin mb-8 shadow-[0_0_20px_rgba(124,58,237,0.1)]"></div>
        <h2 className="text-xl font-bold text-app-text animate-pulse">Loading Warehouse OS...</h2>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView user={user} moList={moList} aiInsight={aiInsight} activityLog={activityLog} setCurrentView={setCurrentView} setSelectedBin={setSelectedBin} />;
      case View.INBOUND:
        if (activeInbound) return <InboundDetailView activeInbound={activeInbound} setActiveInbound={setActiveInbound} setCurrentView={setCurrentView} openScanner={openScanner} handleReceiveItem={handleReceiveItem} />;
        return <InboundView inbound={inbound} inboundSubTab={inboundSubTab} setInboundSubTab={setInboundSubTab} setActiveInbound={setActiveInbound} setCurrentView={setCurrentView} />;
      case View.LOCATIONS:
        if (selectedBin) return <BinDetailView selectedBin={selectedBin} selectedAisle={selectedAisle} setSelectedBin={setSelectedBin} inventory={inventory} setActivePart={setActivePart} setCurrentView={setCurrentView} openScanner={openScanner} handleAssignPartToBin={handleAssignPartToBin} />;
        return <LocationMapView selectedAisle={selectedAisle} setSelectedAisle={setSelectedAisle} setSelectedBin={setSelectedBin} inventory={inventory} setCurrentView={setCurrentView} />;
      case View.MOVE_STOCK:
        return activePart ? <MoveStockView activePart={activePart} transferQty={transferQty} setTransferQty={setTransferQty} destAisle={destAisle} setDestAisle={setDestAisle} destBin={destBin} setDestBin={setDestBin} handleExecuteTransfer={handleExecuteTransfer} setCurrentView={setCurrentView} /> : null;
      case View.PICKING:
        return <PickingView moList={moList} moFilter={moFilter} setMoFilter={setMoFilter} moSearch={moSearch} setMoSearch={setMoSearch} setActiveMO={setActiveMO} setCurrentView={setCurrentView} />;
      case View.MO_DETAIL:
        return activeMO ? <MODetailView activeMO={activeMO} setActiveMO={setActiveMO} setCurrentView={setCurrentView} openScanner={openScanner} handlePickPart={handlePickPart} setProminentError={setProminentError} /> : null;
      case View.INVENTORY:
        return <InventoryView inventory={inventory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} filter={filter} setFilter={setFilter} setActivePart={setActivePart} setCurrentView={setCurrentView} />;
      case View.PART_DETAIL:
        return activePart ? <PartDetailView activePart={activePart} setActivePart={setActivePart} setCurrentView={setCurrentView} setTransferQty={setTransferQty} setDestAisle={setDestAisle} setDestBin={setDestBin} /> : null;
      case View.MENU:
        return <MenuView setCurrentView={setCurrentView} onLogout={handleLogout} darkMode={darkMode} setDarkMode={setDarkMode} soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} hapticEnabled={hapticEnabled} setHapticEnabled={setHapticEnabled} autoScan={autoScan} setAutoScan={setAutoScan} showHelp={showHelp} setShowHelp={setShowHelp} language={language} setLanguage={setLanguage} onNavigateToMap={handleNavigateToMap} />;
      default:
        return <HomeView user={user} moList={moList} aiInsight={aiInsight} activityLog={activityLog} setCurrentView={setCurrentView} setSelectedBin={setSelectedBin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0 sm:p-4">
      <div className={`relative w-full h-screen sm:max-w-md sm:h-[844px] sm:rounded-[3rem] bg-app-bg text-app-text font-sans selection:bg-brand-primary/30 sm:shadow-2xl flex flex-col ${darkMode ? 'dark' : ''}`}>

        <StatusBar pendingCount={pendingCount} onOpenQueue={() => setQueueOpen(true)} />

        {renderContent()}

        <Navigation active={currentView} onSwitch={setCurrentView} />

        {/* Overlays */}
        {prominentError && (
          <ErrorModal title={prominentError.title} message={prominentError.message} onClose={() => setProminentError(null)} />
        )}

        {sysAlert && (
          <SystemAlert message={sysAlert.message} type={sysAlert.type} onClose={() => setSysAlert(null)} />
        )}

        {scannerOpen && (
          <BarcodeScanner
            onClose={closeScanner}
            onScan={scanContext.onComplete}
            onError={scanContext.onError}
            title={scanContext.title}
            subtitle={scanContext.subtitle}
            expectedValue={scanContext.expected}
            alreadyProcessed={scanContext.alreadyProcessed}
          />
        )}

        {queueOpen && <QueueDashboard onClose={() => setQueueOpen(false)} />}
      </div>
    </div>
  );
};

export default App;
