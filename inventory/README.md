# Inventory Tracker - React Native Mobile App

A comprehensive mobile application for tracking inventory with features designed for job site usage management. Built with React Native and Expo for iOS devices.

## Features

### Core Inventory Management
- ✅ **Add Items**: Add individual inventory items with detailed information
- 🔄 **Update Items**: Edit existing item details and quantities  
- ❌ **Remove Items**: Delete items from inventory
- 👀 **View Inventory**: Browse and search through all inventory items

### Advanced Features
- 📦 **Bulk Add**: Add multiple items at once for efficient inventory setup
- 🏗️ **Job Site Management**: Create and manage job sites
- 📊 **Automatic Usage Tracking**: Reduce inventory quantities when items are used at job sites
- 🔍 **Search & Filter**: Find items quickly by name or category

### Production Ready Features
- 🗄️ **Cloud Database**: PostgreSQL database with Supabase
- � **Standalone iPhone App**: No Expo Go required - works anywhere
- 🔄 **Offline/Online Sync**: Works without internet, syncs when connected
- 🌐 **Remote Access**: Access from anywhere, not just same WiFi
- 💾 **Data Safety**: Cloud backup ensures you never lose inventory data
- 🔒 **Enterprise Security**: Row-level security and API authentication

## Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Stack Navigator)
- **State Management**: React Context API with useReducer
- **Storage**: AsyncStorage for local data persistence
- **UI**: React Native built-in components with custom styling

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # State management (InventoryContext)
├── navigation/         # App navigation setup
├── screens/           # Main app screens
│   ├── HomeScreen.tsx
│   ├── InventoryListScreen.tsx
│   ├── AddItemScreen.tsx
│   ├── EditItemScreen.tsx
│   ├── BulkAddScreen.tsx
│   ├── JobSitesScreen.tsx
│   ├── AddJobSiteScreen.tsx
│   └── JobSiteUsageScreen.tsx
├── services/          # Data services and API calls
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Physical iOS device with Expo Go app (for testing)

### Installation

1. **Clone and setup the project**:
   ```bash
   cd inventory
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Run on iOS**:
   ```bash
   npm run ios
   ```

4. **Run on web** (for testing):
   ```bash
   npm run web
   ```

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator (macOS required)
- `npm run android` - Run on Android emulator  
- `npm run web` - Run in web browser
- `npx tsc --noEmit` - Check TypeScript compilation

## Data Models

### InventoryItem
```typescript
interface InventoryItem {
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
```

### JobSite
```typescript
interface JobSite {
  id: string;
  name: string;
  address: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
}
```

### JobSiteUsage
```typescript
interface JobSiteUsage {
  id: string;
  itemId: string;
  jobSiteId: string;
  quantityUsed: number;
  usageDate: Date;
  notes?: string;
}
```

## Key Features Explained

### 1. Inventory Management
The app provides full CRUD operations for inventory items. Each item includes:
- Basic info (name, description, quantity)
- Organization (category, location)
- Business data (unit price, supplier)
- Timestamps (created/updated dates)

### 2. Job Site Integration
Job sites represent locations where inventory items are used. When items are consumed at a job site:
- Quantities are automatically reduced from inventory
- Usage is logged with date and notes
- Historical usage data is maintained

### 3. Bulk Operations
For initial inventory setup or large additions, the bulk add feature allows:
- Adding multiple items simultaneously
- Importing from CSV or manual entry
- Validation before committing all items

### 4. Search and Navigation
- Real-time search across item names and categories
- Intuitive navigation between screens
- Easy access to add/edit functionality

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow React Native best practices
- Implement proper error handling
- Add meaningful comments for complex logic

### State Management
- Use the InventoryContext for all inventory operations
- Keep components focused and reusable
- Implement optimistic updates where appropriate

### Performance
- Use FlatList for large item lists
- Implement proper key props for list items
- Avoid unnecessary re-renders with proper dependency arrays

## Building for iOS

Since this is designed for iPhone, follow these steps for iOS deployment:

1. **Development Build**:
   ```bash
   npm run ios
   ```

2. **For Physical Device**:
   - Install Expo Go from App Store
   - Scan QR code from development server
   - Test all features on actual hardware

3. **Production Build**:
   ```bash
   expo build:ios
   ```

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `expo start --clear`
2. **iOS Simulator not opening**: Restart Xcode and simulator
3. **AsyncStorage errors**: Check device storage permissions
4. **Navigation errors**: Verify all screen components are properly exported

### Development Tips

- Use the React Native Debugger for better debugging
- Test on multiple device sizes
- Regularly check TypeScript compilation
- Test offline functionality by disabling network

## Future Enhancements

### Planned Features
- [ ] Barcode scanning for item addition
- [ ] Photo attachments for items
- [ ] Export inventory reports
- [ ] Cloud synchronization
- [ ] Multiple user support
- [ ] Advanced analytics and reporting

### Performance Improvements
- [ ] Implement virtualization for large lists
- [ ] Add database indexing for faster searches
- [ ] Optimize image loading and caching
- [ ] Implement background sync

## Contributing

1. Follow the existing code structure
2. Add TypeScript types for new features
3. Test on both iOS simulator and device
4. Update documentation for new features

## License

This project is proprietary software for AutoKey Express inventory management.