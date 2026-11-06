import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts";

// Display one blog post using its slug
export default function BlogPost() {
  const { slug } = useParams();

  // Find matching post
  const post = posts.find(post => post.slug === slug);

  // Handle missing posts
  if (!post) {
    return (
      <section className="post-page">
        <h2>Post not found</h2>
        <p>Sorry, this blog post does not exist.</p>
        <Link to="/blog">← Back to Blog</Link>
      </section>
    );
  }

  return (
    <article className="post-page">
      <Link to="/blog">← Back to Blog</Link>

      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}
