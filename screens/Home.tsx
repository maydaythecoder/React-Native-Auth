import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, useColorScheme, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol, IconSymbolName } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface StatCardProps {
  value?: string | number;
  icon: IconSymbolName;
}

const StatCard = ({ value, icon }: StatCardProps) => (
  <ThemedView style={styles.statCard}>
    <ThemedText style={styles.statValue}>{value}</ThemedText>
    <IconSymbol 
      name={icon}
      size={20}
      color={useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text}
      style={styles.statIcon}
    />
  </ThemedView>
);

const ActivityItem = ({ icon, text }: { icon: keyof typeof MaterialIcons.glyphMap; text: string }) => (
  <View style={styles.activityItem}>
    <MaterialIcons name={icon} size={20} style={styles.activityIcon} />
    <ThemedText style={styles.activityText}>{text}</ThemedText>
  </View>
);

export default function Homescreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top + 48 }]}>
      <View style={styles.statsGrid}>
        <StatCard value="583" icon="house.fill"  />
        <StatCard value="192" icon="eye.fill"  />
        <StatCard value="438" icon="heart.fill"  />
        <StatCard value="67" icon="star.fill"  />
        <StatCard value="89" icon="bubble.fill"  />
        <StatCard  icon="plus.app.fill"  />
      </View>

      <ThemedView style={styles.activitySection}>
        <ThemedText style={styles.sectionTitle}>Recent Activities</ThemedText>
        <ActivityItem 
          icon="home"
          text="Your listing House on the Beverly Hills has been approved"
        />
        <ActivityItem 
          icon="chat"
          text="Dollie Horton left a review on House on the Northridge"
        />
        <ActivityItem 
          icon="favorite"
          text="Someone favorites your Triple Story House for Rent listing"
        />
        <TouchableOpacity style={styles.viewMoreButton}>
          <ThemedText style={styles.viewMoreText}>View More</ThemedText>
          <MaterialIcons name="arrow-forward" size={20} />
        </TouchableOpacity>
        <Button title="Sign Out" onPress={() => signOut(auth)} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
    justifyContent: 'space-between',
  },
  statCard: {
    width: '45%',
    aspectRatio: 1.5,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statIcon: {
    fontSize: 20,
    opacity: 0.7,
  },
  activitySection: {
    padding: 16,
    margin: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  activityIcon: {
    marginRight: 12,
    opacity: 0.5,
  },
  activityText: {
    flex: 1,
    fontSize: 14,
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  viewMoreText: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
});
