import React from "react";
import placeholderImg from "../images/placeholder-card-img.png";
import creatorPlaceholder from "../images/creator-placeholder.png";

const cardlist = ({ data, rating, click }) => {
  return (
    <div
      className={`card-simple card-xlg-list ${data.new ? "card-new" : ""}`}
      onClick={() => click(data)}
    >
      <img src={`${data.courseImage.file.url}`} alt={data.courseTitle} />
      <div className="card-info">
        <h3 className={`${data.courseTitle.length >= 76 ? "text-sm" : ""}`}>
          {data.courseTitle}
        </h3>
        <p>
          {data.courseDescription.courseDescription.length >= 225
            ? `${data.courseDescription.courseDescription.substring(
                225,
                -1
              )}...`
            : data.courseDescription.courseDescription}
        </p>
        <div className="card-rating">
          <span className="card-rating-rating">
            {data.rating % 2 === 0
              ? `${data.rating}.0`
              : // : `${Math.ceil(data.rating)}.0`}
                `4.0`}
          </span>
          {rating}
          <span className="card-rating-count">{data.ratingCount} votes</span>
          <div className="card-details">
            <span>{data.courseLength} total hours</span>
            {data.coursePlaylist && (
              <span>
                {data.coursePlaylist.length > 1
                  ? `${data.coursePlaylist.length} leactures`
                  : "1 leacture"}
              </span>
            )}
            <span>{data.level}</span>
          </div>
        </div>
        <div className="card-rating-footer">
          <img src={`${data.courseAuthorImage.file.url}`} alt="creator" />
          <span>{data.courseAuthor}</span>
        </div>
      </div>
    </div>
  );
};

export default cardlist;
