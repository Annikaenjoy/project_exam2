import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Vegard from "../assets/img/vegardengoy.jpg";

const OurTeachers = (props) => {
  return (
    <>
      <Container className="section_container">
        <Row className="justify-content-center align-items-center">
          <Col className="teacher_col" xs={10} lg={5}>
            <Image className="profile_img" src={Vegard} />
            <div className="profile_info">
              {" "}
              <h3>Ida Helen Fredriksen</h3>
              <h4>Montessoripedagog</h4>
              <p>Telefon: 472 76 509</p>
              <p>Epost: ida@elsfjordmontessori.no</p>
            </div>
          </Col>
          <Col className="teacher_col" xs={10} lg={5}>
            <Image className="profile_img" src={Vegard} />

            <div className="profile_info">
              <h3>Tanja Vik Wassmo</h3>
              <h4>Montessoripedagog</h4>

              <p>Telefon: 473 96 495</p>
              <p>Epost: tanja@elsfjordmontessori.no</p>
            </div>
          </Col>
          <Col className="teacher_col" xs={10} lg={5}>
            <Image className="profile_img" src={Vegard} />

            <div className="profile_info">
              <h3>Vegard Henriksen Engøy</h3>
              <h4>Lærer</h4>

              <p>Telefon: 907 87 977</p>
              <p>Epost: vegard@elsfjordmontessori.no</p>
            </div>
          </Col>
          <Col className="teacher_col" xs={10} lg={5}>
            <Image className="profile_img" src={Vegard} />

            <div className="profile_info">
              <h3>Kjetil Fjeldseth</h3>
              <h4>Assistent</h4>
              <p>Telefon: 472 76 509</p>
              <p>Epost: kjetil@elsfjordmontessori.no</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurTeachers;
