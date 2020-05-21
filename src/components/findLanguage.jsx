import React, { useState, useEffect } from "react";
import Card from "./card";

// import images for cards
import cssLogo from "../images/languages/css-logo.png";
import htmlLogo from "../images/languages/html-logo.png";
import jsLogo from "../images/languages/js-logo.png";
import vueLogo from "../images/languages/vue-logo.png";
import reactLogo from "../images/languages/react-logo.png";

import pythonLogo from "../images/py-logo.png";
import phpLogo from "../images/languages/php-logo.png";
import nodeLogo from "../images/languages/node-logo.png";
import expressLogo from "../images/languages/express-logo.png";
import javaLogo from "../images/languages/ja-logo.png";
import mongodbLogo from "../images/languages/mongodb-logo.png";

import flutterLogo from "../images/languages/flutter-logo.png";
import reactNativeLogo from "../images/languages/reactNative-logo.png";
import kotlinLogo from "../images/languages/kotlin-logo.png";

import Modal from "./modal/modal";

const selectionFromList = selection => {
  let languages;
  switch (selection) {
    case "front-web-dev":
      return (languages = [
        {
          link: "javascript",
          img: jsLogo,
        },
        {
          link: "html",
          img: htmlLogo,
        },
        {
          link: "react",
          img: reactLogo,
        },
        {
          link: "vue",
          img: vueLogo,
        },
        {
          link: "css",
          img: cssLogo,
        },
      ]);
    case "back-web-dev":
      return (languages = [
        {
          link: "php",
          img: phpLogo,
        },
        {
          link: "nodejs",
          img: nodeLogo,
        },
        {
          link: "express",
          img: expressLogo,
        },
        {
          link: "mongodb",
          img: mongodbLogo,
        },
        {
          link: "python",
          img: pythonLogo,
        },
        {
          link: "java",
          img: javaLogo,
        },
      ]);
    case "mobile-dev":
      return (languages = [
        {
          link: "kotlin",
          img: kotlinLogo,
        },
        {
          link: "react-native",
          img: reactNativeLogo,
        },
        {
          link: "flutter",
          img: flutterLogo,
        },
      ]);
    default:
      break;
  }
};

const FindLanguage = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [langList, setLangList] = useState(selectionFromList("front-web-dev"));
  const [selection, setSelection] = useState("front-web-dev");

  useEffect(() => {
    switch (selection) {
      case "front-web-dev":
        setLangList(selectionFromList(selection));
        break;
      case "back-web-dev":
        setLangList(selectionFromList(selection));
        break;
      case "mobile-dev":
        setLangList(selectionFromList(selection));
        break;
      default:
        break;
    }
  }, [selection]);

  const selectionHandler = e => {
    setSelection(e);
  };

  return (
    <>
      <Modal show={displayModal} hideModal={() => setDisplayModal(false)} />
      <div className="find-course">
        {/* <select className="btn" onChange={selectionHandler} value={selection}>
        <option value="front-web-dev">Front end web development</option>
        <option value="back-web-dev">Back end web development</option>
        <option value="mobile-dev">Mobile development</option>
      </select> */}
        <ul className="positions">
          <h2>What are you interested in?</h2>
          <li>
            <button onClick={() => selectionHandler("front-web-dev")}>
              Front-end web development
            </button>
          </li>
          <li>
            <button onClick={() => selectionHandler("back-web-dev")}>
              Back-end web development
            </button>
          </li>
          <li>
            <button onClick={() => selectionHandler("mobile-dev")}>
              Native mobile apps
            </button>
          </li>
          <li>
            <button onClick={() => setDisplayModal(true)}>
              I don't know yet
            </button>
          </li>
        </ul>
        <div className="find-course-cards">
          {langList &&
            langList.map(lang => (
              <Card
                key={lang.link}
                size="sm"
                link={`technology/${lang.link}`}
                image={lang.img}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FindLanguage;
