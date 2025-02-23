import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const [users, setUsers] = useState(null);
const [loading, setLoading] = useState(true);

const AuthProvider = ({ children }) => {
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { createNewUser, users, loading, loginUser, logOutUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
