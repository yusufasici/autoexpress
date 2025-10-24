export interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  category?: string;
  location?: string;
  unitPrice?: number;
  supplier?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface JobSite {
  id: string;
  name: string;
  address: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface JobSiteUsage {
  id: string;
  itemId: string;
  jobSiteId: string;
  quantityUsed: number;
  usageDate: Date;
  notes?: string;
}

export interface BulkAddItem {
  name: string;
  description?: string;
  quantity: number;
  category?: string;
  location?: string;
  unitPrice?: number;
  supplier?: string;
}

export type RootStackParamList = {
  Home: undefined;
  InventoryList: undefined;
  AddItem: undefined;
  EditItem: { item: InventoryItem };
  BulkAdd: undefined;
  JobSites: undefined;
  AddJobSite: undefined;
  JobSiteUsage: { jobSite: JobSite };
};