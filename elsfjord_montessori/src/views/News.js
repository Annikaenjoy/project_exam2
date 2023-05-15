import React from "react";

import NavBar from "../components/Navbar";
import Heading from "../components/Heading";
import BlogPosts from "../components/BlogPosts";

const News = (props) => {
  return (
    <>
      <NavBar />
      <Heading>Aktuelt</Heading>
      <BlogPosts />
    </>
  );
};

export default News;
