import { Link } from "react-router-dom";

// Protected admin dashboard
export default function Admin() {
  return (
    <section className="admin-page">
      <h2>Welcome to the Admin Dashboard!</h2>
      <p>You are successfully logged in.</p>

      <div className="admin-card">
        <h3>Developer Workspace</h3>
        <p>
          Manage your creative ideas and explore
          your coding journey.
        </p>
        <Link to="/blog">View Blog Posts →</Link>
      </div>
    </section>
  );
}
