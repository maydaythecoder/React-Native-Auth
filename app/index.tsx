
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { AuthForm } from '@/components/ui/AuthForm';
import { AuthStyles } from '@/styles/AuthStyles';
import { UseAuth } from '@/hooks/UseAuth';
import { HandleAuth } from '@/hooks/HandleAuth';
import { useRouter } from 'expo-router';
WebBrowser.maybeCompleteAuthSession();

export default function AuthScreenWrapper() {
  const router = useRouter();
  const { user } = UseAuth();
  const { 
    email, 
    setEmail, 
    password, 
    setPassword, 
    isLogin, 
    setIsLogin, 
    handleAuthentication,
    handleGoogleSignIn  
  } = HandleAuth();

  // If user is authenticated, redirect to tabs
  React.useEffect(() => {
    if (user) {
      router.replace('/app');
    }
  }, [user, router]);

  return (
    <ScrollView contentContainerStyle={AuthStyles.container}>
      {!user && (
        <>
          <Text style={AuthStyles.title}>Welcome</Text>
          <AuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
            handleGoogleSignIn={handleGoogleSignIn}
          />
        </>
      )}
    </ScrollView>
  );
}
