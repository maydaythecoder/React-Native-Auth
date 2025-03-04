import { auth } from "@/hooks/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLogout } from "./Logout";
import { useState } from "react";

export const useAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const { user } = useLogout();
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