import React from "react";

const VideoInfo = ({ tab, collapse }) => {
  return (
    <div className={`info-wrapper ${collapse ? "collapsed" : "show"}`}>
      {tab === 1 && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pellentesque aliquet sapien, sed dictum mi pellentesque ut. Quisque et
          velit gravida ipsum pulvinar euismod. Ut facilisis varius sem, at
          feugiat tortor aliquet et. Vestibulum congue molestie tellus, a
          facilisis dolor tincidunt a.
        </p>
      )}
      {tab === 2 && <p>My Notes</p>}
      {tab === 3 && <p>Comments</p>}
    </div>
  );
};

export default VideoInfo;