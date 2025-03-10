import { Dimensions, Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width > 500 ? '30%' : '45%';

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
  },
  container: {
    flex: 1,
    paddingTop: Platform.select({
      ios: 0,
      default: 48
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
      {}
    </ScrollView>
  );
} 