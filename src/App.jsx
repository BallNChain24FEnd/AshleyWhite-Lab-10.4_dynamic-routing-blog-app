import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import "./App.css";

// Main blog application
export default function App() {
  return (
    <main className="container">
      <header>
        <h1>The Dev Journal</h1>
        <p>Code. Create. Keep Growing.</p>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

