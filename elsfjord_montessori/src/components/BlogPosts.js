import React, { useState, useEffect } from "react";
import { apiUrl, postUrl } from "../constants/Api";
import { Link } from "react-router-dom";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { BoxesLoaderComponent } from "../components/Loader";

const newUrl = `${apiUrl}${postUrl}?_embed`;

const BlogPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return <BoxesLoaderComponent />;
  }

  if (isError) {
    return <div>An error occurred when calling the API</div>;
  }

  const filteredPosts = posts.filter((post) =>
    post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col className="search_col" xs={12}>
            <input
              className="searchbar"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Søk etter artikkel"
            />
          </Col>
          {filteredPosts.map((post) => (
            <Col key={post.id} className="blogposts" xs={10} md={3}>
              <Link to={`/post/${post.id}`}>
                <Card className="post_card">
                  <Card.Body>
                    {post._embedded &&
                      post._embedded["wp:featuredmedia"] &&
                      post._embedded["wp:featuredmedia"][0].source_url && (
                        <Card.Img
                          className="post_img"
                          variant="top"
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                        />
                      )}
                    <p className="post_date">{post.date}</p>
                    <Card.Title className="post_title">
                      {post.title.rendered}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogPosts;
