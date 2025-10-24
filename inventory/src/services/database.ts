import { createClient } from '@supabase/supabase-js';
import { InventoryItem, JobSite, JobSiteUsage } from '../types';

// Supabase configuration from environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database service for inventory items
export class InventoryService {
  // Get all inventory items
  static async getItems(): Promise<InventoryItem[]> {
    try {
      const { data, error } = await supabase
        .from('inventory_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      return data?.map(item => ({
        ...item,
        createdAt: new Date(item.created_at),
        updatedAt: new Date(item.updated_at),
      })) || [];
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  }

  // Add new item
  static async addItem(item: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<InventoryItem | null> {
    try {
      const { data, error } = await supabase
        .from('inventory_items')
        .insert([{
          name: item.name,
          description: item.description,
          quantity: item.quantity,
          category: item.category,
          location: item.location,
          unit_price: item.unitPrice,
          supplier: item.supplier,
        }])
        .select()
        .single();

      if (error) throw error;

      return {
        ...data,
        id: data.id,
        unitPrice: data.unit_price,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
      };
    } catch (error) {
      console.error('Error adding item:', error);
      return null;
    }
  }

  // Update item
  static async updateItem(item: InventoryItem): Promise<InventoryItem | null> {
    try {
      const { data, error } = await supabase
        .from('inventory_items')
        .update({
          name: item.name,
          description: item.description,
          quantity: item.quantity,
          category: item.category,
          location: item.location,
          unit_price: item.unitPrice,
          supplier: item.supplier,
          updated_at: new Date().toISOString(),
        })
        .eq('id', item.id)
        .select()
        .single();

      if (error) throw error;

      return {
        ...data,
        unitPrice: data.unit_price,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
      };
    } catch (error) {
      console.error('Error updating item:', error);
      return null;
    }
  }

  // Delete item
  static async deleteItem(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('inventory_items')
        .delete()
        .eq('id', id);

      return !error;
    } catch (error) {
      console.error('Error deleting item:', error);
      return false;
    }
  }

  // Bulk add items
  static async bulkAddItems(items: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<InventoryItem[]> {
    try {
      const insertData = items.map(item => ({
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        category: item.category,
        location: item.location,
        unit_price: item.unitPrice,
        supplier: item.supplier,
      }));

      const { data, error } = await supabase
        .from('inventory_items')
        .insert(insertData)
        .select();

      if (error) throw error;

      return data?.map(item => ({
        ...item,
        unitPrice: item.unit_price,
        createdAt: new Date(item.created_at),
        updatedAt: new Date(item.updated_at),
      })) || [];
    } catch (error) {
      console.error('Error bulk adding items:', error);
      return [];
    }
  }
}

// Database service for job sites
export class JobSiteService {
  static async getJobSites(): Promise<JobSite[]> {
    try {
      const { data, error } = await supabase
        .from('job_sites')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data?.map(site => ({
        ...site,
        isActive: site.is_active,
        createdAt: new Date(site.created_at),
      })) || [];
    } catch (error) {
      console.error('Error fetching job sites:', error);
      return [];
    }
  }

  static async addJobSite(jobSite: Omit<JobSite, 'id' | 'createdAt'>): Promise<JobSite | null> {
    try {
      const { data, error } = await supabase
        .from('job_sites')
        .insert([{
          name: jobSite.name,
          address: jobSite.address,
          description: jobSite.description,
          is_active: jobSite.isActive,
        }])
        .select()
        .single();

      if (error) throw error;

      return {
        ...data,
        isActive: data.is_active,
        createdAt: new Date(data.created_at),
      };
    } catch (error) {
      console.error('Error adding job site:', error);
      return null;
    }
  }
}

// Database service for usage tracking
export class UsageService {
  static async addUsage(usage: Omit<JobSiteUsage, 'id'>): Promise<JobSiteUsage | null> {
    try {
      // First, reduce the inventory quantity
      const { error: updateError } = await supabase.rpc('reduce_inventory_quantity', {
        item_id: usage.itemId,
        quantity_to_reduce: usage.quantityUsed,
      });

      if (updateError) throw updateError;

      // Then, record the usage
      const { data, error } = await supabase
        .from('job_site_usage')
        .insert([{
          item_id: usage.itemId,
          job_site_id: usage.jobSiteId,
          quantity_used: usage.quantityUsed,
          usage_date: usage.usageDate.toISOString(),
          notes: usage.notes,
        }])
        .select()
        .single();

      if (error) throw error;

      return {
        id: data.id,
        itemId: data.item_id,
        jobSiteId: data.job_site_id,
        quantityUsed: data.quantity_used,
        usageDate: new Date(data.usage_date),
        notes: data.notes,
      };
    } catch (error) {
      console.error('Error adding usage:', error);
      return null;
    }
  }

  static async getUsageHistory(): Promise<JobSiteUsage[]> {
    try {
      const { data, error } = await supabase
        .from('job_site_usage')
        .select('*')
        .order('usage_date', { ascending: false });

      if (error) throw error;

      return data?.map(usage => ({
        id: usage.id,
        itemId: usage.item_id,
        jobSiteId: usage.job_site_id,
        quantityUsed: usage.quantity_used,
        usageDate: new Date(usage.usage_date),
        notes: usage.notes,
      })) || [];
    } catch (error) {
      console.error('Error fetching usage history:', error);
      return [];
    }
  }
}