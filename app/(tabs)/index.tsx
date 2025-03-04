import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView } from 'react-native';
import { AuthForm } from '@/components/ui/AuthForm';
import { AuthenticatedScreen } from '@/components/ui/AuthenticatedScreen';
import { AuthStyles } from '@/styles/AuthStyles';
import { UseAuth } from '@/hooks/UseAuth';
import { HandleAuth } from '@/hooks/HandleAuth';
WebBrowser.maybeCompleteAuthSession();

export default function AuthScreenWrapper() {

  const { user } = UseAuth();
  const { email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication } = HandleAuth();

  return (
    <ScrollView contentContainerStyle={AuthStyles.container}>
      {user ? (
        <AuthenticatedScreen 
          user={user} 
          handleAuthentication={handleAuthentication} 
        />
      ) : (
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </ScrollView>
  );
}
