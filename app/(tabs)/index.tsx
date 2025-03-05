import React from 'react';
import { View } from '@/components/Themed';
import { UseAuth } from '@/hooks/UseAuth';
import Homescreen from '@/components/ui/Homescreen';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const { user } = UseAuth();
  const router = useRouter();

  // If no user is authenticated, redirect back to login
  React.useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user, router]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user && <Homescreen />}
    </View>
  );
}