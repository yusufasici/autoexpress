import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useInventory } from '@/contexts/InventoryContext';
import { usePWA } from '@/hooks/usePWA';
import { InventoryList } from '@/components/inventory/InventoryList';
import { ItemForm } from '@/components/inventory/ItemForm';
import { LoginForm } from '@/components/inventory/LoginForm';
import { QuickAction } from '@/components/inventory/QuickAction';
import { FloatingActionButton } from '@/components/inventory/FloatingActionButton';
import { InventoryItem } from '@/types/inventory';
import { LogOut, Download, Upload, Smartphone, WifiOff, Wifi, Zap, Wrench } from 'lucide-react';

export const InventoryDashboard: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { items, addItem } = useInventory();
  const { isOffline, canInstall, isInstalled, installApp } = usePWA();
  const [showItemForm, setShowItemForm] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | undefined>();
  const [showQuickAction, setShowQuickAction] = useState(false);

  const handleAddItem = () => {
    setEditingItem(undefined);
    setShowItemForm(true);
  };

  const handleEditItem = (item: InventoryItem) => {
    setEditingItem(item);
    setShowItemForm(true);
  };

  const handleCloseForm = () => {
    setShowItemForm(false);
    setEditingItem(undefined);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(items, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `inventory-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedItems = JSON.parse(e.target?.result as string);
        if (Array.isArray(importedItems)) {
          importedItems.forEach((item) => {
            if (item.name && item.category) {
              addItem({
                name: item.name,
                category: item.category,
                quantity: item.quantity || 0,
                minQuantity: item.minQuantity || 5,
                price: item.price || 0,
                supplier: item.supplier || '',
                notes: item.notes || ''
              });
            }
          });
          alert('Data imported successfully!');
        }
      } catch (error) {
        alert('Error importing data. Please check the file format.');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AutoKey Express</h1>
              <p className="text-gray-600">Inventory Management System</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
              {/* Network Status */}
              <div className="flex items-center gap-1">
                {isOffline ? (
                  <Badge variant="destructive" className="text-xs">
                    <WifiOff className="w-3 h-3 mr-1" />
                    Offline
                  </Badge>
                ) : (
                  <Badge variant="default" className="text-xs">
                    <Wifi className="w-3 h-3 mr-1" />
                    Online
                  </Badge>
                )}
              </div>

              {/* PWA Install Button */}
              {canInstall && !isInstalled && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={installApp}
                  className="hidden sm:flex"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Install App
                </Button>
              )}

              {/* Import/Export - Hidden on mobile */}
              <div className="hidden md:flex gap-2">
                <input
                  type="file"
                  accept=".json"
                  onChange={importData}
                  className="hidden"
                  id="import-file"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById('import-file')?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Import
                </Button>
                <Button variant="outline" size="sm" onClick={exportData}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              {/* Job Mode Link */}
              <Button 
                onClick={() => window.location.href = '/admin/job'}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                size="sm"
              >
                <Wrench className="w-4 h-4 mr-2" />
                Job Mode
              </Button>

              {/* Quick Action Button - Prominent for mobile */}
              <Button 
                onClick={() => setShowQuickAction(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                size="sm"
              >
                <Zap className="w-4 h-4 mr-2" />
                Quick Scan
              </Button>

              <Button variant="outline" onClick={logout} size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <InventoryList 
          onAddItem={handleAddItem}
          onEditItem={handleEditItem}
        />
      </div>

      {/* Item Form Modal */}
      <ItemForm
        item={editingItem}
        isOpen={showItemForm}
        onClose={handleCloseForm}
      />

      {/* Quick Action Modal */}
      <QuickAction
        isOpen={showQuickAction}
        onClose={() => setShowQuickAction(false)}
      />

      {/* Floating Action Button for Mobile */}
      <FloatingActionButton onClick={() => setShowQuickAction(true)} />
    </div>
  );
};