import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { InventoryItem, InventoryContextType } from '@/types/inventory';
import { inventoryDB } from '@/utils/inventoryDB';

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

const STORAGE_KEY = 'autokey_inventory';

interface InventoryProviderProps {
  children: ReactNode;
}

export const InventoryProvider: React.FC<InventoryProviderProps> = ({ children }) => {
  const [items, setItems] = useState<InventoryItem[]>([]);

  // Load items from IndexedDB on mount (with localStorage fallback)
  useEffect(() => {
    const loadItems = async () => {
      try {
        // Try to load from IndexedDB first
        const dbItems = await inventoryDB.getAllItems();
        if (dbItems.length > 0) {
          const itemsWithDates = dbItems.map((item: any) => ({
            ...item,
            lastUpdated: new Date(item.lastUpdated)
          }));
          setItems(itemsWithDates);
          return;
        }

        // Fallback to localStorage for migration
        const savedItems = localStorage.getItem(STORAGE_KEY);
        if (savedItems) {
          const parsedItems = JSON.parse(savedItems);
          const itemsWithDates = parsedItems.map((item: any) => ({
            ...item,
            lastUpdated: new Date(item.lastUpdated)
          }));
          
          // Migrate to IndexedDB
          for (const item of itemsWithDates) {
            await inventoryDB.saveItem(item);
          }
          
          setItems(itemsWithDates);
          // Clear localStorage after migration
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (error) {
        console.error('Error loading inventory data:', error);
        // Fallback to localStorage if IndexedDB fails
        try {
          const savedItems = localStorage.getItem(STORAGE_KEY);
          if (savedItems) {
            const parsedItems = JSON.parse(savedItems);
            const itemsWithDates = parsedItems.map((item: any) => ({
              ...item,
              lastUpdated: new Date(item.lastUpdated)
            }));
            setItems(itemsWithDates);
          }
        } catch (fallbackError) {
          console.error('Fallback loading failed:', fallbackError);
        }
      }
    };

    loadItems();
  }, []);

  // Save items to IndexedDB whenever items change (with localStorage backup)
  useEffect(() => {
    const saveItems = async () => {
      if (items.length === 0) return; // Don't save empty state during initialization
      
      try {
        // Save to IndexedDB for offline support
        for (const item of items) {
          await inventoryDB.saveItem(item);
        }
      } catch (error) {
        console.error('Error saving to IndexedDB:', error);
        // Fallback to localStorage
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch (fallbackError) {
          console.error('Fallback save failed:', fallbackError);
        }
      }
    };

    saveItems();
  }, [items]);

  const addItem = async (itemData: Omit<InventoryItem, 'id' | 'lastUpdated'>) => {
    const newItem: InventoryItem = {
      ...itemData,
      id: crypto.randomUUID(),
      lastUpdated: new Date()
    };
    
    try {
      await inventoryDB.saveItem(newItem);
      setItems(prev => [...prev, newItem]);
      
      // Log change for sync if offline
      if (!navigator.onLine) {
        await inventoryDB.savePendingChange({
          type: 'add',
          item: newItem
        });
      }
    } catch (error) {
      console.error('Error adding item:', error);
      // Fallback to state update only
      setItems(prev => [...prev, newItem]);
    }
  };

  const updateItem = async (id: string, updates: Partial<InventoryItem>) => {
    const updatedItem = items.find(item => item.id === id);
    if (!updatedItem) return;
    
    const newItem = { ...updatedItem, ...updates, lastUpdated: new Date() };
    
    try {
      await inventoryDB.saveItem(newItem);
      setItems(prev => prev.map(item => 
        item.id === id ? newItem : item
      ));
      
      // Log change for sync if offline
      if (!navigator.onLine) {
        await inventoryDB.savePendingChange({
          type: 'update',
          id,
          updates: { ...updates, lastUpdated: new Date() }
        });
      }
    } catch (error) {
      console.error('Error updating item:', error);
      // Fallback to state update only
      setItems(prev => prev.map(item => 
        item.id === id ? newItem : item
      ));
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await inventoryDB.deleteItem(id);
      setItems(prev => prev.filter(item => item.id !== id));
      
      // Log change for sync if offline
      if (!navigator.onLine) {
        await inventoryDB.savePendingChange({
          type: 'delete',
          id
        });
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      // Fallback to state update only
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const getLowStockItems = (): InventoryItem[] => {
    return items.filter(item => item.quantity <= item.minQuantity);
  };

  return (
    <InventoryContext.Provider value={{
      items,
      addItem,
      updateItem,
      deleteItem,
      getLowStockItems
    }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = (): InventoryContextType => {
  const context = useContext(InventoryContext);
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};