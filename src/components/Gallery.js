import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Components
import Heading from "./Heading";

// Images
import Leafs from "../assets/img/Leafs_web.jpg";
import Learning from "../assets/img/Learning_web.jpg";
import LeafPainting from "../assets/img/Leaf_painting_web.jpg";
import Math from "../assets/img/Math_numbers_web.jpg";
import Insects from "../assets/img/Playing_insects_web.jpg";
import NaturalMaterials from "../assets/img/Natural_materials_web.jpg";
import Magnifying from "../assets/img/Magnifying_nature_web.jpg";
import Drawing from "../assets/img/Drawing_plant_web.jpg";

const Gallery = (props) => {
  return (
    <>
      <Container className="gallery_container" fluid>
        <Heading>Galleri</Heading>
        <Row>
          <Col className="gallery_col" md={3}>
            <Image src={Leafs} fluid />
          </Col>
          <Col className="gallery_col" md={3}>
            <Image src={Learning} fluid />
          </Col>
          <Col className="gallery_col" md={3}>
            <Image src={LeafPainting} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={Math} fluid />
          </Col>
        </Row>
        <Row>
          <Col className="gallery_col" md={3}>
            <Image src={Insects} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={NaturalMaterials} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={Drawing} fluid />
          </Col>{" "}
          <Col className="gallery_col" md={3}>
            <Image src={Magnifying} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
