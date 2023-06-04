import React from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const Admin = (props) => {
  return (
    <div className="background">
      <NavBar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Admin;
