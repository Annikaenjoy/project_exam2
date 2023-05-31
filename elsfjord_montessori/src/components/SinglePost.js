import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { apiUrl } from "../constants/Api";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SinglePost = (props) => {
  const [post, setPost] = useState(null);
  const [featuredMedia, setFeaturedMedia] = useState(null);

  const http = useAxios();
  let { id } = useParams();
  const getPostUrl = `${apiUrl}wp/v2/posts/${id}?_embed`;

  useEffect(() => {
    async function getPost() {
      try {
        const result = await http.get(getPostUrl);
        console.log(result.data);
        setPost(result.data);

        if (
          result.data._embedded &&
          result.data._embedded["wp:featuredmedia"]
        ) {
          const featuredMediaUrl =
            result.data._embedded["wp:featuredmedia"][0].source_url;
          setFeaturedMedia(featuredMediaUrl);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col key={post.title.rendered} className="post_content" md={10}>
          {" "}
          {featuredMedia && (
            <Image
              className="single_post_img"
              src={featuredMedia}
              alt={post.title.rendered}
              fluid
            />
          )}
          <h2 className="single_post_title">{post.title.rendered}</h2>
          <p className="post_date">{post.date}</p>
          <p>{post.content.rendered}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SinglePost;
