import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = (props) => {
  let navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/omoss");
  };
  return (
    <>
      <p className="intro">
        Elsfjord Montessoriskole er en friskole helt nord i Vefsn. Her har vi
        tilgang til både fjell, skog, strand og fjære. Skolen ligger «vegg i
        vegg» med barnehagen, slik at barna får en trygg overgang fra barnehage
        til skole. Her har vi fokus på trivsel, kvalitet, og et godt
        læringsmiljø, hvor alle barn er velkommen, også de som tilhører en annen
        skolekrets enn Elsfjord og omegn.
      </p>{" "}
      <button className="about_btn" onClick={navigateAbout}>
        Les mer om oss
      </button>
    </>
  );
};

export default Intro;
