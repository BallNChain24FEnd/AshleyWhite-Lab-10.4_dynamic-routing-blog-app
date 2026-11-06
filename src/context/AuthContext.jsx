import { createContext, useContext, useState } from "react";

// Create authentication context
const AuthContext = createContext(null);

// Share authentication state
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login
  function login() {
    setIsAuthenticated(true);
  }

  // Simulate logout
  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for authentication
export function useAuth() {
  return useContext(AuthContext);
}
