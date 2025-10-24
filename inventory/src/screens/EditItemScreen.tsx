import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useInventory } from '../context/HybridInventoryContext';

type EditItemScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditItem'>;
type EditItemScreenRouteProp = RouteProp<RootStackParamList, 'EditItem'>;

interface Props {
  navigation: EditItemScreenNavigationProp;
  route: EditItemScreenRouteProp;
}

const EditItemScreen: React.FC<Props> = ({ navigation, route }) => {
  const { updateItem } = useInventory();
  const { item } = route.params;

  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description || '');
  const [quantity, setQuantity] = useState(item.quantity.toString());
  const [category, setCategory] = useState(item.category || '');
  const [location, setLocation] = useState(item.location || '');
  const [unitPrice, setUnitPrice] = useState(item.unitPrice?.toString() || '');
  const [supplier, setSupplier] = useState(item.supplier || '');

  const handleSubmit = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter an item name.');
      return;
    }

    const qty = parseInt(quantity);
    if (isNaN(qty) || qty < 0) {
      Alert.alert('Error', 'Please enter a valid quantity.');
      return;
    }

    try {
      const updatedItem = {
        ...item,
        name: name.trim(),
        description: description.trim(),
        quantity: qty,
        category: category.trim(),
        location: location.trim(),
        unitPrice: parseFloat(unitPrice) || undefined,
        supplier: supplier.trim(),
        updatedAt: new Date(),
      };

      await updateItem(updatedItem);
      Alert.alert('Success', 'Item updated successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to update item. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Edit Item</Text>
        <Text style={styles.subtitle}>Update your inventory item details</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Item Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter item description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
            autoCapitalize="sentences"
          />

          <Text style={styles.label}>Quantity *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter quantity"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter category"
            value={category}
            onChangeText={setCategory}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Unit Price</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter unit price"
            value={unitPrice}
            onChangeText={setUnitPrice}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Supplier</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter supplier name"
            value={supplier}
            onChangeText={setSupplier}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Update Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
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
    marginBottom: 30,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'white',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default EditItemScreen;