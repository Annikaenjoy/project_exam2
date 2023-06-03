import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Images
import Perler from "../assets/img/perlematerial_web.jpg";
import Heading from "./Heading";
const Gallery = (props) => {
  return (
    <>
      <Container className="gallery_container" fluid>
        <Heading>Galleri</Heading>
        <Row>
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>
        </Row>
        <Row>
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={Perler} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
