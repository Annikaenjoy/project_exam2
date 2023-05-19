import React from "react";
import { postUrl } from "../constants/postUrl";
import { useState, useEffect } from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
    <>
      {posts.map((post) => (
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src={post.featured_media.href} /> */}
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
