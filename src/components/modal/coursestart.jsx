import React from "react";
import { Link } from "gatsby";

const coursestart = ({
  img,
  title,
  description,
  slug,
  addToUserCourses,
  id,
}) => {
  return (
    <div className="course-start-modal">
      <img src={img} alt="course image" />
      <div className="course-start-info">
        <h3>{title}</h3>
        <p> {description}</p>

        <button
          className="course-start-btn"
          to={`/course/${slug}`}
          onClick={() => addToUserCourses(id, slug)}
        >
          START
        </button>
        <p className="notification">
          Please note, this course is not created by Freecourso. If you are the
          owner and have any problems with us using your content please,
          <Link to="/contact"> contact us!</Link>
        </p>
      </div>
    </div>
  );
};

export default coursestart;
