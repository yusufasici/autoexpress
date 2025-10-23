# AutoKey Express - PWA Inventory Management System

## Overview
A **Progressive Web App (PWA)** inventory management system built into your AutoKey Express website. This system works offline, can be installed on your phone like a native app, and is perfect for managing inventory on job sites.

## 📱 **Mobile App Features**
- ✅ **Install on Phone**: Works like a native mobile app
- ✅ **Offline Support**: Use without internet connection
- ✅ **Real-time Sync**: Data syncs when you're back online
- ✅ **Touch Optimized**: Designed for mobile use on job sites
- ✅ **Fast Loading**: Instant access to your inventory

## 📱 **Mobile Installation Guide**

### 1. Access Your Apps
- **Full Inventory Management**: `https://yourdomain.com/admin/inventory`
- **Job Mode (Field Use)**: `https://yourdomain.com/admin/job`
- These routes are not linked anywhere on your public website for security

### 2. Install the App
- **Chrome/Edge**: Look for "Install App" button or "Add to Home Screen" in browser menu
- **Safari**: Tap Share button → "Add to Home Screen"
- **Desktop**: Click "Install App" button when it appears

### 3. Login & Use
- **Password**: `autokey2024`
- App works offline after first login
- Data syncs automatically when online

### 4. Two Modes Available
- **Inventory Mode**: Full management, adding items, reports, settings
- **Job Mode**: Streamlined for quick item usage on job sites

## 🎯 **Perfect for Field Work**

### Dashboard Overview
- **Connection Status**: See if you're online/offline
- **Total Items**: Count of all inventory items  
- **Total Stock**: Sum of all quantities
- **Total Value**: Calculated inventory value
- **Low Stock Alerts**: Items below minimum quantity

### 📱 **Barcode Scanning Features**
- ✅ **Camera Scanning**: Use phone camera to scan product barcodes
- ✅ **Quick Updates**: Scan → Select Action → Update quantity instantly
- ✅ **Flashlight Support**: Built-in flashlight for low-light scanning
- ✅ **Multiple Cameras**: Switch between front/back cameras
- ✅ **Manual Entry**: Type barcode if camera isn't available
- ✅ **Smart Search**: Finds items by barcode, name, or partial matches

### Mobile-Optimized Features
- ✅ **Floating Scan Button**: Quick access to scanner on mobile
- ✅ **Touch-Friendly Interface**: Large buttons for easy mobile use
- ✅ **Quick Actions**: "Use Items" vs "Add Stock" workflows
- ✅ **Offline Mode**: Full functionality without internet
- ✅ **Auto-Sync**: Changes upload when connection returns
- ✅ **Search & Filter**: Find items fast on mobile

## � **Job Mode - Perfect for Field Work**

### **Access Job Mode**
- Go to: `https://yourdomain.com/admin/job`
- Streamlined interface designed for job sites
- Same login: `autokey2024`

### **Job Site Workflow**
#### **During Jobs** 
1. **Open Job Mode** on your phone
2. **Tap "Use Job Items"** or the green floating button
3. **Scan Barcode** or search for item
4. **Select quantity used** (1, 2, 5, 10 quick buttons)
5. **Tap "Use Items"** - inventory updates instantly
6. **See confirmation** in "Recently Used" list

#### **Key Features**
- ✅ **Large touch targets** - easy with work gloves
- ✅ **Quick quantity selection** - tap 1, 2, 5, 10 buttons
- ✅ **Recently used tracker** - see what you just used
- ✅ **Stock warnings** - alerts for low/out of stock
- ✅ **Works offline** - no internet required
- ✅ **Auto-sync** when connection returns

#### **Smart Alerts**
- **Red warning**: "Only 3 available" when stock is low
- **Yellow warning**: "Will be low stock after use"  
- **Green confirmation**: Shows recently used items
- **Real-time updates** across all devices

### Item Categories
- Locks
- Keys  
- Door Hardware
- Security Systems
- Tools
- Safes
- Automotive
- Residential
- Commercial
- Emergency Supplies
- Other

### Data Management
- ✅ **Auto-Save**: All data automatically saved to browser storage
- ✅ **Export**: Download backup as JSON file
- ✅ **Import**: Upload previously exported data
- ✅ **Persistent**: Data survives browser restarts

## 📊 **Item Information Tracked**

### Required Fields
- **Item Name**: Product description
- **Category**: Type of item (from predefined list)

### Optional Fields
- **Current Stock**: Quantity on hand
- **Min Stock Alert**: Threshold for low stock warnings  
- **Unit Price**: Cost per item
- **Supplier**: Vendor information
- **Barcode**: Product barcode for scanning
- **Notes**: Additional details

### Automatic Fields
- **Stock Status**: In Stock / Low Stock / Out of Stock
- **Total Value**: Calculated (quantity × price)
- **Last Updated**: Timestamp of changes

## 📷 **Barcode Scanning Setup**

### Adding Barcodes to Items
1. **Edit existing items**: Add barcode field when editing
2. **New items**: Include barcode when creating items
3. **Scan to add**: Use scanner to capture barcode during item creation

### Scanning Tips
- **Good lighting**: Use flashlight button in dark areas
- **Steady hands**: Hold phone steady for better scanning
- **Distance**: Keep barcode 4-8 inches from camera
- **Angle**: Scan straight-on for best results
- **Backup**: Can always type barcode manually if scanning fails

### Supported Barcode Types
- **UPC/EAN**: Standard retail barcodes
- **Code 128**: Common industrial barcodes  
- **Code 39**: Alphanumeric barcodes
- **QR Codes**: 2D matrix codes
- **And many more**: Most standard barcode formats

## Security Features

1. **Hidden Route**: Not discoverable through site navigation
2. **Password Protection**: Requires authentication to access
3. **Session-Based**: Login expires when browser closes
4. **Local Storage**: Data stays on your device only
5. **No Server**: Completely client-side system

## Best Practices

### Regular Maintenance
- Export backups monthly
- Update stock levels after orders/deliveries
- Review low stock alerts weekly
- Clean up old/unused items

### Stock Management
- Set realistic minimum quantities
- Use consistent naming conventions
- Include supplier info for easy reordering
- Add notes for special handling requirements

### Data Backup
- Export before major changes
- Keep backups in secure location
- Test import process occasionally

## Troubleshooting

### Login Issues
- Check password: `autokey2024`
- Clear browser cache if needed
- Use incognito mode to test

### Data Issues
- Export data before troubleshooting
- Clear localStorage if corrupted: `localStorage.removeItem('autokey_inventory')`
- Re-import from backup if needed

### Access Issues  
- Ensure correct URL: `/admin/inventory`
- Check for typos in URL
- Verify server is running

## Customization Options

### Change Password
Edit `src/contexts/AuthContext.tsx` line 10:
```typescript
const ADMIN_PASSWORD = 'your-new-password';
```

### Add Categories
Edit `src/types/inventory.ts` CATEGORIES array:
```typescript
export const CATEGORIES = [
  'Your Category',
  // ... existing categories
] as const;
```

### Modify Fields
Edit interfaces in `src/types/inventory.ts` to add/remove fields

## Technical Details

- **Framework**: React 18 + TypeScript
- **UI Components**: Shadcn/ui + Tailwind CSS
- **Routing**: React Router v6
- **Storage**: Browser localStorage
- **State Management**: React Context
- **Build Tool**: Vite

## Support

The system is designed to be maintenance-free and self-contained. All functionality works offline once loaded. If you need modifications or additional features, the code is well-organized and documented for easy extension.

---

**Important**: This system stores data locally in your browser. Always export backups regularly and before clearing browser data!