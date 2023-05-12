import React from "react";

import NavBar from "../components/Navbar";
import HeaderImage from "../components/HeaderImage";
import Heading from "../components/Heading";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <HeaderImage />
      <Heading>Velkommen til Elsfjord Montessoriskole</Heading>
    </>
  );
};

export default Home;
