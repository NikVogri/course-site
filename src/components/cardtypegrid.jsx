import React from "react";

const Cardgrid = ({ data, rating, click }) => {
  return (
    <div
      className={`card-simple card-xlg ${data.new ? "card-new" : ""}`}
      onClick={() => click(data)}
    >
      <img src={`${data.courseImage.file.url}`} alt={data.alt} />
      <div className="card-info">
        <h3 className={`${data.courseTitle.length >= 36 ? "" : ""}`}>
          {data.courseTitle.length >= 41
            ? `${data.courseTitle.substring(36, -1)}...`
            : data.courseTitle}
        </h3>
        <p>
          {data.courseDescription.courseDescription.length >= 181
            ? `${data.courseDescription.courseDescription.substring(
                181,
                -1
              )}...`
            : data.courseDescription.courseDescription}
        </p>
        <div className="card-details">
          <span>{data.courseLength} total hours</span>
          <span>
            {data.courseVideoLength > 1
              ? `${data.courseVideoLength} leactures`
              : "1 leacture"}
          </span>
          <span>{data.courseDifficulty}</span>
        </div>
        <div className="card-rating-footer">
          <div className="card-rating">
            <span className="card-rating-rating">
              {data.rating % 2 === 0
                ? `${data.rating}.0`
                : // : `${Math.ceil(data.rating)}.0`}
                  `4.0`}
            </span>
            {rating}
            <span className="card-rating-count">{data.ratingCount} votes</span>
          </div>
          <div className="card-rating-creator">
            <img src={`${data.courseAuthorImage.file.url}`} alt="creator" />
            <span className="card-creator">{data.courseAuthor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardgrid;
