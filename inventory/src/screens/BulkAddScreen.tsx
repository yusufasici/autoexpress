import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, BulkAddItem } from '../types';
import { useInventory } from '../context/HybridInventoryContext';

type BulkAddScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BulkAdd'>;

interface Props {
  navigation: BulkAddScreenNavigationProp;
}

const BulkAddScreen: React.FC<Props> = ({ navigation }) => {
  const { bulkAddItems } = useInventory();
  const [items, setItems] = useState<BulkAddItem[]>([
    { name: '', quantity: 0, description: '', category: '', location: '', unitPrice: 0, supplier: '' }
  ]);

  const addNewItem = () => {
    setItems([...items, { name: '', quantity: 0, description: '', category: '', location: '', unitPrice: 0, supplier: '' }]);
  };

  const updateItem = (index: number, field: keyof BulkAddItem, value: string | number) => {
    const updatedItems = items.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    const validItems = items.filter(item => item.name.trim() !== '' && item.quantity > 0);
    
    if (validItems.length === 0) {
      Alert.alert('Error', 'Please add at least one valid item with a name and quantity.');
      return;
    }

    try {
      await bulkAddItems(validItems);
      Alert.alert('Success', `${validItems.length} items added successfully!`, [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to add items. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Bulk Add Items</Text>
        <Text style={styles.subtitle}>Add multiple items to your inventory at once</Text>

        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemNumber}>Item {index + 1}</Text>
              {items.length > 1 && (
                <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              )}
            </View>

            <TextInput
              style={styles.input}
              placeholder="Item Name *"
              value={item.name}
              onChangeText={(text) => updateItem(index, 'name', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Quantity *"
              value={item.quantity.toString()}
              onChangeText={(text) => updateItem(index, 'quantity', parseInt(text) || 0)}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Description"
              value={item.description}
              onChangeText={(text) => updateItem(index, 'description', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Category"
              value={item.category}
              onChangeText={(text) => updateItem(index, 'category', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Location"
              value={item.location}
              onChangeText={(text) => updateItem(index, 'location', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Unit Price"
              value={item.unitPrice?.toString() || ''}
              onChangeText={(text) => updateItem(index, 'unitPrice', parseFloat(text) || 0)}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Supplier"
              value={item.supplier}
              onChangeText={(text) => updateItem(index, 'supplier', text)}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addNewItem}>
          <Text style={styles.addButtonText}>+ Add Another Item</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Add All Items</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  removeButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: '#757575',
    padding: 15,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BulkAddScreen;