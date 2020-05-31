import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";

import placeholderImg from "../images/placeholder-card-img.png";
import creatorPlaceholder from "../images/creator-placeholder.png";

//
import CardTypeList from "../components/cardtypelist";
import CardTypeGrid from "../components/cardtypegrid";

const card = ({
  course,
  click,
  list,
  className,
  link,
  text,
  alt,
  image,
  size,
}) => {
  if (size === "xlg" && course) {
    let stars = [];
    for (let i = 1; i <= Math.ceil(4); i++) {
      stars.push(
        <FontAwesomeIcon
          key={i + 10}
          className="card-rating-star"
          icon={starFull}
        />
      );
    }

    for (let i = 1; i <= 5 - Math.ceil(4); i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          className="card-rating-star"
          icon={starEmpty}
        />
      );
    }
    if (list) {
      return (
        <CardTypeList
          click={data => click(data)}
          data={course}
          rating={stars}
        />
      );
    } else {
      return (
        <CardTypeGrid
          click={data => click(data)}
          data={course}
          rating={stars}
        />
      );
    }
  } else {
    return (
      <Link to={link ? link : text}>
        <div
          className={`card-simple ${
            size && size === "lg" ? "card-lg" : "card-sm"
          } ${className ? className : ""}`}
        >
          <img src={image} alt={alt} />
          {text && <p>{text}</p>}
        </div>
      </Link>
    );
  }
};

export default card;
