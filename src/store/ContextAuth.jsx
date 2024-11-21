import React, { useState, createContext } from "react";
import { firebaseApp } from "../firebase/config";

export const AuthContext = createContext(null);

function ContextAuth({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ firebaseApp,user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextAuth;
