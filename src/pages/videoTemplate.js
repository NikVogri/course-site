import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Info from "../components/videoInfo";
import PlaylistItem from "../components/playlistItem";
import Spacer from "../components/spacer";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const VideoTemplate = () => {
  const [tab, setTab] = useState(1);
  const [collapse, setCollapse] = useState(false);

  const collapseHandler = () => {
    setCollapse(!collapse);
  };

  return (
    <Layout noFooter>
      <SEO title="<<<VIDEO NAME>>>" />
      <section className="video-player">
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/pHxBA2ZbHis"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
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
            <button onClick={() => setTab(1)} className="btn-reset">
              Description
            </button>
          </li>
          <li className={`${tab === 2 && "active"}`}>
            <button onClick={() => setTab(2)} className="btn-reset">
              My Notes
            </button>
          </li>
          <li className={`${tab === 3 && "active"}`}>
            <button onClick={() => setTab(3)} className="btn-reset">
              Comments
            </button>
          </li>
        </ul>
        <Info tab={tab} handleCollapse={collapseHandler} collapse={collapse} />
      </section>
      <section className="playlist">
        <PlaylistItem />
        <PlaylistItem active />
        <PlaylistItem />
      </section>
    </Layout>
  );
};

export default VideoTemplate;
