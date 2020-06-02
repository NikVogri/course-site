import React from "react";
import PlaylistItem from "./playlistItem";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const playlist = ({ playlist, currentVideo, togglePlaylist, url, shrink }) => {
  console.log(playlist);
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
            />
          );
        })}
    </section>
  );
};

export default playlist;
