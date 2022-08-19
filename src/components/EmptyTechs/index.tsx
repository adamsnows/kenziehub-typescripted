import React from "react";
import { GiTechnoHeart } from "react-icons/gi";

const EmptyTechs = () => {
  return (
    <div className="future-container">
      <h2 className="future-description">
        Adicione uma nova tecnologia!
        <GiTechnoHeart className="icon" />
      </h2>
    </div>
  );
};

export default EmptyTechs;
