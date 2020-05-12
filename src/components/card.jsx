import React from "react";
import { Link } from "gatsby";

const card = ({ size, image, alt, text, link }) => {
  return (
    <Link to={link ? link : text}>
      <div
        className={`card-simple ${
          size && size == "lg" ? "card-lg" : "card-sm"
        }`}
      >
        <img src={image} alt={alt} />
        {text && <p>{text}</p>}
      </div>
    </Link>
  );
};

export default card;
