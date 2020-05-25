import React from "react";

// svgs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const viewas = ({ view, setView }) => {
  return (
    <div className="view-as">
      <span>View as:</span>
      {view === "list" ? (
        <FontAwesomeIcon icon={faList} />
      ) : (
        <FontAwesomeIcon icon={faTh} />
      )}
      <div className="view-as-dropdown">
        <button
          className="view-as-dropdown-grid btn-reset"
          onClick={() => setView("grid")}
        >
          <FontAwesomeIcon icon={faTh} />
          <span>GRID</span>
        </button>
        <button
          className="view-as-dropdown-list btn-reset"
          onClick={() => setView("list")}
        >
          <FontAwesomeIcon icon={faList} />
          <span>LIST</span>
        </button>
      </div>
    </div>
  );
};

export default viewas;
