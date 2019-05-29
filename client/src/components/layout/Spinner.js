import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        style={{ width: "50px", margin: "auto", display: "block" }}
        alt="loading..."
      />
    </>
  );
};

export default Spinner;
