import React from "react";
import LoginForm from "./form/LoginForm";
import { BrowserRouter, Route } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* <Route path="/logIn" element={<LoginForm />} /> */}
      <LoginForm />
    </div>
  );
};

export default Login;
