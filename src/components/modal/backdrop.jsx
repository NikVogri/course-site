import React from "react";

const Backdrop = ({ hideModal, show }) => {
  return (
    <div
      className={`backdrop ${show ? "show" : "hidden"}`}
      onClick={hideModal}
    ></div>
  );
};

export default Backdrop;
