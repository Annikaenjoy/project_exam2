import React from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import AboutMontessori from "../components/AboutMontessori";

const Montessori = (props) => {
  return (
    <>
      <NavBar />
      <Heading>Om pedagogikken</Heading>
      <AboutMontessori />
      <Footer />
    </>
  );
};

export default Montessori;
