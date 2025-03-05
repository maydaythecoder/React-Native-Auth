import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HandleAuth } from '@/hooks/HandleAuth';
// Add type definitions at the top
interface PropertyItem {
  id: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  isFavorite: boolean;
}

const Homescreen = () => {
  const { handleAuthentication } = HandleAuth();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - replace with real data from your API
  const properties = [
    {
      id: '1',
      title: 'Modern Downtown Apartment',
      price: '$450,000',
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: 'https://source.unsplash.com/random/800x600/?apartment',
      isFavorite: false
    },
    // Add more properties...
  ];

  const filters = [
    { id: '1', label: 'House', icon: 'home' },
    { id: '2', label: 'Apartment', icon: 'business' },
    { id: '3', label: 'Villa', icon: 'planet' },
    { id: '4', label: 'Condo', icon: 'layers' },
  ];

  // Add type to toggleFavorite parameter
  const toggleFavorite = (propertyId: string) => {
    // Implement favorite logic
  };

  // Type the renderPropertyItem parameter
  const renderPropertyItem = ({ item }: { item: PropertyItem }) => (
    <TouchableOpacity style={styles.propertyCard}>
      <ImageBackground source={{ uri: item.image }} style={styles.propertyImage}>
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(item.id)}
        >
          <Icon 
            name={item.isFavorite ? 'heart' : 'heart-outline'} 
            size={24} 
            color={item.isFavorite ? '#FF385C' : 'white'} 
          />
        </TouchableOpacity>
      </ImageBackground>
      
      <View style={styles.propertyDetails}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.propertyFeatures}>
          <Text style={styles.feature}><Icon name="bed" size={16} /> {item.beds}</Text>
          <Text style={styles.feature}><Icon name="water" size={16} /> {item.baths}</Text>
          <Text style={styles.feature}>{item.sqft} sqft</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Find Your Dream Home</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search properties..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        </View>
      </View>
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />

      {/* Filters Section */}
      <FlatList
        horizontal
        data={filters}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.filtersContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[
              styles.filterButton,
              selectedFilter === item.label && styles.selectedFilter
            ]}
            onPress={() => setSelectedFilter(item.label)}
          >
            <Icon name={item.icon} size={20} color={selectedFilter === item.label ? '#FFF' : '#666'} />
            <Text style={[
              styles.filterText,
              selectedFilter === item.label && styles.selectedFilterText
            ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Property Listings */}
      <FlatList
        data={properties}
        renderItem={renderPropertyItem}
        keyExtractor={(item: PropertyItem) => item.id}
        numColumns={2}
        contentContainerStyle={styles.propertiesContainer}
      />

      {/* Map View Floating Button */}
      <TouchableOpacity style={styles.mapButton}>
        <Icon name="map" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 8,
  },
  filtersContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  selectedFilter: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    marginLeft: 4,
    color: '#666',
  },
  selectedFilterText: {
    color: '#FFF',
  },
  propertiesContainer: {
    padding: 8,
  },
  propertyCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  propertyImage: {
    height: 180,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 6,
  },
  propertyDetails: {
    padding: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  propertyFeatures: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feature: {
    fontSize: 12,
    color: '#999',
  },
  mapButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#007AFF',
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

export default Homescreen;
