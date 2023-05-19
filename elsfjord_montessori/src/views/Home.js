import React from "react";

import NavBar from "../components/Navbar";
import HeaderImage from "../components/HeaderImage";
import Heading from "../components/Heading";
import RecentPosts from "../components/RecentPosts";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <HeaderImage />
      <Heading>Velkommen til Elsfjord Montessoriskole</Heading>
      <RecentPosts />
      <Footer />
    </>
  );
};

export default Home;
