import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Images
import TallMaterialer from "../assets/img/TallMaterialer.jpg";

const WeOffer = () => {
  return (
    <>
      <Container fluid className="section_container1">
        <Row className="justify-content-center align-items-center">
          <Col xs={10} lg={6}>
            <h2>Vi tilbyr:</h2>
            <p>
              Flinke lærere, og høy lærertetthet, slik at ditt barn blir sett,
              og får den oppfølgingen ditt barn trenger for å lykkes. Barna
              starter dagen med felles frokost. Dette gir barna en god start på
              dagen. De får mulighet til å være sosiale, og alle får spist god
              mat, før de begynner skolearbeidet.
            </p>
            <p>
              1. - 7. klasse - ingen skolepenger, kun 400kr per mnd i
              kostpenger, som dekker begge måltider per dag.
            </p>
            <p>
              Skoledagen varer fra 08.30-15.00. (Bussen kommer 08.20, og henter
              15.20) Det er felles frokost og lunsj for alle elevene, hver dag.
              Vi har en litt lengre skoledag og fri hver fredag. Vi er også en
              leksefri skole, så når det er fri, så er det fri.
            </p>
          </Col>
          <Col className="section_col" xs={10} lg={6}>
            <img className="section_img" src={TallMaterialer} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeOffer;
