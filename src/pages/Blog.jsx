import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

// Display all blog posts
export default function Blog() {
  return (
    <section>
      <h2>Latest Blog Posts</h2>

      <div className="blog-grid">
        {posts.map(post => (
          <article className="blog-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <Link to={`/blog/${post.slug}`}>
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
