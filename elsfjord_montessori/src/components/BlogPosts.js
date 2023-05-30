import React from "react";
import { apiUrl, postUrl } from "../constants/Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          {" "}
          {posts.map((post) => (
            <Col className="blogposts" xs={10} md={3}>
              <Link to={`/post${post.id}`}>
                {" "}
                <Card>
                  <Card.Body>
                    <p>{post.date}</p>
                    <Card.Title key={post.id}>{post.title.rendered}</Card.Title>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogPosts;
