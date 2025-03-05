import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { User } from "firebase/auth";
import { useEffect, useState } from "react";

export const UseAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    return () => unsubscribe();
  }, []);

  return { user };
};