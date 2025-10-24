import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Screen imports will be added later
import HomeScreen from '../screens/HomeScreen';
import InventoryListScreen from '../screens/InventoryListScreen';
import AddItemScreen from '../screens/AddItemScreen';
import EditItemScreen from '../screens/EditItemScreen';
import BulkAddScreen from '../screens/BulkAddScreen';
import JobSitesScreen from '../screens/JobSitesScreen';
import AddJobSiteScreen from '../screens/AddJobSiteScreen';
import JobSiteUsageScreen from '../screens/JobSiteUsageScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inventory Tracker' }}
        />
        <Stack.Screen 
          name="InventoryList" 
          component={InventoryListScreen} 
          options={{ title: 'Inventory' }}
        />
        <Stack.Screen 
          name="AddItem" 
          component={AddItemScreen} 
          options={{ title: 'Add Item' }}
        />
        <Stack.Screen 
          name="EditItem" 
          component={EditItemScreen} 
          options={{ title: 'Edit Item' }}
        />
        <Stack.Screen 
          name="BulkAdd" 
          component={BulkAddScreen} 
          options={{ title: 'Bulk Add Items' }}
        />
        <Stack.Screen 
          name="JobSites" 
          component={JobSitesScreen} 
          options={{ title: 'Job Sites' }}
        />
        <Stack.Screen 
          name="AddJobSite" 
          component={AddJobSiteScreen} 
          options={{ title: 'Add Job Site' }}
        />
        <Stack.Screen 
          name="JobSiteUsage" 
          component={JobSiteUsageScreen} 
          options={{ title: 'Use Items' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};