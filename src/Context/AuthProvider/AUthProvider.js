import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for currentUser //
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // google sign in

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(" from google sign in ", user);
        toast.success("Success Google ");
        //   saveUser(user.displayName,user.email)
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    const islogout = window.confirm(" Log Out ?");

    if (islogout) {
      return signOut(auth)
        .then(() => {
          localStorage.removeItem("accessToken");
        })
        .catch((e) => console.log(e));
    }
  };

  const gitProvider = new GithubAuthProvider();

  const authInfo = {
    createUser,
    login,
    logout,
    user,
    googleSignIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
