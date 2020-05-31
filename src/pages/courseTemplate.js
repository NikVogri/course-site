import React, { useState } from "react";
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

// const tempVideoData = [
//   {
//     id: 1,
//     videoId: "XBj_le81sAc",
//     title:
//       "1: Introduction To PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
//   },
//   {
//     id: 2,
//     videoId: "U10yvfIStx8",
//     title:
//       "2: Basic Syntax In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
//   },
//   {
//     id: 4,
//     quizId: "atNrsadwSTB33sd",
//     title: "Test 1: Basics",
//     questions: [
//       {
//         question: "What is PHP?",
//         correctAnswer: "Server language",
//         answers: [
//           "Front end language",
//           "Server side language",
//           "Piece of code that users run on their machine",
//         ],
//       },
//       {
//         question: "What is a local server?",
//         correctAnswer: "Server that runs on your machine",
//         answers: [
//           "Server that runs on your machine",
//           "Server that runs on your ISP's servers ",
//           "Server that runs on the cloud",
//         ],
//       },
//       {
//         question: "Why do we install packages like XAMPP?",
//         correctAnswer: "To create a local PHP server",
//         answers: [
//           "To use as a template for websites",
//           "To speed up your computer",
//           "To create a local PHP server",
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     videoId: "atNrwSTB3-c",
//     title:
//       "3: Scalar Data Types In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
//   },
//   {
//     id: 7,
//     quizId: "atNrsadwSTBf33sd",
//     title: "Test 2: Code",
//     questions: [
//       {
//         question: "Which delimiters are used to define PHP server script?",
//         correctAnswer: "<?php...?>",
//         answers: [
//           "<?php>...</?>",
//           "<script>...</script>",
//           "<?php...?>",
//           "<php>...</>",
//         ],
//       },
//       {
//         question: "Which symbol do variables start with?",
//         correctAnswer: "$",
//         answers: ["%", "!", "&", "#", "$"],
//       },
//       {
//         question: "All files need an extension, which extension does PHP use?",
//         correctAnswer: ".PHP",
//         answers: [".PHP", ".php", ".p", ".script"],
//       },
//       {
//         question: "All files need an extension, which extension does PHP use?",
//         correctAnswer: ".PHP",
//         answers: [".PHP", ".php", ".p", ".script"],
//       },
//       {
//         question: "Which is a scalar type?",
//         correctAnswer: "String, Integer, Float, Boolean",
//         answers: [
//           "String, Integer, Float, Boolean",
//           "Array, Object, Callable, Iterable",
//           "Resource, NULL",
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     videoId: "DiEfNQsapbc",
//     title:
//       "4: Variables In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
//   },
//   {
//     id: 6,
//     videoId: "WPYCJg9OSq4",
//     title:
//       "5: Expressions in PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
//   },
//   {
//     id: 8,
//     videoId: "dx7dO-pkGKg",
//     title:
//       "6: Operators In PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
//   },
// ];

const CourseTemplate = ({ location, pathContext }) => {
  const [tab, setTab] = useState(1);
  const [collapse, setCollapse] = useState(false);

  let videoId;
  if (!location.state.videoId) {
    videoId = pathContext.data.coursePlaylist[0].id;
  } else {
    videoId = location.state.videoId;
  }

  let quizId = "test";

  console.log(pathContext);

  const collapseHandler = () => {
    setCollapse(!collapse);
  };

  const tabHandler = tab => {
    setCollapse(false);
    setTab(tab);
  };

  return (
    <Layout noFooter className="video-wrapper">
      <SEO title="<<<VIDEO NAME>>>" />
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
        {pathContext.data.coursePlaylist.map(content => {
          return (
            <PlaylistItem
              title={content.name}
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
