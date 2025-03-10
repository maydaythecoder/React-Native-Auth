
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, GoogleAuthProvider, getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Use getAuth instead of initializeAuth
auth.useDeviceLanguage();

export const googleProvider = new GoogleAuthProvider();

// Create a custom persistence solution for AsyncStorage if needed
export const setAuthPersistence = async (user: any) => {
  if (user) {
    await AsyncStorage.setItem('firebase_user', JSON.stringify(user));
  } else {
    await AsyncStorage.removeItem('firebase_user');
  }
};

export const getStoredUser = async () => {
  const userData = await AsyncStorage.getItem('firebase_user');
  return userData ? JSON.parse(userData) : null;
};
