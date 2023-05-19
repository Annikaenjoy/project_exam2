import React from "react";
import { useNavigate } from "react-router-dom";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Images
import TallMaterialer from "../assets/img/TallMaterialer.jpg";

const ApplySection = () => {
  let navigate = useNavigate();
  const navigateApply = () => {
    navigate("/apply");
  };
  return (
    <>
      <Container className="section_container">
        <Row className="justify-content-center align-items-center">
          <Col xs={10} md={12} lg={6}>
            <img className="section_img" src={TallMaterialer} />
          </Col>{" "}
          <Col xs={10} md={12} lg={6}>
            <h2 className="h2">Søknad om skoleplass</h2>
            <h3>Søknadsfrist, prosess og antall</h3>
            <p>
              Søknadsfrist til hovedopptak for skoleåret 2023/2024 er 1. mars
              2023. Vi tar i mot søknader etter søknadsfristen til
              hovedopptaket, men de som søker innen fristen vil bli prioritert.
            </p>
            <p>Vi har for tiden plass til 25 elever.</p>
            <p>
              Inntak av elever skjer i henhold til inntaksreglementet fastsatt
              av skolen. Søkere til 1. klasse vil være første prioritet,
              deretter følger 2. klasse, 3. klasse, osv.
            </p>
            <button onClick={navigateApply}>Søk om skoleplass</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ApplySection;
