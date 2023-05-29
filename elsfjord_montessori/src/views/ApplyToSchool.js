import React from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";

const ApplyToSchool = (props) => {
  return (
    <div className="background">
      <NavBar />
      <ApplyForm />
      <Footer />
    </div>
  );
};

export default ApplyToSchool;
