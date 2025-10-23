export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minQuantity: number;
  price: number;
  supplier?: string;
  barcode?: string;
  notes?: string;
  lastUpdated: Date;
}

export interface InventoryContextType {
  items: InventoryItem[];
  addItem: (item: Omit<InventoryItem, 'id' | 'lastUpdated'>) => void;
  updateItem: (id: string, updates: Partial<InventoryItem>) => void;
  deleteItem: (id: string) => void;
  getLowStockItems: () => InventoryItem[];
}

export const CATEGORIES = [
  'Locks',
  'Keys',
  'Door Hardware',
  'Security Systems', 
  'Tools',
  'Safes',
  'Automotive',
  'Residential',
  'Commercial',
  'Emergency Supplies',
  'Other'
] as const;

export type Category = typeof CATEGORIES[number];