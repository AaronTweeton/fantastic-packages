import apiFetch from "@wordpress/api-fetch";
import { useEffect, useState } from "@wordpress/element";
import { Button, Flex, Spinner } from "@wordpress/components";
import { date } from "@wordpress/date";

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
        <table className="widefat fixed striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <>
              {posts.map((post) => (
                <tr>
                  <td class="row-title">{post.title.rendered}</td>
                  <td class="date description">
                    {date("F j, Y, g:i a", post.date)}
                  </td>
                  <td>
                    <Flex justify="end">
                      <Button href={post.link} variant="secondary">
                        View
                      </Button>
                    </Flex>
                  </td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      ) : (
        <>
          Fetching posts <Spinner />
        </>
      )}
    </div>
  );
}
