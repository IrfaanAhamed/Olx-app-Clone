import React, { useState, createContext } from "react";
import { firebaseApp } from "../firebase/config";

export const AuthContext = createContext({ user: null, setUser: () => {} });

function ContextAuth({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ firebaseApp,user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextAuth;
