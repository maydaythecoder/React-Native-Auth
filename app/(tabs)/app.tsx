import React from 'react';
import { View } from 'react-native';
import { UseAuth } from '@/hooks/UseAuth';
import Homescreen from '@/components/ui/Homescreen';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const { user } = UseAuth();
  const router = useRouter();
  const [hasMounted, setHasMounted] = React.useState(false);

  // Wait for component to mount before any navigation attempts
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  // Handle auth state after mounting
  React.useEffect(() => {
    if (hasMounted && !user) {
      router.replace('/');
    }
  }, [hasMounted, user, router]);

  if (!hasMounted) {
    return null; // Or loading indicator
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user && <Homescreen />}
    </View>
  );
}