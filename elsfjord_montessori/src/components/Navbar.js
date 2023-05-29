import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import { RiAdminLine } from "react-icons/ri";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Images
import Logo from "../assets/img/Logo_farget.png";

const NavBar = (props) => {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

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
              <NavLink className="nav_link" to="/">
                Forside
              </NavLink>{" "}
              <NavLink className="nav_link" to="/omoss">
                Om oss
              </NavLink>
              <NavLink className="nav_link" to="/montessori">
                Montessori
              </NavLink>
              <NavLink className="nav_link" to="/aktuelt">
                Aktuelt
              </NavLink>
              <NavLink className="nav_link" to="/skoleplass">
                Skoleplass
              </NavLink>
              <NavLink className="nav_link" to="/kontakt">
                Kontakt
              </NavLink>
              {auth ? (
                <>
                  <NavLink className="nav_link" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <button className="logout" type="button" onClick={logout}>
                    Logg ut
                  </button>
                </>
              ) : (
                <NavLink className="nav_link" to="/admin">
                  <RiAdminLine className="ri_icon1" />
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
