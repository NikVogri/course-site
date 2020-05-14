import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Info from "../components/videoInfo";
import PlaylistItem from "../components/playlistItem";
import Spacer from "../components/spacer";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const tempVideoData = [
  {
    id: 1,
    videoId: "XBj_le81sAc",
    title:
      "1: Introduction To PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
  },
  {
    id: 2,
    videoId: "U10yvfIStx8",
    title:
      "2: Basic Syntax In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
  },
  {
    id: 3,
    videoId: "atNrwSTB3-c",
    title:
      "3: Scalar Data Types In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
  },
  {
    id: 4,
    videoId: "DiEfNQsapbc",
    title:
      "4: Variables In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
  },
  {
    id: 5,
    videoId: "WPYCJg9OSq4",
    title:
      "5: Expressions in PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
  },
  {
    id: 6,
    videoId: "dx7dO-pkGKg",
    title:
      "6: Operators In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
  },
];

const VideoTemplate = ({ location }) => {
  const [tab, setTab] = useState(1);
  const [collapse, setCollapse] = useState(false);
  const { videoId } = location.state;

  const collapseHandler = () => {
    setCollapse(!collapse);
  };

  const tabHandler = tab => {
    setCollapse(false);
    setTab(tab);
  };

  return (
    <Layout noFooter>
      <SEO title="<<<VIDEO NAME>>>" />
      <section className="video-player">
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
        <Spacer space="1" />
      </section>
      <section className="info">
        <ul>
          <li>
            {collapse ? (
              <FontAwesomeIcon
                className="icon-collapse"
                onClick={() => setCollapse(false)}
                icon={faChevronDown}
              />
            ) : (
              <FontAwesomeIcon
                className="icon-collapse"
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
        <Info tab={tab} handleCollapse={collapseHandler} collapse={collapse} />
      </section>
      <section className="playlist">
        {tempVideoData &&
          tempVideoData.map(content => (
            <PlaylistItem
              title={content.title}
              videoId={content.videoId}
              active={videoId === content.videoId}
              key={content.id}
            />
          ))}
      </section>
    </Layout>
  );
};

export default VideoTemplate;
