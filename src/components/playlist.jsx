import React from "react";
import PlaylistItem from "./playlistItem";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// redux
import {
  addToWatched,
  removeFromWatched,
} from "../redux/actions/actionCreator";
import { connect } from "react-redux";

const Playlist = ({
  playlist,
  currentVideo,
  togglePlaylist,
  url,
  shrink,
  courseId,
  addToWatched,
  removeFromWatched,
}) => {
  const addToWatchedHandler = async (videoId, remove) => {
    if (remove) {
      await removeFromWatched(courseId, videoId);
    } else {
      await addToWatched(courseId, videoId);
    }
  };

  return (
    <section className={`playlist ${shrink ? "shrink" : ""}`}>
      <button
        onClick={togglePlaylist}
        className="playlist-shrink btn-reset"
        title="Shrink"
      >
        <FontAwesomeIcon
          onClick={() => togglePlaylist(true)}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          onClick={() => togglePlaylist(true)}
          icon={faChevronRight}
        />
      </button>
      {playlist &&
        playlist.map(content => {
          return (
            <PlaylistItem
              url={url}
              title={content.title || content.courseTitle}
              videoId={content.id}
              active={currentVideo === content.id}
              key={content.id}
              addToWatched={addToWatchedHandler}
              watched={false}
            />
          );
        })}
    </section>
  );
};

const mapDispatchToProps = {
  addToWatched,
  removeFromWatched,
};

export default connect(null, mapDispatchToProps)(Playlist);
