import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, JobSite } from '../types';
import { useInventory } from '../context/HybridInventoryContext';

type JobSitesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'JobSites'>;

interface Props {
  navigation: JobSitesScreenNavigationProp;
}

const JobSitesScreen: React.FC<Props> = ({ navigation }) => {
  const { state } = useInventory();

  const renderJobSite = ({ item }: { item: JobSite }) => (
    <TouchableOpacity
      style={styles.jobSiteContainer}
      onPress={() => navigation.navigate('JobSiteUsage', { jobSite: item })}
    >
      <Text style={styles.jobSiteName}>{item.name}</Text>
      <Text style={styles.jobSiteAddress}>{item.address}</Text>
      <Text style={[styles.status, { color: item.isActive ? '#4CAF50' : '#757575' }]}>
        {item.isActive ? 'Active' : 'Inactive'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddJobSite')}
        >
          <Text style={styles.addButtonText}>+ Add Job Site</Text>
        </TouchableOpacity>
      </View>

      {state.jobSites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Job Sites Yet</Text>
          <Text style={styles.emptyText}>Add your first job site to track inventory usage.</Text>
        </View>
      ) : (
        <FlatList
          data={state.jobSites}
          renderItem={renderJobSite}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
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
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 20,
  },
  jobSiteContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  jobSiteName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobSiteAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
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
});

export default JobSitesScreen;