import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { apiUrl } from "../constants/Api";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SinglePost = (props) => {
  const [post, setPost] = useState([]);

  const http = useAxios();

  let { id } = useParams();

  const getPostUrl = apiUrl + `wp/v2/posts/${id}`;

  useEffect(() => {
    async function getPost() {
      try {
        const result = await http.get(getPostUrl);

        console.log(result.data);
        setPost(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, []);
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md={10}>
            {/* <h2>{post.title.rendered}</h2>
            <p>{post.date}</p>
            <p>{post.content.rendered}</p> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SinglePost;
