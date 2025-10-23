import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useInventory } from '@/contexts/InventoryContext';
import { BarcodeScanner } from './BarcodeScanner';
import { InventoryItem } from '@/types/inventory';
import { Scan, Package, Plus, Minus, Search } from 'lucide-react';

interface QuickActionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickAction: React.FC<QuickActionProps> = ({ isOpen, onClose }) => {
  const { items, updateItem } = useInventory();
  const [showScanner, setShowScanner] = useState(false);
  const [manualBarcode, setManualBarcode] = useState('');
  const [foundItem, setFoundItem] = useState<InventoryItem | null>(null);
  const [action, setAction] = useState<'add' | 'remove'>('remove');
  const [quantity, setQuantity] = useState(1);
  const [searchResults, setSearchResults] = useState<InventoryItem[]>([]);

  const handleBarcodeScanned = (barcode: string) => {
    console.log('Scanned barcode:', barcode);
    setManualBarcode(barcode);
    setShowScanner(false);
    findItemByBarcode(barcode);
  };

  const handleManualSearch = () => {
    if (manualBarcode.trim()) {
      findItemByBarcode(manualBarcode.trim());
    }
  };

  const findItemByBarcode = (barcode: string) => {
    // First try exact barcode match
    let item = items.find(item => 
      item.barcode === barcode || 
      item.id === barcode
    );

    if (item) {
      setFoundItem(item);
      setSearchResults([]);
    } else {
      // If no exact barcode match, search by name, category, etc.
      const matches = items.filter(item =>
        item.name.toLowerCase().includes(barcode.toLowerCase()) ||
        item.category.toLowerCase().includes(barcode.toLowerCase()) ||
        (item.supplier && item.supplier.toLowerCase().includes(barcode.toLowerCase())) ||
        (item.barcode && item.barcode.includes(barcode)) ||
        (item.notes && item.notes.toLowerCase().includes(barcode.toLowerCase()))
      );
      
      if (matches.length === 1) {
        setFoundItem(matches[0]);
        setSearchResults([]);
      } else {
        setSearchResults(matches);
        setFoundItem(null);
      }
    }
  };

  const handleQuantityUpdate = async () => {
    if (!foundItem) return;

    const newQuantity = action === 'add' 
      ? foundItem.quantity + quantity 
      : Math.max(0, foundItem.quantity - quantity);

    await updateItem(foundItem.id, { quantity: newQuantity });
    
    // Reset form
    setFoundItem(null);
    setManualBarcode('');
    setQuantity(1);
    setSearchResults([]);
    
    onClose();
  };

  const selectItemFromResults = (item: InventoryItem) => {
    setFoundItem(item);
    setSearchResults([]);
  };

  const handleClose = () => {
    setFoundItem(null);
    setManualBarcode('');
    setQuantity(1);
    setSearchResults([]);
    setShowScanner(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <Dialog open={isOpen && !showScanner} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Quick Inventory Update
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Barcode Input Section */}
            <div className="space-y-2">
              <Label>Find Item</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter barcode or item name..."
                  value={manualBarcode}
                  onChange={(e) => setManualBarcode(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleManualSearch()}
                />
                <Button
                  variant="outline"
                  onClick={() => setShowScanner(true)}
                  size="sm"
                >
                  <Scan className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleManualSearch}
                  size="sm"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="space-y-2">
                <Label>Select Item:</Label>
                <div className="max-h-32 overflow-y-auto space-y-1">
                  {searchResults.map((item) => (
                    <Button
                      key={item.id}
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-2"
                      onClick={() => selectItemFromResults(item)}
                    >
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">
                          {item.category} • Stock: {item.quantity}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Found Item Display */}
            {foundItem && (
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="font-medium">{foundItem.name}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Badge variant="outline">{foundItem.category}</Badge>
                      <span>Current Stock: {foundItem.quantity}</span>
                    </div>
                    {foundItem.quantity <= foundItem.minQuantity && (
                      <Badge variant="destructive" className="text-xs">
                        Low Stock Alert
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Selection */}
            {foundItem && (
              <div className="space-y-3">
                <Label>Action</Label>
                <div className="flex gap-2">
                  <Button
                    variant={action === 'remove' ? 'default' : 'outline'}
                    onClick={() => setAction('remove')}
                    className="flex-1"
                  >
                    <Minus className="w-4 h-4 mr-2" />
                    Use Items
                  </Button>
                  <Button
                    variant={action === 'add' ? 'default' : 'outline'}
                    onClick={() => setAction('add')}
                    className="flex-1"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Stock
                  </Button>
                </div>

                <div>
                  <Label>Quantity</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="text-center"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Preview */}
                <div className="p-3 bg-gray-50 rounded-md text-sm">
                  <div className="font-medium">Preview:</div>
                  <div>
                    Current: {foundItem.quantity} → New: {
                      action === 'add' 
                        ? foundItem.quantity + quantity 
                        : Math.max(0, foundItem.quantity - quantity)
                    }
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={handleClose} className="flex-1">
                Cancel
              </Button>
              {foundItem && (
                <Button onClick={handleQuantityUpdate} className="flex-1">
                  Update Stock
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Barcode Scanner */}
      <BarcodeScanner
        isOpen={showScanner}
        onScan={handleBarcodeScanned}
        onClose={() => setShowScanner(false)}
      />
    </>
  );
};