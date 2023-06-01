import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import CreatePost from "../components/dashboard/CreatePost";

const Dashboard = (props) => {
  return (
    <div className="background">
      <Navbar />
      <Heading>Dashboard</Heading>
      <CreatePost />
      <Footer />
    </div>
  );
};

export default Dashboard;
