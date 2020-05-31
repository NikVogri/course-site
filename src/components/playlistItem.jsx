import React from "react";
import { Link } from "gatsby";

const playlistItem = ({ active, title, videoId }) => {
  return (
    <Link to={"/course/php-tutorial-php-for-begginers"} state={{ videoId }}>
      <div className={`playlist-item ${active ? "active" : ""}`}>
        <input type="checkbox" />
        <img
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt="placeholder"
        />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default playlistItem;
