import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SinglePost from "../components/SinglePost";

const Post = (props) => {
  return (
    <div className="background">
      <Navbar />
      <SinglePost />
      <Footer />
    </div>
  );
};

export default Post;
