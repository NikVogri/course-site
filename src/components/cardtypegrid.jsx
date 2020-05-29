import React from "react";
import placeholderImg from "../images/placeholder-card-img.png";
import creatorPlaceholder from "../images/creator-placeholder.png";

const cardgrid = ({ data, rating, click }) => {
  console.log(data);
  return (
    <div
      className={`card-simple card-xlg ${data.new ? "card-new" : ""}`}
      onClick={() => click(data)}
    >
      {/* <img src={placeholderImg} alt={data.alt} /> */}
      <div className="card-info">
        <h3 className={`${data.courseTitle.length >= 37 ? "text-sm" : ""}`}>
          {data.courseTitle.length >= 40
            ? `${data.courseTitle.substring(52, -1)}...`
            : data.courseTitle}
        </h3>
        <p>
          {data.courseDescription.length >= 225
            ? `${data.courseDescription.courseDescription.substring(
                225,
                -1
              )}...`
            : data.courseDescription.courseDescription}
        </p>
        <div className="card-details">
          <span>{data.courseLength} total hours</span>
          {/* <span>{data.leactures}2 leactures</span> */}
          <span>2 leactures</span>
          <span>{data.courseDifficulty}</span>
        </div>
        <div className="card-rating-footer">
          <div className="card-rating">
            <span className="card-rating-rating">
              {data.rating % 2 === 0
                ? `${data.rating}.0`
                : `${Math.ceil(data.rating)}.0`}
            </span>
            {rating}
            <span className="card-rating-count">{data.ratingCount} votes</span>
          </div>
          <div className="card-rating-creator">
            <img src={creatorPlaceholder} alt="creator" />
            <span className="card-creator">{data.courseAuthor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardgrid;
