// Componente Section modificado para aceptar un prop 'title'

import React from "react";

const Section = ({ title, text, image, imageStyle, align }) => {
  const sectionClass = align === "left" ? "section-left" : "section-right";

  return (
    <div className={sectionClass}>
      <div className="section-image">
        <img src={image} alt={title} style={imageStyle} />
      </div>
      <div className="section-text">
        <h2>{title}</h2>
        {text}
      </div>
    </div>
  );
};

export default Section;
