import React from "react";
import { postUrl } from "../constants/postUrl";
import { useState, useEffect } from "react";

const BlogPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getPosts() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(postUrl);
        const result = await response.json();
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
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title.rendered}</h2>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
