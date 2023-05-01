import apiFetch from "@wordpress/api-fetch";
import { useEffect, useState } from "@wordpress/element";

export function App() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    apiFetch({ path: "/wp/v2/posts" }).then((data) => {
      setPosts(data);
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>Latest posts</h2>
      {posts.length ? (
        <ul>
          {posts.map((post) => (
            <li>
              <a href={post.link}>{post.title.rendered}</a>
            </li>
          ))}
        </ul>
      ) : (
        <>Fetching posts &hellip;</>
      )}
    </div>
  );
}
