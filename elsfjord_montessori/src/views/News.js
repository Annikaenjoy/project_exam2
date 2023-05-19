import React from "react";

import NavBar from "../components/Navbar";
import Heading from "../components/Heading";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";

const News = (props) => {
  return (
    <>
      <NavBar />
      <Heading>Aktuelt</Heading>
      <BlogPosts />
      <Footer />
    </>
  );
};

export default News;
