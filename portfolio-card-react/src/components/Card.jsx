import React from "react";

const Card = ({ about, skills1, skills2, skills3, skills4 }) => {
  return (
    <main>
      <div className="card">
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="text">
          <p>{about}</p>
        </div>
        <div className="skills">
          <div className="skills1">{skills1}</div>
          <div className="skills2">{skills2}</div>
          <div className="skills3">{skills3}</div>
          <div className="skills4">{skills4}</div>
        </div>
      </div>
    </main>
  );
};

export default Card;
