import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

import Footer from "../components/Footer";
import CreatePost from "../components/dashboard/CreatePost";

const Dashboard = (props) => {
  return (
    <>
      <Navbar />
      <Heading>Dashboard</Heading>
      <CreatePost />
      <Footer />
    </>
  );
};

export default Dashboard;
