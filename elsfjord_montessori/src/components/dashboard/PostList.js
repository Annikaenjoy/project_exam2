import React from "react";
import { apiUrl, postUrl } from "../../constants/Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const newUrl = apiUrl + postUrl;

const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getPosts() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(newUrl);
        const result = await response.json();
        console.log(result);

        setPosts(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred when calling the API</div>;
  }

  return (
    <>
      <section className="published_list">
        <h2>Pubiserte innlegg</h2>
        <ul className="post_list">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post${post.id}`}>{post.title.rendered} </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PostList;
