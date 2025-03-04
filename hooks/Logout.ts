import { auth } from "@/hooks/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { User } from "firebase/auth";
import { useEffect, useState } from "react";

export const useLogout = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    return () => unsubscribe();
  }, []);

  return { user };
};