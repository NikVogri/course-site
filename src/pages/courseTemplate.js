import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Info from "../components/videoInfo";
// import PlaylistQuiz from "../components/playlistQuiz";
// import Quiz from "../components/quiz";
import VideoPlayer from "../components/videoPlayer";
import Playlist from "../components/playlist";
import Modal from "../components/modal/modal";

// redux
import { connect } from "react-redux";
import {
  getWatchedList,
  userModalToggle,
} from "../redux/actions/actionCreator";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getCurrentUser } from "../firebase/util";

const CourseTemplate = ({
  location,
  pageContext: { data },
  getWatchedList,
  userId,
  userModal,
  userModalToggle,
}) => {
  const [videoPlaylist, setVideoPlaylist] = useState([]);
  const [tab, setTab] = useState(1);
  const [collapse, setCollapse] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [shrinkPlaylist, setShrinkPlaylist] = useState(false);
  const [courseId, setCourseId] = useState("");
  const { state = {} } = location;

  useEffect(() => {
    console.log(data);
    setCourseId(data.id);
    setVideoPlaylist(data.coursePlaylist);
    if (!state || !state.videoId) {
      setVideoId(data.coursePlaylist[0].id);
    } else if (state || state.videoId) {
      setVideoId(state.videoId);
    }
  }, [state]);

  // run this as soon as user is logged in
  useEffect(() => {
    watchedListHandler();
  }, [userId]);

  let quizId = "test";

  const watchedListHandler = async () => {
    await getWatchedList(data.id, userId);
  };

  const collapseHandler = () => {
    setCollapse(!collapse);
  };

  const tabHandler = tab => {
    setCollapse(false);
    setTab(tab);
  };

  const playlistHandler = () => {
    setShrinkPlaylist(!shrinkPlaylist);
  };

  return (
    <Layout noFooter className="video-wrapper">
      <SEO title={`${data && data.courseTitle}`} />
      <Modal show={userModal} hideModal={() => userModalToggle(false)}>
        IF YOU WANT TO SAVE YOUR PROGRESS, PLEASE LOGIN OR CREATE NEW ACCOUNT
      </Modal>
      <section className="content-wrapper">
        {videoId && <VideoPlayer videoId={videoId} />}
        {/* {quizId && <Quiz quizId={quizId} />} */}
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
            data={data}
          />
        </div>
      </section>
      {videoPlaylist && (
        <Playlist
          playlist={videoPlaylist}
          currentVideo={videoId}
          url={location.pathname.split("/")[2]}
          togglePlaylist={playlistHandler}
          shrink={shrinkPlaylist}
          courseId={courseId}
        />
      )}
    </Layout>
  );
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  userModal: state.modal.userModal,
});

const mapDispatchToProps = {
  getWatchedList,
  getCurrentUser,
  userModalToggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseTemplate);
