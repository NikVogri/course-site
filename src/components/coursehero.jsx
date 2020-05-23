import React from "react";

const coursehero = ({ title, subtitle, img }) => {
  return (
    <section className="course-hero">
      <div className="course-hero-inner">
        <div className="left">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>
        <img src={img} alt={title} />
      </div>
    </section>
  );
};

export default coursehero;
