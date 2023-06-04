import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <>
      <div className={className}>
        {" "}
        <p>{children}</p>
      </div>
    </>
  );
};

export default Paragraph;
