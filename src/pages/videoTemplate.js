import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Info from "../components/videoInfo";
import PlaylistItem from "../components/playlistItem";
import Spacer from "../components/spacer";

const VideoTemplate = () => {
  const [tab, setTab] = useState(1);

  return (
    <Layout noFooter>
      <SEO title="<<<VIDEO NAME>>>" />
      <section className="video-player">
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            src="https://www.youtube.com/embed/pHxBA2ZbHis"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Spacer space="1" />
      </section>
      <section className="info">
        <ul>
          <li className={`${tab == 1 && "active"}`} onClick={() => setTab(1)}>
            Description
          </li>
          <li className={`${tab == 2 && "active"}`} onClick={() => setTab(2)}>
            My Notes
          </li>
          <li className={`${tab == 3 && "active"}`} onClick={() => setTab(3)}>
            Comments
          </li>
        </ul>
        <Info tab={tab} />
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
