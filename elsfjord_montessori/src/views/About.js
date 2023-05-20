import React from "react";

import NavBar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import HeaderImage from "../components/HeaderImage";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import OurTeachers from "../components/OurTeachers";

const About = (props) => {
  return (
    <>
      <NavBar />
      <HeaderImage />
      <AboutUs />
      <Heading>Våre ansatte</Heading>
      <OurTeachers />
      <div className="margin_footer">
        <Footer />
      </div>
    </>
  );
};

export default About;
