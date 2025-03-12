import "core-js/stable";

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, SplashScreen as RouterSplashScreen } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/useColorScheme';
import { initSentry } from '@/firebase/sentry';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://8de9334dbd2fb39235dbbf8eaf418bab@o4508967046545408.ingest.us.sentry.io/4508967056310272',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

// Initialize Sentry as early as possible
initSentry();

// Prevent the splash screen from auto-hiding before asset loading is complete.
try {
  SplashScreen.preventAutoHideAsync();
} catch (e) {
  // Handle potential splash screen errors in Expo Go
  console.warn("SplashScreen error:", e);
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...MaterialIcons.font,
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (loaded) {
        try {
          // In Expo Go, we'll use RouterSplashScreen instead
          if (__DEV__) {
            RouterSplashScreen.hideAsync();
          } else {
            await SplashScreen.hideAsync();
          }
        } catch (e) {
          console.warn("Error hiding splash screen:", e);
        }
      }
    };
    hideSplash();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="AuthScreenWrapper" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
