import React from 'react';
import { View } from 'react-native';
import { UseAuth } from '@/hooks/UseAuth';
import { HomeScreen } from '@/screens';
import { useRouter } from 'expo-router';

const App = () => {
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
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 48,
      }}
    >
      {user && <HomeScreen />}
    </View>
  );
};

export default App;
