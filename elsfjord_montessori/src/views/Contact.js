import React from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = (props) => {
  return (
    <div className="background">
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
