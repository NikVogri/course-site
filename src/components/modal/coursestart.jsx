import React from "react";
import { Link } from "gatsby";

const coursestart = ({ data }) => {
  return (
    <div className="course-start-modal">
      {data.courseImage && (
        <img src={data.courseImage.file.url} alt="course image" />
      )}
      <div className="course-start-info">
        {data.courseTitle && <h3>{data.courseTitle}</h3>}
        {data.courseDescription && (
          <p> {data.courseDescription.courseDescription}</p>
        )}
        <Link
          className="course-start-btn"
          to={`/course/${data.courseSlug}`}
          state={{
            courseVideoLink: data.courseLink,
            courseType: data.courseVideoType,
          }}
        >
          START
        </Link>
        <p className="notification">
          Please note, this course is not created by Freecourso. The creator of
          this course gets all the revenue. If you are the owner and have any
          problems with us using your content please,
          <Link to="/contact"> contact us!</Link>
        </p>
      </div>
    </div>
  );
};

export default coursestart;
