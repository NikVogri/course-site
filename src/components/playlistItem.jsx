import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

// redux
import { connect } from "react-redux";
import { userModalToggle } from "../redux/actions/actionCreator";

const PlaylistItem = ({
  active,
  title,
  videoId,
  url,
  addToWatched,
  watchedList,
  token,
  userModalToggle,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(watchedList.includes(videoId));
  }, [watchedList]);

  const checkedHandler = () => {
    if (!token) {
      userModalToggle(true);
    } else {
      setChecked(!checked);
      addToWatched(videoId, checked);
    }
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
            src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
            alt="placeholder"
          />
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapPropsToState = {
  userModalToggle,
};

export default connect(mapStateToProps, mapPropsToState)(PlaylistItem);
