import { Routes, Route, Link } from "react-router-dom";
import Blog from "./pages/Blog";
import "./App.css";

// Main blog routes
export default function App() {
  return (
    <main className="container">
      <header>
        <h1>The Dev Journal</h1>
        <p>Code. Create. Keep Growing.</p>

        <nav>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </main>
  );
}
