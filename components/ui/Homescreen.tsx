import { Dimensions, Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

// Add responsive layout calculations
const { width } = Dimensions.get('window');
const CARD_WIDTH = width > 500 ? '30%' : '45%'; // Responsive card size

const styles = StyleSheet.create({
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
    justifyContent: 'space-between',
  },
  statCard: {
    width: CARD_WIDTH,
    aspectRatio: 1.5,
    // ... rest of existing styles
  },
  // Update container padding
  container: {
    flex: 1,
    paddingTop: Platform.select({
      ios: 0, // Handled by tab bar contentStyle
      default: 48 // Android/web
    }),
  },
});

export default function Homescreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { 
      paddingTop: 48 + insets.top,
      paddingHorizontal: 16 
    }]}>
      {/* ... existing content ... */}
    </ScrollView>
  );
} 