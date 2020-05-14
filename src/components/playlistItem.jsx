import React from "react";

import Placeholder from "../images/placeholder.png";

const playlistItem = ({ active }) => {
  return (
    <div className={`playlist-item ${active ? "active" : ""}`}>
      <input type="checkbox" />
      <img src={Placeholder} alt="placeholder" />
      <span>
        2: Basic PHP Syntax | PHP Tutorial | PHP For Beginners | Learn PHP
        Programming
      </span>
    </div>
  );
};

export default playlistItem;
