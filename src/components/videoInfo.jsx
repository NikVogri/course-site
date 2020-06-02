import React from "react";

const VideoInfo = ({ tab, collapse, data }) => {
  return (
    <div className={`info-wrapper ${collapse ? "collapsed" : "show"}`}>
      {tab === 1 && (
        <div>{data && data.courseDescription.courseDescription}</div>
      )}
      {tab === 2 && <div>My Notes</div>}
      {tab === 3 && <div>Comments</div>}
    </div>
  );
};

export default VideoInfo;
