import React from "react";
import { useCreatrAuthStateContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const SignInRoute = ({ children }) => {
  const userAuth = useCreatrAuthStateContext();

  if (userAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default SignInRoute;
