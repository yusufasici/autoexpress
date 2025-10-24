import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, InventoryItem } from '../types';
import { useInventory } from '../context/HybridInventoryContext';

type JobSiteUsageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'JobSiteUsage'>;
type JobSiteUsageScreenRouteProp = RouteProp<RootStackParamList, 'JobSiteUsage'>;

interface Props {
  navigation: JobSiteUsageScreenNavigationProp;
  route: JobSiteUsageScreenRouteProp;
}

const JobSiteUsageScreen: React.FC<Props> = ({ navigation, route }) => {
  const { state, useItemAtJobSite } = useInventory();
  const { jobSite } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [quantityUsed, setQuantityUsed] = useState('');
  const [notes, setNotes] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = state.items.filter(item =>
    item.quantity > 0 &&
    (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const handleUseItem = (item: InventoryItem) => {
    setSelectedItem(item);
    setQuantityUsed('');
    setNotes('');
    setModalVisible(true);
  };

  const handleConfirmUsage = async () => {
    if (!selectedItem) return;

    const qty = parseInt(quantityUsed);
    if (isNaN(qty) || qty <= 0) {
      Alert.alert('Error', 'Please enter a valid quantity.');
      return;
    }

    if (qty > selectedItem.quantity) {
      Alert.alert('Error', `Only ${selectedItem.quantity} ${selectedItem.name} available.`);
      return;
    }

    try {
      await useItemAtJobSite(selectedItem.id, jobSite.id, qty, notes);
      setModalVisible(false);
      Alert.alert('Success', `${qty} ${selectedItem.name} used at ${jobSite.name}`);
    } catch (error) {
      Alert.alert('Error', 'Failed to record usage. Please try again.');
    }
  };

  const renderItem = ({ item }: { item: InventoryItem }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description || 'No description'}</Text>
        <Text style={styles.itemQuantity}>Available: {item.quantity}</Text>
        {item.category && <Text style={styles.itemCategory}>{item.category}</Text>}
      </View>
      <TouchableOpacity
        style={styles.useButton}
        onPress={() => handleUseItem(item)}
      >
        <Text style={styles.useButtonText}>Use</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.jobSiteName}>{jobSite.name}</Text>
        <Text style={styles.jobSiteAddress}>{jobSite.address}</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search inventory items..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {filteredItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Available Items</Text>
          <Text style={styles.emptyText}>
            {searchQuery ? 'No items match your search.' : 'No items available for use.'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Use Item at Job Site</Text>
            {selectedItem && (
              <View>
                <Text style={styles.modalItemName}>{selectedItem.name}</Text>
                <Text style={styles.modalAvailable}>
                  Available: {selectedItem.quantity}
                </Text>

                <Text style={styles.modalLabel}>Quantity to Use *</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter quantity"
                  value={quantityUsed}
                  onChangeText={setQuantityUsed}
                  keyboardType="numeric"
                />

                <Text style={styles.modalLabel}>Notes (Optional)</Text>
                <TextInput
                  style={[styles.modalInput, styles.modalTextArea]}
                  placeholder="Enter notes about this usage"
                  value={notes}
                  onChangeText={setNotes}
                  multiline
                  numberOfLines={3}
                />

                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity
                    style={styles.modalCancelButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalCancelButtonText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalConfirmButton}
                    onPress={handleConfirmUsage}
                  >
                    <Text style={styles.modalConfirmButtonText}>Use Item</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  jobSiteName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobSiteAddress: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  listContainer: {
    padding: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  itemCategory: {
    fontSize: 12,
    color: '#2196F3',
    fontStyle: 'italic',
  },
  useButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  useButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalAvailable: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 20,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  modalTextArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalCancelButton: {
    backgroundColor: '#757575',
    padding: 15,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  modalCancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalConfirmButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  modalConfirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobSiteUsageScreen;