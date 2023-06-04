import React from "react";

import NavBar from "../components/Navbar";
import AboutHeader from "../components/AboutHeader";
import AboutUs from "../components/AboutUs";
import OurTeachers from "../components/OurTeachers";
import Footer from "../components/Footer";

const About = (props) => {
  return (
    <>
      <NavBar />
      <AboutHeader />
      <AboutUs />
      <OurTeachers />
      <div className="margin_footer">
        <Footer />
      </div>
    </>
  );
};

export default About;
