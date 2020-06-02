import React from "react";
import { Link } from "gatsby";

const playlistItem = ({ active, title, videoId, url }) => {
  return (
    <div className={"playlist-item"}>
      <input type="checkbox" title="Watched" />
      <div className={`playlist-information ${active ? "active" : ""}`}>
        <Link to={`/course/${url}`} state={{ videoId }}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="placeholder"
          />
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
};

export default playlistItem;
