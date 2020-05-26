import React from "react";
import placeholderImg from "../../images/placeholder-card-img.png";

const coursestart = ({ data }) => {
  return (
    <div>
      <img src={placeholderImg} alt="" />
      {data.title}
    </div>
  );
};

export default coursestart;
