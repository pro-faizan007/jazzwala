import React from "react";
import { useCreatrAuthStateContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const userAuth = useCreatrAuthStateContext();

  if (!userAuth) { 
    
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoutes;
