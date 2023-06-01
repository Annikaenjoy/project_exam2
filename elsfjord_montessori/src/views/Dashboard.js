import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import CreatePost from "../components/dashboard/CreatePost";
import Edit from "../components/dashboard/Edit";

const Dashboard = (props) => {
  return (
    <div className="background">
      <Navbar />
      <Heading>Dashboard</Heading>
      <CreatePost />
      <Edit />
      <Footer />
    </div>
  );
};

export default Dashboard;
