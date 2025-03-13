import { StyleSheet, Image, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const ExploreScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedText style={styles.header}></ThemedText>
        
        <ThemedView style={styles.featuredSection}>
          <ThemedText style={styles.sectionTitle}>Featured Listings</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {[1,2,3].map(i => (
              <TouchableOpacity key={i} style={styles.propertyCard}>
                <Image 
                  source={{uri: `https://picsum.photos/300/200?random=${i}`}}
                  style={styles.propertyImage}
                />
                <ThemedView style={styles.propertyInfo}>
                  <ThemedText style={styles.propertyPrice}>$599,000</ThemedText>
                  <ThemedText style={styles.propertyDetails}>3 bed • 2 bath • 1,800 sqft</ThemedText>
                  <ThemedText style={styles.propertyAddress}>123 Main St, City</ThemedText>
                </ThemedView>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.categoriesSection}>
          <ThemedText style={styles.sectionTitle}>Browse by Category</ThemedText>
          <ThemedView style={styles.categoryGrid}>
            {['Houses', 'Apartments', 'Condos', 'Land'].map(category => (
              <ThemedView key={category} style={styles.categoryCard}>
                <TouchableOpacity>
                  <ThemedText style={styles.categoryText}>{category}</ThemedText>
                </TouchableOpacity>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  featuredSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  featuredScroll: {
    flexDirection: 'row',
  },
  propertyCard: {
    width: 300,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 2,
      }
    })
  },
  propertyImage: {
    width: '100%',
    height: 200,
  },
  propertyInfo: {
    padding: 12,
  },
  propertyPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  propertyDetails: {
    fontSize: 14,
    marginBottom: 4,
  },
  propertyAddress: {
    fontSize: 14,
  },
  categoriesSection: {
    marginBottom: 24,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryCard: {
    width: '47%',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  }
});
