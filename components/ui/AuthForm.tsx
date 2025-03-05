
import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { AuthStyles } from '@/styles/AuthStyles';

export interface AuthFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  handleAuthentication: () => Promise<void>;
  handleGoogleSignIn: () => Promise<void>;
}

export const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
  handleGoogleSignIn,
}: AuthFormProps) => {
  return (
    <View style={AuthStyles.authContainer}>
      <Text style={AuthStyles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <TextInput
        style={AuthStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={AuthStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={AuthStyles.buttonContainer}>
        <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>
      <TouchableOpacity style={AuthStyles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={AuthStyles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <View style={AuthStyles.bottomContainer}>
        <Text style={AuthStyles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
}
