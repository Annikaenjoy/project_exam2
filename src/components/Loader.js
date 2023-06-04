import { BoxesLoader } from "react-awesome-loaders";
export const BoxesLoaderComponent = () => {
  return (
    <>
      <BoxesLoader
        boxColor={"#93278F"}
        shadowColor={"#dbe3f4"}
        style={{ marginTop: "20px", marginBottom: "20px" }}
        desktopSize={"100px"}
        mobileSize={"72px"}
      />
    </>
  );
};
