import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import AboutMontessori from "../components/AboutMontessori";

const Montessori = (props) => {
  return (
    <div className="background">
      <NavBar />
      <Heading>Om pedagogikken</Heading>
      <AboutMontessori />
      <Footer />
    </div>
  );
};

export default Montessori;
