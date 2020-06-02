import React from "react";
import { Link } from "gatsby";

const coursestart = ({ img, title, description, slug, link }) => {
  return (
    <div className="course-start-modal">
      <img src={img} alt="course image" />
      <div className="course-start-info">
        <h3>{title}</h3>
        <p> {description}</p>
        <Link className="course-start-btn" to={`/course/${slug}`}>
          START
        </Link>
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
