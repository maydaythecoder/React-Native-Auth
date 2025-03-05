import React from 'react';
import { Button, View, TextInput, Text } from 'react-native';
import { AuthStyles } from '@/styles/AuthStyles';

export const AuthForm = ({ 
  email, 
  setEmail, 
  password, 
  setPassword, 
  isLogin, 
  setIsLogin, 
  handleAuthentication,
  handleGoogleSignIn
}: {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  handleAuthentication: () => Promise<void>;
  handleGoogleSignIn: () => Promise<void>;
}) => {
  return (
    <View style={AuthStyles.authContainer}>
       <Text style={AuthStyles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

       <TextInput
        style={AuthStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={AuthStyles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={AuthStyles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>

      <View style={AuthStyles.buttonContainer}>
        <Button 
          title="Sign in with Google" 
          onPress={handleGoogleSignIn} 
          color="#db4437" 
        />
      </View>

      <View style={AuthStyles.bottomContainer}>
        <Text style={AuthStyles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
}