import React from "react";
import placeholderImg from "../images/placeholder-card-img.png";
import creatorPlaceholder from "../images/creator-placeholder.png";

const cardlist = ({ data, rating, click }) => {
  return (
    <div
      className={`card-simple card-xlg-list ${data.new ? "card-new" : ""}`}
      onClick={() => click(data)}
    >
      <img src={placeholderImg} alt={data.alt} />
      <div className="card-info">
        <h3 className={`${data.title.length >= 76 ? "text-sm" : ""}`}>
          {data.title}
        </h3>
        <p>
          {data.description.length >= 225
            ? `${data.description.substring(225, -1)}...`
            : data.description}
        </p>
        <div className="card-rating">
          <span className="card-rating-rating">
            {data.rating % 2 === 0
              ? `${data.rating}.0`
              : `${Math.ceil(data.rating)}.0`}
          </span>
          {rating}
          <span className="card-rating-count">{data.ratingCount} votes</span>
          <div className="card-details">
            <span>{data.length} total hours</span>
            <span>{data.leactures} leactures</span>
            <span>{data.level}</span>
          </div>
        </div>
        <div className="card-rating-footer">
          <img src={creatorPlaceholder} alt="creator" />
          <span>{data.creator}</span>
        </div>
      </div>
    </div>
  );
};

export default cardlist;
