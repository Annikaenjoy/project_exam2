import React from "react";

import NavBar from "../components/Navbar";
import AboutHeader from "../components/AboutHeader";
import AboutUs from "../components/AboutUs";
import OurTeachers from "../components/OurTeachers";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const About = (props) => {
  return (
    <>
      <NavBar />
      <AboutHeader />
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
