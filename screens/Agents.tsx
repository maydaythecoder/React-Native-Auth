import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Image } from 'react-native';
import { DUMMY_AGENTS } from '@/constants/Data/AgentData';
import { Agent } from '@/types';
import { Colors } from '@/constants';

const AgentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {DUMMY_AGENTS.map(agent => (
        <View key={agent.id} style={styles.agentCard}>
          <Image source={{ uri: agent.avatar }} style={styles.avatar} />
          <View style={styles.infoContainer}>
            <ThemedText style={styles.name}>{agent.name}</ThemedText>
            <ThemedText style={styles.title}>{agent.title}</ThemedText>
            <View style={[styles.statusContainer, { backgroundColor: getStatusColor(agent.status) }]}>
              <ThemedText style={styles.status}>{agent.status}</ThemedText>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
export default AgentsScreen;

const getStatusColor = (status: Agent['status']) => {
  switch (status) {
    case 'Available':
      return Colors.status.available;
    case 'Busy':
      return Colors.status.busy;
    case 'Away':
      return Colors.status.away;
    default:
      return Colors.status.default;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  agentCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statusContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  status: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});
