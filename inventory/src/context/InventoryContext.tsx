import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InventoryItem, JobSite, JobSiteUsage } from '../types';

interface InventoryState {
  items: InventoryItem[];
  jobSites: JobSite[];
  usage: JobSiteUsage[];
  loading: boolean;
}

type InventoryAction =
  | { type: 'SET_LOADING'; payload: boolean }
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
};

const inventoryReducer = (state: InventoryState, action: InventoryAction): InventoryState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
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
  addItem: (item: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateItem: (item: InventoryItem) => void;
  deleteItem: (id: string) => void;
  addJobSite: (jobSite: Omit<JobSite, 'id' | 'createdAt'>) => void;
  useItemAtJobSite: (itemId: string, jobSiteId: string, quantityUsed: number, notes?: string) => void;
  bulkAddItems: (items: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>[]) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [state.items, state.jobSites, state.usage]);

  const loadData = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const itemsData = await AsyncStorage.getItem('inventory_items');
      const jobSitesData = await AsyncStorage.getItem('job_sites');
      const usageData = await AsyncStorage.getItem('usage_data');

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

      if (usageData) {
        const usage = JSON.parse(usageData).map((u: any) => ({
          ...u,
          usageDate: new Date(u.usageDate),
        }));
        dispatch({ type: 'ADD_USAGE', payload: usage });
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('inventory_items', JSON.stringify(state.items));
      await AsyncStorage.setItem('job_sites', JSON.stringify(state.jobSites));
      await AsyncStorage.setItem('usage_data', JSON.stringify(state.usage));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const addItem = (item: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: InventoryItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const updateItem = (item: InventoryItem) => {
    const updatedItem = {
      ...item,
      updatedAt: new Date(),
    };
    dispatch({ type: 'UPDATE_ITEM', payload: updatedItem });
  };

  const deleteItem = (id: string) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const addJobSite = (jobSite: Omit<JobSite, 'id' | 'createdAt'>) => {
    const newJobSite: JobSite = {
      ...jobSite,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    dispatch({ type: 'ADD_JOB_SITE', payload: newJobSite });
  };

  const useItemAtJobSite = (itemId: string, jobSiteId: string, quantityUsed: number, notes?: string) => {
    const usage: JobSiteUsage = {
      id: Date.now().toString(),
      itemId,
      jobSiteId,
      quantityUsed,
      usageDate: new Date(),
      notes,
    };
    dispatch({ type: 'ADD_USAGE', payload: usage });
  };

  const bulkAddItems = (items: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>[]) => {
    const newItems: InventoryItem[] = items.map(item => ({
      ...item,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    dispatch({ type: 'BULK_ADD_ITEMS', payload: newItems });
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