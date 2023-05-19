import React from "react";

import NavBar from "../components/Navbar";
import HeaderImage from "../components/HeaderImage";
import Heading from "../components/Heading";
import RecentPosts from "../components/RecentPosts";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";
import WeOffer from "../components/WeOffer";

const Home = (props) => {
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
      </Paragraph>
      <RecentPosts />
      <WeOffer />

      <Footer />
    </>
  );
};

export default Home;
