import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Info from "../components/videoInfo";
import PlaylistItem from "../components/playlistItem";
import PlaylistQuiz from "../components/playlistQuiz";
import Spacer from "../components/spacer";
import VideoPlayer from "../components/videoPlayer";
import Quiz from "../components/quiz";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CourseTemplate = ({ location, pageContext: { data } }) => {
  const [tab, setTab] = useState(1);
  const [collapse, setCollapse] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { state = {} } = location;

  useEffect(() => {
    if (!state || !state.videoId) {
      setVideoId(data.coursePlaylist[0].id);
    } else if (state || state.videoId) {
      setVideoId(state.videoId);
    }
  }, [state]);

  let quizId = "test";

  const collapseHandler = () => {
    setCollapse(!collapse);
  };

  const tabHandler = tab => {
    setCollapse(false);
    setTab(tab);
  };

  return (
    <Layout noFooter className="video-wrapper">
      <SEO title={`${data && data.courseTitle}`} />
      <section className="content-wrapper">
        {videoId && <VideoPlayer videoId={videoId} />}
        {/* {quizId && <Quiz quizId={quizId} />} */}
        <Spacer space="1" />
        <div className="info">
          <ul>
            <li className="icon-collapse">
              {collapse ? (
                <FontAwesomeIcon
                  onClick={() => setCollapse(false)}
                  icon={faChevronDown}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => setCollapse(true)}
                  icon={faChevronUp}
                />
              )}
            </li>
            <li className={`${tab === 1 && "active"}`}>
              <button onClick={() => tabHandler(1)} className="btn-reset">
                Description
              </button>
            </li>
            <li className={`${tab === 2 && "active"}`}>
              <button onClick={() => tabHandler(2)} className="btn-reset">
                My Notes
              </button>
            </li>
            <li className={`${tab === 3 && "active"}`}>
              <button onClick={() => tabHandler(3)} className="btn-reset">
                Comments
              </button>
            </li>
          </ul>
          <Info
            tab={tab}
            handleCollapse={collapseHandler}
            collapse={collapse}
          />
        </div>
      </section>
      <section className="playlist">
        {data &&
          data.coursePlaylist.map(content => {
            return (
              <PlaylistItem
                url={location.pathname.split("/")[2]}
                title={content.name || content.courseTitle}
                videoId={content.id}
                active={videoId === content.id}
                key={content.id}
              />
            );
          })}
      </section>
    </Layout>
  );
};

export default CourseTemplate;
