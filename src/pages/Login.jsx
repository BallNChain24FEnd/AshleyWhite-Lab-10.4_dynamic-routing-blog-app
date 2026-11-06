import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Login page
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Log in and open admin page
  function handleLogin() {
    login();
    navigate("/admin");
  }

  return (
    <section className="login-page">
      <h2>Welcome Back!</h2>
      <p>Log in to access your Dev Journal dashboard.</p>

      <button onClick={handleLogin}>
        Log In
      </button>
    </section>
  );
}
