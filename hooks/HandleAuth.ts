import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { UseAuth } from "./UseAuth";
import { useState } from "react";

export const HandleAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const { user } = UseAuth();
    const handleAuthentication = async () => {
        try {
            if (user) {
                await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
        }
      }
    } catch (error) {
      let errorMessage = 'Authentication failed';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error('Authentication error:', errorMessage);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({ prompt: 'select_account' });
            await signInWithPopup(auth, provider);
        } catch (error) {
            let errorMessage = 'Google authentication failed';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.error('Google sign-in error:', errorMessage);
        }
    };

    return { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        isLogin, 
        setIsLogin, 
        handleAuthentication,
        handleGoogleSignIn
    };
};