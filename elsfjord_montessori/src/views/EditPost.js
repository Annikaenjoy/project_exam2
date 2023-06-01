import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Edit from "../components/dashboard/Edit";

const EditPost = (props) => {
  return (
    <>
      <div className="background">
        <Navbar />
        <Heading>Rediger innlegg</Heading>
        <Edit />
        <Footer />
      </div>
    </>
  );
};

export default EditPost;
