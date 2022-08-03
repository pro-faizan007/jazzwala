import React, { createContext } from "react";

const CreateAuthStateContext = createContext(undefined);

const CreateAuthDispatchContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };
  return (
    <CreateAuthStateContext.Provider value={isAuthenticated}>
      <CreateAuthDispatchContext.Provider value={{ handleAuthChange }}>
        {children}
      </CreateAuthDispatchContext.Provider>
    </CreateAuthStateContext.Provider>
  );
};

const useCreatrAuthStateContext = () => {
  const context = React.useContext(CreateAuthStateContext);

  if (context === undefined) {
    throw Error("useCreatrAuthStateContext");
  }

  return context;
};

const useCreateAuthDispatchContext = () => {
  const context = React.useContext(CreateAuthDispatchContext);

  if (context === undefined) {
    throw Error("useCreateAuthDispatchContext");
  }

  return context;
};

const useAuthContext = () => {
  return [useCreatrAuthStateContext, useCreateAuthDispatchContext];
};

export {
  AuthProvider,
  useCreatrAuthStateContext,
  useCreateAuthDispatchContext,
  useAuthContext,
};
