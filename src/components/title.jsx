import React from "react";

import Spacer from "./spacer";

const Title = ({ title, subtitle, position }) => {
  return (
    <>
      <Spacer size="sm" />
      <div className={`title-container ${position ? position : ""}`}>
        <h2>{title}</h2>
        {subtitle && <span>{subtitle}</span>}
      </div>
      <Spacer size="sm" />
    </>
  );
};

export default Title;
