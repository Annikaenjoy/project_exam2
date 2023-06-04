import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Images
import FingerPainting from "../assets/img/FingerPainting.jpg";

const AboutUs = (props) => {
  return (
    <>
      <Container fluid className="about_container">
        <Row className="justify-content-center align-items-center">
          <Col xs={10} md={6}>
            <h2>Om oss</h2>
            <p>
              Montessoripedagogikken bygger på et syn hvor barnet er i sentrum.
              Et syn der sosial, emosjonell, fysisk og intellektuell utvikling
              anses som like viktige. Her skal barnet både få rom til å være
              selvstendig og klare seg selv, og få lov til å være en viktig
              bidragsyter for fellesskapet. Den voksnes rolle er å veilede og
              tilrettelegge, og gi barnet rom til å prøve og feile. «Hjelp meg å
              gjøre det selv» er et mye brukt sitat fra Maria Montessori.
              Nettopp fordi det sier så mye om det vi ønsker å gjøre.
            </p>
            <p>
              Våre lærere brenner for montessoripedagogikken! De er opptatt av å
              gi ditt barn så god opplæring som mulig! Ditt barn skal være i
              fokus, og ditt barn skal trives! Vi har blide, hyggelige og
              dyktige lærere.
            </p>
          </Col>
          <Col className="section_col" xs={10} md={6}>
            <img className="section_img" src={FingerPainting} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
