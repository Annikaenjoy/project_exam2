import React from "react";

import NavBar from "../components/Navbar";
import HeaderImage from "../components/HeaderImage";
import Heading from "../components/Heading";
import RecentPosts from "../components/RecentPosts";
import Footer from "../components/Footer";
import WeOffer from "../components/WeOffer";
import ApplySection from "../components/ApplySection";
import Intro from "../components/Intro";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <HeaderImage />
      <Heading>Velkommen til Elsfjord Montessoriskole</Heading>
      <Intro />
      <RecentPosts />
      <WeOffer />
      <ApplySection />
      <Footer />
    </>
  );
};

export default Home;
