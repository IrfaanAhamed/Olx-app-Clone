import React, { useEffect, useContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../components/auth/layout";
import { AuthLogin } from "../pages/auth/Login";
import { AuthSignup } from "../pages/auth/Signup";
import { AuthContext } from "../store/ContextAuth";
import Post from "../pages/Post";
function MainRoutes() {
  const { setUser, firebaseApp } = useContext(AuthContext);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="signup" element={<AuthSignup />} />
        </Route>
          <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
