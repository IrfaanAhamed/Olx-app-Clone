import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../components/auth/layout";
import { AuthLogin } from "../pages/auth/Login";
import { AuthSignup } from "../pages/auth/Signup";
function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="signup" element={<AuthSignup />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
