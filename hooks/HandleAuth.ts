import { auth } from "@/hooks/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    return { email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication };
};