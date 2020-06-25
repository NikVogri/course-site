import React from "react";

// svgs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import { changeDisplayAsCards } from "../redux/actions/actionCreator";

const viewas = ({ displayAs, changeDisplayAsCards }) => {
  return (
    <div className="view-as">
      <span>View as:</span>
      {displayAs === "list" ? (
        <FontAwesomeIcon icon={faList} />
      ) : (
        <FontAwesomeIcon icon={faTh} />
      )}
      <div className="view-as-dropdown">
        <button
          className="view-as-dropdown-grid btn-reset"
          onClick={() => changeDisplayAsCards("grid")}
        >
          <FontAwesomeIcon icon={faTh} />
          <span>GRID</span>
        </button>
        <button
          className="view-as-dropdown-list btn-reset"
          onClick={() => changeDisplayAsCards("list")}
        >
          <FontAwesomeIcon icon={faList} />
          <span>LIST</span>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeDisplayAsCards,
};

const mapStateToProps = state => ({
  displayAs: state.course.displayAs,
});
export default connect(mapStateToProps, mapDispatchToProps)(viewas);
