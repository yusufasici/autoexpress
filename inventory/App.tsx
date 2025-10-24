import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { InventoryProvider } from './src/context/HybridInventoryContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <InventoryProvider>
      <AppNavigator />
      <StatusBar style="auto" />
    </InventoryProvider>
  );
}
