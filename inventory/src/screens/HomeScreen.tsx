import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useInventory } from '../context/HybridInventoryContext';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { state } = useInventory();

  const menuItems = [
    {
      title: 'View Inventory',
      description: `${state.items.length} items`,
      onPress: () => navigation.navigate('InventoryList'),
      color: '#4CAF50',
    },
    {
      title: 'Add Item',
      description: 'Add single item',
      onPress: () => navigation.navigate('AddItem'),
      color: '#2196F3',
    },
    {
      title: 'Bulk Add',
      description: 'Add multiple items',
      onPress: () => navigation.navigate('BulkAdd'),
      color: '#FF9800',
    },
    {
      title: 'Job Sites',
      description: `${state.jobSites.length} sites`,
      onPress: () => navigation.navigate('JobSites'),
      color: '#9C27B0',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Inventory Tracker</Text>
        <Text style={styles.subtitle}>Manage your inventory efficiently</Text>
      </View>
      
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, { backgroundColor: item.color }]}
            onPress={item.onPress}
          >
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Text style={styles.menuDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    flex: 1,
    padding: 20,
  },
  menuItem: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
});

export default HomeScreen;