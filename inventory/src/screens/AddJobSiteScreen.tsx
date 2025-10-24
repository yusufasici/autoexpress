import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Switch,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useInventory } from '../context/HybridInventoryContext';

type AddJobSiteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddJobSite'>;

interface Props {
  navigation: AddJobSiteScreenNavigationProp;
}

const AddJobSiteScreen: React.FC<Props> = ({ navigation }) => {
  const { addJobSite } = useInventory();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter a job site name.');
      return;
    }

    if (!address.trim()) {
      Alert.alert('Error', 'Please enter a job site address.');
      return;
    }

    try {
      await addJobSite({
        name: name.trim(),
        address: address.trim(),
        description: description.trim(),
        isActive,
      });

      Alert.alert('Success', 'Job site added successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to add job site. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Add New Job Site</Text>
        <Text style={styles.subtitle}>Create a new job site to track inventory usage</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Job Site Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter job site name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Address *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter job site address"
            value={address}
            onChangeText={setAddress}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter job site description (optional)"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
            autoCapitalize="sentences"
          />

          <View style={styles.switchContainer}>
            <Text style={styles.label}>Active Job Site</Text>
            <Switch
              value={isActive}
              onValueChange={setIsActive}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isActive ? '#2196F3' : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Add Job Site</Text>
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
    height: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
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

export default AddJobSiteScreen;