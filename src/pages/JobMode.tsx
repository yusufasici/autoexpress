import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useInventory } from '@/contexts/InventoryContext';
import { usePWA } from '@/hooks/usePWA';
import { JobItemUse } from '@/components/job/JobItemUse';
import { JobFloatingButton } from '@/components/job/JobFloatingButton';
import { LoginForm } from '@/components/inventory/LoginForm';
import { 
  LogOut, 
  Package, 
  Scan, 
  AlertTriangle, 
  WifiOff, 
  Wifi,
  Wrench,
  Clock,
  CheckCircle,
  Settings
} from 'lucide-react';

export const JobMode: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { items, getLowStockItems } = useInventory();
  const { isOffline } = usePWA();
  const [showItemUse, setShowItemUse] = useState(false);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const totalItems = items.length;
  const lowStockItems = getLowStockItems();
  const availableItems = items.filter(item => item.quantity > 0);
  const outOfStockItems = items.filter(item => item.quantity === 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-blue-600" />
                Job Mode
              </h1>
              <p className="text-gray-600 text-sm">Quick item usage tracking</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Network Status */}
              <Badge variant={isOffline ? "destructive" : "default"} className="text-xs">
                {isOffline ? (
                  <>
                    <WifiOff className="w-3 h-3 mr-1" />
                    Offline
                  </>
                ) : (
                  <>
                    <Wifi className="w-3 h-3 mr-1" />
                    Online
                  </>
                )}
              </Badge>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/admin/inventory'}
                size="sm"
              >
                <Settings className="w-4 h-4 mr-2" />
                Inventory
              </Button>
              <Button variant="outline" onClick={logout} size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Exit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">{totalItems}</div>
                <div className="text-sm text-gray-600">Total Items</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">{availableItems.length}</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">{lowStockItems.length}</div>
                <div className="text-sm text-gray-600">Low Stock</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Package className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">{outOfStockItems.length}</div>
                <div className="text-sm text-gray-600">Out of Stock</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Low Stock Alert */}
        {lowStockItems.length > 0 && (
          <Card className="mb-6 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-800">
                <AlertTriangle className="w-5 h-5" />
                Low Stock Items - Reorder Soon!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {lowStockItems.slice(0, 6).map(item => (
                  <div key={item.id} className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="font-medium text-sm">{item.name}</span>
                    <Badge variant="secondary" className="text-yellow-800">
                      {item.quantity} left
                    </Badge>
                  </div>
                ))}
              </div>
              {lowStockItems.length > 6 && (
                <p className="text-sm text-yellow-700 mt-2">
                  +{lowStockItems.length - 6} more items need restocking
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Main Action Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center">
              Ready to Use Job Items
            </CardTitle>
            <p className="text-center text-gray-600">
              Scan barcodes or search items to update your inventory as you work
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Button
              onClick={() => setShowItemUse(true)}
              className="w-full h-16 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Scan className="w-6 h-6 mr-3" />
              Use Job Items
            </Button>
            
            <p className="text-sm text-gray-500">
              Tap to scan items or search manually. Your inventory will update automatically.
            </p>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Job Site Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold">Using Items:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Scan barcode for instant lookup</li>
                  <li>• Search by name if no barcode</li>
                  <li>• Select quantity used</li>
                  <li>• Inventory updates automatically</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Offline Mode:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Works without internet</li>
                  <li>• Changes sync when online</li>
                  <li>• Low stock alerts still work</li>
                  <li>• Data saved locally</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Job Item Use Modal */}
      <JobItemUse
        isOpen={showItemUse}
        onClose={() => setShowItemUse(false)}
      />

      {/* Floating Action Button */}
      <JobFloatingButton onClick={() => setShowItemUse(true)} />
    </div>
  );
};