import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getLoggedInUser, login, logout } from './services/http';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initial 'undefined' value means that authentication status is unknown
  const [authenticated, setAuthenticated] = useState(undefined);
  // Check auth state when component is mounted
  useEffect(() => {
    getLoggedInUser().then(u => setAuthenticated(!!u));
  }, []);

  const value = { authenticated, setAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  return useMemo(
    () => ({
      authenticated,
      async login() {
        setAuthenticated(undefined);
        await login();
        setAuthenticated(true);
      },
      async logout() {
        setAuthenticated(undefined);
        await logout();
        setAuthenticated(false);
      },
    }),
    [authenticated, setAuthenticated]
  );
};
