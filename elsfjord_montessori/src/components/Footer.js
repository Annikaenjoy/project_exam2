import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// Icons
import { FaFacebookF } from "react-icons/fa";

const Footer = (props) => {
  return (
    <>
      <footer>
        <Container fluid>
          <Row>
            <Col xs={6} md={{ span: 3, offset: 1 }}>
              <h5>Om oss</h5>
              <p>
                Elsfjord Montessori skole ligger i ei lita bygd, helt nord i
                Vefsn Kommune. Her tilbyr vi grunnskole med Montessori
                pedagogisk retning til alle barn fra 1.-7. klassetrinn.
              </p>
              <FaFacebookF className="fa_icon1" />
              <h5>Elsfjord Montessoriskole SA</h5>
              <p>Design og utvikling av Annika Engøy</p>
            </Col>

            <Col xs={6} md={{ span: 3, offset: 1 }}>
              <h5>Snarveier</h5>
              <Link className="footer_link" to="/omoss">
                Om oss
              </Link>
              <Link className="footer_link" to="/montessori">
                Montessori
              </Link>
              <Link className="footer_link" to="/skoleplass">
                Skoleplass
              </Link>
            </Col>
            <Col xs={12} md={{ span: 3, offset: 1 }}>
              <h5>Kontakt</h5>

              <address>
                <h6 className="contact_links">Tlf:</h6>{" "}
                <a href="tel:+4741762496" className="contact_links">
                  417 62 496
                </a>
                <br />
                <h6 className="contact_links">Epost:</h6>{" "}
                <a
                  href="mailto:post@elsfjordmontessori.com"
                  className="contact_links"
                >
                  post@elsfjordmontessori.com
                </a>
                <h6 className="contact_adress">Adresse:</h6>
                <p>
                  Elsfjordvegen 28, <br />
                  8672, Elsfjord.
                </p>
              </address>
            </Col>
          </Row>
        </Container>
        <Container fluid className="line">
          <Row>
            <Col className="copyright">
              <small>Elsfjord Montessoriskole © 2023</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
