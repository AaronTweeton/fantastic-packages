import apiFetch from "@wordpress/api-fetch";
import { useEffect, useState } from "@wordpress/element";
import { Button, Flex, Spinner } from "@wordpress/components";

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
              <Flex justify="start">
                {post.title.rendered}
                <Button href={post.link} variant="secondary">
                  View
                </Button>
              </Flex>
            </li>
          ))}
        </ul>
      ) : (
        <>
          Fetching posts <Spinner />
        </>
      )}
    </div>
  );
}
