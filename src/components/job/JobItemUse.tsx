import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useInventory } from '@/contexts/InventoryContext';
import { BarcodeScanner } from '../inventory/BarcodeScanner';
import { InventoryItem } from '@/types/inventory';
import { 
  Scan, 
  Package, 
  Minus, 
  Search, 
  CheckCircle, 
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';

interface JobItemUseProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JobItemUse: React.FC<JobItemUseProps> = ({ isOpen, onClose }) => {
  const { items, updateItem } = useInventory();
  const [showScanner, setShowScanner] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [foundItem, setFoundItem] = useState<InventoryItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [searchResults, setSearchResults] = useState<InventoryItem[]>([]);
  const [justUsed, setJustUsed] = useState<InventoryItem[]>([]);

  const handleBarcodeScanned = (barcode: string) => {
    setSearchTerm(barcode);
    setShowScanner(false);
    findItem(barcode);
  };

  const handleManualSearch = () => {
    if (searchTerm.trim()) {
      findItem(searchTerm.trim());
    }
  };

  const findItem = (searchValue: string) => {
    // First try exact barcode match
    let item = items.find(item => 
      item.barcode === searchValue || 
      item.id === searchValue
    );

    if (item) {
      setFoundItem(item);
      setSearchResults([]);
    } else {
      // Search by name, category, etc.
      const matches = items.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
        (item.supplier && item.supplier.toLowerCase().includes(searchValue.toLowerCase())) ||
        (item.barcode && item.barcode.includes(searchValue)) ||
        (item.notes && item.notes.toLowerCase().includes(searchValue.toLowerCase()))
      ).slice(0, 8); // Limit to 8 results for mobile
      
      if (matches.length === 1) {
        setFoundItem(matches[0]);
        setSearchResults([]);
      } else {
        setSearchResults(matches);
        setFoundItem(null);
      }
    }
  };

  const handleUseItem = async () => {
    if (!foundItem) return;

    const newQuantity = Math.max(0, foundItem.quantity - quantity);
    await updateItem(foundItem.id, { quantity: newQuantity });
    
    // Add to recently used list
    setJustUsed(prev => [
      { ...foundItem, quantity: quantity }, // Show how many we used
      ...prev.filter(item => item.id !== foundItem.id).slice(0, 4) // Keep last 5, remove duplicates
    ]);
    
    // Reset form for next item
    setFoundItem(null);
    setSearchTerm('');
    setQuantity(1);
    setSearchResults([]);
  };

  const selectItemFromResults = (item: InventoryItem) => {
    setFoundItem(item);
    setSearchResults([]);
    setSearchTerm(item.name);
  };

  const handleClose = () => {
    setFoundItem(null);
    setSearchTerm('');
    setQuantity(1);
    setSearchResults([]);
    setShowScanner(false);
    setJustUsed([]);
    onClose();
  };

  const getStockWarning = (item: InventoryItem) => {
    if (item.quantity === 0) return { level: 'empty', message: 'Out of Stock!' };
    if (item.quantity < quantity) return { level: 'insufficient', message: `Only ${item.quantity} available` };
    if (item.quantity - quantity <= item.minQuantity) return { level: 'low', message: 'Will be low stock after use' };
    return { level: 'ok', message: '' };
  };

  if (!isOpen) return null;

  return (
    <>
      <Dialog open={isOpen && !showScanner} onOpenChange={handleClose}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Use Job Items
              </span>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Recently Used Items */}
            {justUsed.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-green-700">✓ Recently Used:</div>
                <div className="space-y-1">
                  {justUsed.map((usedItem, index) => (
                    <div key={`${usedItem.id}-${index}`} className="flex items-center justify-between p-2 bg-green-50 rounded text-sm">
                      <span className="font-medium">{usedItem.name}</span>
                      <Badge variant="outline" className="text-green-700">
                        Used: {usedItem.quantity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Search Section */}
            <div className="space-y-2">
              <div className="text-sm font-medium">Find Item to Use</div>
              <div className="flex gap-2">
                <Input
                  placeholder="Scan barcode or search item..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleManualSearch()}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  onClick={() => setShowScanner(true)}
                  size="sm"
                  className="px-3"
                >
                  <Scan className="w-4 h-4" />
                </Button>
              </div>
              
              {searchTerm && (
                <Button
                  variant="outline"
                  onClick={handleManualSearch}
                  size="sm"
                  className="w-full"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search "{searchTerm}"
                </Button>
              )}
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm font-medium">Select Item:</div>
                <div className="max-h-48 overflow-y-auto space-y-1">
                  {searchResults.map((item) => (
                    <Button
                      key={item.id}
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => selectItemFromResults(item)}
                    >
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{item.category}</Badge>
                          <span>Stock: {item.quantity}</span>
                          {item.quantity <= item.minQuantity && (
                            <Badge variant="destructive" className="text-xs">Low</Badge>
                          )}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Item */}
            {foundItem && (
              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-lg">{foundItem.name}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Badge variant="outline">{foundItem.category}</Badge>
                        <span>Available: {foundItem.quantity}</span>
                        {foundItem.supplier && <span>• {foundItem.supplier}</span>}
                      </div>
                    </div>

                    {/* Stock Warning */}
                    {(() => {
                      const warning = getStockWarning(foundItem);
                      if (warning.level !== 'ok') {
                        return (
                          <div className={`p-2 rounded text-sm flex items-center gap-2 ${
                            warning.level === 'empty' ? 'bg-red-50 text-red-700' :
                            warning.level === 'insufficient' ? 'bg-red-50 text-red-700' :
                            'bg-yellow-50 text-yellow-700'
                          }`}>
                            <AlertTriangle className="w-4 h-4" />
                            {warning.message}
                          </div>
                        );
                      }
                      return null;
                    })()}

                    {/* Quantity Selection */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Quantity to Use</div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                        >
                          -
                        </Button>
                        <Input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, Math.min(foundItem.quantity, parseInt(e.target.value) || 1)))}
                          className="text-center w-20"
                          min="1"
                          max={foundItem.quantity}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.min(foundItem.quantity, quantity + 1))}
                          disabled={quantity >= foundItem.quantity}
                        >
                          +
                        </Button>
                      </div>

                      {/* Quick quantity buttons */}
                      <div className="flex gap-1 flex-wrap">
                        {[1, 2, 5, 10].filter(q => q <= foundItem.quantity).map(q => (
                          <Button
                            key={q}
                            variant={quantity === q ? "default" : "outline"}
                            size="sm"
                            onClick={() => setQuantity(q)}
                            className="text-xs px-2"
                          >
                            {q}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="p-3 bg-gray-50 rounded text-sm space-y-1">
                      <div className="font-medium">After Use:</div>
                      <div>Stock will be: {foundItem.quantity} → {Math.max(0, foundItem.quantity - quantity)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={handleClose} className="flex-1">
                Done
              </Button>
              {foundItem && foundItem.quantity > 0 && (
                <Button 
                  onClick={handleUseItem} 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  disabled={foundItem.quantity < quantity}
                >
                  <Minus className="w-4 h-4 mr-2" />
                  Use {quantity} Item{quantity > 1 ? 's' : ''}
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