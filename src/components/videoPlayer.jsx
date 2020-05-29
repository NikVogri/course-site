import React from "react";

const videoPlayer = ({ videoId }) => {
  return (
    <div className="video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        title="video"
      ></iframe>
    </div>
  );
};

export default videoPlayer;
