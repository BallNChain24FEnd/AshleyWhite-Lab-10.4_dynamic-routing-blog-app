import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Protect private pages
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // Redirect users who are logged out
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
