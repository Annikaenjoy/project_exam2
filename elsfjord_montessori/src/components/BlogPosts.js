import React from "react";
import { apiUrl, postUrl } from "../constants/Api";
import { useState, useEffect } from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const newUrl = apiUrl + postUrl;

const BlogPosts = (props) => {
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
      {posts.map((post) => (
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <p>{post.date}</p>
                  <Card.Title key={post.id}>{post.title.rendered}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default BlogPosts;
