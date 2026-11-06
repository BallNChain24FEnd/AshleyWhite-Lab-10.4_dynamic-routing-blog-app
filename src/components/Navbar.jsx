import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Main navigation
export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Log out and return to blog
  function handleLogout() {
    logout();
    navigate("/blog");
  }

  return (
    <nav className="navbar">
      <Link to="/blog">Blog</Link>

      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
}
