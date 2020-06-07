import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const PlaylistItem = ({
  active,
  title,
  videoId,
  url,
  addToWatched,
  watchedList,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(watchedList.includes(videoId));
  }, [watchedList]);

  const checkedHandler = () => {
    setChecked(!checked);
    addToWatched(videoId, checked);
  };

  return (
    <div className={"playlist-item"}>
      <input
        type="checkbox"
        checked={checked}
        title="Watched"
        onChange={checkedHandler}
      />
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

export default PlaylistItem;
