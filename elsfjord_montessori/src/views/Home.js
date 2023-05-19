import React from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/Navbar";
import HeaderImage from "../components/HeaderImage";
import Heading from "../components/Heading";
import RecentPosts from "../components/RecentPosts";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";
import WeOffer from "../components/WeOffer";
import ApplySection from "../components/ApplySection";

const Home = (props) => {
  let navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/omoss");
  };
  return (
    <>
      <NavBar />
      <HeaderImage />
      <Heading>Velkommen til Elsfjord Montessoriskole</Heading>
      <Paragraph className="intro">
        Elsfjord Montessoriskole er en friskole helt nord i Vefsn. Her har vi
        tilgang til både fjell, skog, strand og fjære. Skolen ligger «vegg i
        vegg» med barnehagen, slik at barna får en trygg overgang fra barnehage
        til skole. Her har vi fokus på trivsel, kvalitet, og et godt
        læringsmiljø, hvor alle barn er velkommen, også de som tilhører en annen
        skolekrets enn Elsfjord og omegn.
        <button className="about_btn" onClick={navigateAbout}>
          Les mer om oss
        </button>
      </Paragraph>
      <RecentPosts />
      <WeOffer />
      <ApplySection />
      <Footer />
    </>
  );
};

export default Home;
