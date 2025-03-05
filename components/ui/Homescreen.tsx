import React from 'react';
import { View, Text } from 'react-native';
import { UseAuth } from '@/hooks/UseAuth';
import { AuthStyles } from '@/styles/AuthStyles';

export default function Homescreen() {
  const { user } = UseAuth();

  return (
    <View style={AuthStyles.authContainer}>
      <Text style={AuthStyles.title}>Welcome to the App</Text>
      <Text style={AuthStyles.emailText}>
        Logged in as: {user?.email || 'Guest'}
      </Text>
    </View>
  );
}