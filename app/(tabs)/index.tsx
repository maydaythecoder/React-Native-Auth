import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { UseAuth } from '@/hooks/UseAuth';
import { HandleAuth } from '@/hooks/HandleAuth';
import { AuthenticatedScreen } from '@/components/ui/AuthenticatedScreen';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const { user } = UseAuth();
  const { handleAuthentication } = HandleAuth();

  // If no user is authenticated, redirect back to login
  React.useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user, router]);

  if (!user) {
    // Return empty view while redirecting
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AuthenticatedScreen 
        user={user} 
        handleAuthentication={handleAuthentication} 
      />
    </View>
  );
}