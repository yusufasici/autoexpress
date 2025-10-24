import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InventoryItem, JobSite, JobSiteUsage } from '../types';
import { InventoryService, JobSiteService, UsageService } from '../services/database';

interface InventoryState {
  items: InventoryItem[];
  jobSites: JobSite[];
  usage: JobSiteUsage[];
  loading: boolean;
  isOnline: boolean;
}

type InventoryAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ONLINE_STATUS'; payload: boolean }
  | { type: 'SET_ITEMS'; payload: InventoryItem[] }
  | { type: 'ADD_ITEM'; payload: InventoryItem }
  | { type: 'UPDATE_ITEM'; payload: InventoryItem }
  | { type: 'DELETE_ITEM'; payload: string }
  | { type: 'SET_JOB_SITES'; payload: JobSite[] }
  | { type: 'ADD_JOB_SITE'; payload: JobSite }
  | { type: 'ADD_USAGE'; payload: JobSiteUsage }
  | { type: 'BULK_ADD_ITEMS'; payload: InventoryItem[] };

const initialState: InventoryState = {
  items: [],
  jobSites: [],
  usage: [],
  loading: false,
  isOnline: true,
};

const inventoryReducer = (state: InventoryState, action: InventoryAction): InventoryState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ONLINE_STATUS':
      return { ...state, isOnline: action.payload };
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'SET_JOB_SITES':
      return { ...state, jobSites: action.payload };
    case 'ADD_JOB_SITE':
      return { ...state, jobSites: [...state.jobSites, action.payload] };
    case 'ADD_USAGE':
      const newUsage = action.payload;
      const updatedItems = state.items.map(item => {
        if (item.id === newUsage.itemId) {
          return {
            ...item,
            quantity: Math.max(0, item.quantity - newUsage.quantityUsed),
            updatedAt: new Date(),
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
        usage: [...state.usage, newUsage],
      };
    case 'BULK_ADD_ITEMS':
      return { ...state, items: [...state.items, ...action.payload] };
    default:
      return state;
  }
};

interface InventoryContextType {
  state: InventoryState;
  addItem: (item: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateItem: (item: InventoryItem) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  addJobSite: (jobSite: Omit<JobSite, 'id' | 'createdAt'>) => Promise<void>;
  useItemAtJobSite: (itemId: string, jobSiteId: string, quantityUsed: number, notes?: string) => Promise<void>;
  bulkAddItems: (items: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>[]) => Promise<void>;
  syncWithCloud: () => Promise<void>;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  useEffect(() => {
    loadData();
  }, []);

  // Check if we have Supabase configured
  const isCloudConfigured = () => {
    const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
    const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
    return url && key && !url.includes('YOUR_SUPABASE') && !key.includes('YOUR_SUPABASE');
  };

  const loadData = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      if (isCloudConfigured()) {
        // Try to load from cloud first
        await loadFromCloud();
      } else {
        // Fallback to local storage
        await loadFromLocal();
      }
    } catch (error) {
      console.error('Error loading data, falling back to local:', error);
      await loadFromLocal();
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const loadFromCloud = async () => {
    try {
      const [items, jobSites, usage] = await Promise.all([
        InventoryService.getItems(),
        JobSiteService.getJobSites(),
        UsageService.getUsageHistory(),
      ]);

      dispatch({ type: 'SET_ITEMS', payload: items });
      dispatch({ type: 'SET_JOB_SITES', payload: jobSites });
      
      // Cache locally for offline use
      await AsyncStorage.setItem('inventory_items', JSON.stringify(items));
      await AsyncStorage.setItem('job_sites', JSON.stringify(jobSites));
      await AsyncStorage.setItem('usage_data', JSON.stringify(usage));
      
      dispatch({ type: 'SET_ONLINE_STATUS', payload: true });
    } catch (error) {
      dispatch({ type: 'SET_ONLINE_STATUS', payload: false });
      throw error;
    }
  };

  const loadFromLocal = async () => {
    try {
      const itemsData = await AsyncStorage.getItem('inventory_items');
      const jobSitesData = await AsyncStorage.getItem('job_sites');

      if (itemsData) {
        const items = JSON.parse(itemsData).map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
          updatedAt: new Date(item.updatedAt),
        }));
        dispatch({ type: 'SET_ITEMS', payload: items });
      }

      if (jobSitesData) {
        const jobSites = JSON.parse(jobSitesData).map((site: any) => ({
          ...site,
          createdAt: new Date(site.createdAt),
        }));
        dispatch({ type: 'SET_JOB_SITES', payload: jobSites });
      }
    } catch (error) {
      console.error('Error loading local data:', error);
    }
  };

  const saveToLocal = async () => {
    try {
      await AsyncStorage.setItem('inventory_items', JSON.stringify(state.items));
      await AsyncStorage.setItem('job_sites', JSON.stringify(state.jobSites));
      await AsyncStorage.setItem('usage_data', JSON.stringify(state.usage));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };

  const addItem = async (item: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    let newItem: InventoryItem;

    if (isCloudConfigured() && state.isOnline) {
      const cloudItem = await InventoryService.addItem(item);
      if (cloudItem) {
        newItem = cloudItem;
      } else {
        // Fallback to local
        newItem = {
          ...item,
          id: Date.now().toString(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }
    } else {
      newItem = {
        ...item,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    dispatch({ type: 'ADD_ITEM', payload: newItem });
    await saveToLocal();
  };

  const updateItem = async (item: InventoryItem) => {
    const updatedItem = {
      ...item,
      updatedAt: new Date(),
    };

    if (isCloudConfigured() && state.isOnline) {
      await InventoryService.updateItem(updatedItem);
    }

    dispatch({ type: 'UPDATE_ITEM', payload: updatedItem });
    await saveToLocal();
  };

  const deleteItem = async (id: string) => {
    if (isCloudConfigured() && state.isOnline) {
      await InventoryService.deleteItem(id);
    }

    dispatch({ type: 'DELETE_ITEM', payload: id });
    await saveToLocal();
  };

  const addJobSite = async (jobSite: Omit<JobSite, 'id' | 'createdAt'>) => {
    let newJobSite: JobSite;

    if (isCloudConfigured() && state.isOnline) {
      const cloudJobSite = await JobSiteService.addJobSite(jobSite);
      if (cloudJobSite) {
        newJobSite = cloudJobSite;
      } else {
        newJobSite = {
          ...jobSite,
          id: Date.now().toString(),
          createdAt: new Date(),
        };
      }
    } else {
      newJobSite = {
        ...jobSite,
        id: Date.now().toString(),
        createdAt: new Date(),
      };
    }

    dispatch({ type: 'ADD_JOB_SITE', payload: newJobSite });
    await saveToLocal();
  };

  const useItemAtJobSite = async (itemId: string, jobSiteId: string, quantityUsed: number, notes?: string) => {
    const usage: JobSiteUsage = {
      id: Date.now().toString(),
      itemId,
      jobSiteId,
      quantityUsed,
      usageDate: new Date(),
      notes,
    };

    if (isCloudConfigured() && state.isOnline) {
      await UsageService.addUsage(usage);
    }

    dispatch({ type: 'ADD_USAGE', payload: usage });
    await saveToLocal();
  };

  const bulkAddItems = async (items: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>[]) => {
    let newItems: InventoryItem[];

    if (isCloudConfigured() && state.isOnline) {
      newItems = await InventoryService.bulkAddItems(items);
      if (newItems.length === 0) {
        // Fallback to local
        newItems = items.map(item => ({
          ...item,
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          createdAt: new Date(),
          updatedAt: new Date(),
        }));
      }
    } else {
      newItems = items.map(item => ({
        ...item,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    }

    dispatch({ type: 'BULK_ADD_ITEMS', payload: newItems });
    await saveToLocal();
  };

  const syncWithCloud = async () => {
    if (!isCloudConfigured()) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await loadFromCloud();
    } catch (error) {
      console.error('Sync failed:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <InventoryContext.Provider
      value={{
        state,
        addItem,
        updateItem,
        deleteItem,
        addJobSite,
        useItemAtJobSite,
        bulkAddItems,
        syncWithCloud,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};