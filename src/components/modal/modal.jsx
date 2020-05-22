import React from "react";

import Backdrop from "./backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

const Modal = ({ children, show, hideModal, className }) => {
  return (
    <>
      <Backdrop hideModal={hideModal} show={show} />
      <div
        className={`modal ${show ? "show" : "hidden"} ${
          className ? className : ""
        }`}
      >
        <button className="close-modal btn-reset" onClick={hideModal}>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
