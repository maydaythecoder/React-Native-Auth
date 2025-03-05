import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { AuthForm } from '@/components/ui/AuthForm';
import { AuthStyles } from '@/styles/AuthStyles';
import { UseAuth } from '@/hooks/UseAuth';
import { HandleAuth } from '@/hooks/HandleAuth';
import App from './(tabs)';
WebBrowser.maybeCompleteAuthSession();

export default function AuthScreenWrapper() {

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

  return (
    <ScrollView contentContainerStyle={AuthStyles.container}>
      {user ? (
        <App />
      ) : (
        <>
        <Text>harro</Text>
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
