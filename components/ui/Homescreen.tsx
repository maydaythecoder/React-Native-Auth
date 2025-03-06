import React from 'react';
import { View, Text, Button } from 'react-native';
import { UseAuth } from '@/hooks/UseAuth';
import { AuthStyles } from '@/styles/AuthStyles';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

export default function Homescreen() {
  const { user } = UseAuth();

  return (
    <View style={AuthStyles.authContainer}>
      <Text style={AuthStyles.title}>Welcome to the App</Text>
      <Text style={AuthStyles.emailText}>
        Logged in as: {user?.email || 'Guest'}
      </Text>
      <Button title="Sign Out" onPress={() => signOut(auth)} />
    </View>
  );
}