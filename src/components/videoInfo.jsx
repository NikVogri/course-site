import React from "react";

const VideoInfo = ({ tab, collapse }) => {
  return (
    <div className={`info-wrapper ${collapse ? "collapsed" : "show"}`}>
      {tab === 1 && (
        <div>
          Lorem idivsum dolor sit amet, consectetur adipiscing elit. Donec
          pellentesque aliquet sapien, sed dictum mi pellentesque ut. Quisque et
          velit gravida ipsum pulvinar euismod. Ut facilisis varius sem, at
          feugiat tortor aliquet et. Vestibulum congue molestie tellus, a
          facilisis dolor tincidunt a.
        </div>
      )}
      {tab === 2 && <div>My Notes</div>}
      {tab === 3 && <div>Comments</div>}
    </div>
  );
};

export default VideoInfo;
