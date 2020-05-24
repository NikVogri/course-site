import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";

import placeholderImg from "../images/placeholder-card-img.png";
import creatorPlaceholder from "../images/creator-placeholder.png";

const card = ({ size, image, alt, text, link, course }) => {
  if (size === "xlg" && course) {
    const {
      img,
      title,
      description,
      length,
      leactures,
      level,
      rating,
      ratingCount,
      creator,
      creatorImg,
    } = course;
    let stars = [];
    for (let i = 1; i <= Math.ceil(rating); i++) {
      stars.push(
        <FontAwesomeIcon className="card-rating-star" icon={starFull} />
      );
    }

    for (let i = 1; i <= 5 - Math.ceil(rating); i++) {
      stars.push(
        <FontAwesomeIcon className="card-rating-star" icon={starEmpty} />
      );
    }

    return (
      <Link to={link ? link : text}>
        <div className={`card-simple card-xlg`}>
          <img src={placeholderImg} alt={alt} />
          <div className="card-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-details">
              <span>{length} total hours</span>
              <span>{leactures} leactures</span>
              <span>{level}</span>
            </div>
            <div className="card-rating">
              <span className="card-rating-rating">
                {rating % 2 === 0 ? `${rating}.0` : `${Math.ceil(rating)}.0`}
              </span>
              {stars}
              <span className="card-rating-count">{ratingCount} votes</span>
            </div>
          </div>
          <div className="card-rating-footer">
            <img src={creatorPlaceholder} alt="creator" />
            <span>{creator}</span>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link to={link ? link : text}>
        <div
          className={`card-simple ${
            size && size === "lg" ? "card-lg" : "card-sm"
          }`}
        >
          <img src={image} alt={alt} />
          {text && <p>{text}</p>}
        </div>
      </Link>
    );
  }
};

export default card;
