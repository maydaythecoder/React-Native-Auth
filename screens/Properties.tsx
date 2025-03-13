import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Input, InputField, Button, ButtonText, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, CloseIcon, Icon, Heading, ModalBackdrop, Text, HStack } from '@gluestack-ui/themed';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { fetchProperties } from '@/hooks/fetchProperties';
import { Property } from '@/types';
import Filtering from '@/components/Filtering';
const FALLBACK_IMAGE = 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D';

const PropertiesScreen = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState<Property[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const fetchedProperties = await fetchProperties();
        setProperties(fetchedProperties);
      } catch (error) {
        console.error('Error loading properties:', error);
      }
    };
    loadProperties();
  }, []);

  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.propertyType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ThemedView style={styles.filterSection}>
       <Filtering />
      </ThemedView>
      <ScrollView style={styles.cardContainer}>
        {filteredProperties.map(property => (
          <ThemedView key={property.id} style={styles.card}>
            {property.images.length > 0 && (
              <Image 
                source={{ uri: imageErrors[property.id] ? FALLBACK_IMAGE : property.images[0] }}
                style={styles.image}
                onError={() => setImageErrors(prev => ({ ...prev, [property.id]: true }))}
                resizeMode="cover"
              />
            )}
            <View style={styles.cardContent}>
              <ThemedText style={styles.title}>{property.title}</ThemedText>
              <ThemedText style={styles.price}>${property.price}/month</ThemedText>
              <ThemedText style={styles.details}>
                {property.bedrooms} Bedrooms • {property.bathrooms} Bathrooms
              </ThemedText>
              {property.address && (
                <ThemedText style={styles.details}>Address available</ThemedText>
              )}
              <ThemedText style={styles.details}>
                {property.squareFeet} sq.ft. • {property.parkingSpaces} Parking Spaces
              </ThemedText>
              {property.features.length > 0 && (
                <ThemedText style={styles.details}>
                  Features: {property.features.join(', ')}
                </ThemedText>
              )}
            </View>
          </ThemedView>
        ))}
      </ScrollView>
    </View>
  );
};
export default PropertiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filterSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  cardContainer: {
    padding: 16,
  },
  card: {
    borderRadius: 8,
    marginBottom: 16,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    opacity: 0.7,
  },
});