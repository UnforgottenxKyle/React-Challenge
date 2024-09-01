import React from "react";

const Intro = ({ name, about }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{about}</p>
    </>
  );
};

export default Intro;
