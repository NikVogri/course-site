import React from "react";
import placeholderImg from "../../images/placeholder-card-img.png";
import { Link } from "gatsby";

const coursestart = ({ data }) => {
  return (
    <div>
      <img src={placeholderImg} alt="" />
      {data.courseTitle}
      {data.courseSlug}
      <Link
        to={`/course/${data.courseSlug}`}
        state={{
          courseVideoLink: data.courseLink,
          courseType: data.courseVideoType,
        }}
      >
        START
      </Link>
    </div>
  );
};

export default coursestart;
