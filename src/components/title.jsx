import React from "react";

import Spacer from "./spacer";

const title = ({ title, subtitle }) => {
  return (
    <>
      <Spacer space="2" />
      <div className="title-container">
        <h2>{title}</h2>
        {subtitle && <span>{subtitle}</span>}
      </div>
      <Spacer space="1" />
    </>
  );
};

export default title;
