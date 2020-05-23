import React from "react";

import Spacer from "./spacer";

const Title = ({ title, subtitle, position }) => {
  return (
    <>
      <Spacer space="2" />
      <div className={`title-container ${position ? position : ""}`}>
        <h2>{title}</h2>
        {subtitle && <span>{subtitle}</span>}
      </div>
      <Spacer space="1" />
    </>
  );
};

export default Title;
