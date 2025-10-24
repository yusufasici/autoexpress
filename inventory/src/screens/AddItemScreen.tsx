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
import { RootStackParamList } from '../types';
import { useInventory } from '../context/HybridInventoryContext';

type AddItemScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddItem'>;

interface Props {
  navigation: AddItemScreenNavigationProp;
}

const AddItemScreen: React.FC<Props> = ({ navigation }) => {
  const { addItem } = useInventory();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    category: '',
    location: '',
    unitPrice: '',
    supplier: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      Alert.alert('Error', 'Item name is required');
      return;
    }

    if (!formData.quantity || isNaN(Number(formData.quantity)) || Number(formData.quantity) < 0) {
      Alert.alert('Error', 'Please enter a valid quantity');
      return;
    }

    addItem({
      name: formData.name.trim(),
      description: formData.description.trim() || undefined,
      quantity: Number(formData.quantity),
      category: formData.category.trim() || undefined,
      location: formData.location.trim() || undefined,
      unitPrice: formData.unitPrice ? Number(formData.unitPrice) : undefined,
      supplier: formData.supplier.trim() || undefined,
    });

    Alert.alert('Success', 'Item added successfully', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Item Name *</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={value => handleInputChange('name', value)}
              placeholder="Enter item name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.description}
              onChangeText={value => handleInputChange('description', value)}
              placeholder="Enter description"
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Quantity *</Text>
            <TextInput
              style={styles.input}
              value={formData.quantity}
              onChangeText={value => handleInputChange('quantity', value)}
              placeholder="Enter quantity"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              value={formData.category}
              onChangeText={value => handleInputChange('category', value)}
              placeholder="Enter category"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value={formData.location}
              onChangeText={value => handleInputChange('location', value)}
              placeholder="Enter storage location"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Unit Price</Text>
            <TextInput
              style={styles.input}
              value={formData.unitPrice}
              onChangeText={value => handleInputChange('unitPrice', value)}
              placeholder="Enter unit price"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Supplier</Text>
            <TextInput
              style={styles.input}
              value={formData.supplier}
              onChangeText={value => handleInputChange('supplier', value)}
              placeholder="Enter supplier name"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Add Item</Text>
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
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddItemScreen;