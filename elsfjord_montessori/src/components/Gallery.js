import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Images

const Gallery = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>{" "}
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>{" "}
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>{" "}
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>{" "}
          <Col md={3}>
            <Image src="holder.js/100px250" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
