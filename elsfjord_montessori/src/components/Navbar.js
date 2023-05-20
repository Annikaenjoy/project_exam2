import React from "react";
import { Link } from "react-router-dom";

import { RiAdminLine } from "react-icons/ri";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Images
import Logo from "../assets/img/Logo_farget.png";

const NavBar = (props) => {
  return (
    <>
      <Navbar className="navbar" bg="background" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-position ml-auto">
              <Link className="nav_link" to="/">
                Forside
              </Link>{" "}
              <Link className="nav_link" to="/omoss">
                Om oss
              </Link>
              <Link className="nav_link" to="/montessori">
                Montessori
              </Link>
              <Link className="nav_link" to="/news">
                Aktuelt
              </Link>
              <Link className="nav_link" to="/apply">
                Skoleplass
              </Link>
              <Link className="nav_link" to="/kontakt">
                Kontakt
              </Link>
              <Link className="nav_link" to="/admin">
                <RiAdminLine className="ri_icon1" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
