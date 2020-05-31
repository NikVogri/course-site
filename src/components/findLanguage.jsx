import React, { useState, useEffect } from "react";
import Card from "./card";

// font awesome svg
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

// import modal pages
import Frontdev from "./modal/frontdev";
import Backdev from "./modal/backdev";
import Nativedev from "./modal/nativedev";

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
import { CSSTransition } from "react-transition-group";

const selectionFromList = selection => {
  switch (selection) {
    case "front-web-dev":
      return [
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
      ];
    case "back-web-dev":
      return [
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
      ];
    case "mobile-dev":
      return [
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
      ];
    default:
      break;
  }
};

const FindLanguage = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [langList, setLangList] = useState(selectionFromList("front-web-dev"));
  const [selection, setSelection] = useState("front-web-dev");
  const [courseUrl, setCourseUrl] = useState("frontend");
  const [modalPage, setModalPage] = useState(1);

  useEffect(() => {
    switch (selection) {
      case "front-web-dev":
        setLangList(selectionFromList(selection));
        setCourseUrl("frontend");
        break;
      case "back-web-dev":
        setLangList(selectionFromList(selection));
        setCourseUrl("backend");
        break;
      case "mobile-dev":
        setLangList(selectionFromList(selection));
        setCourseUrl("mobile");
        break;
      default:
        break;
    }
  }, [selection]);

  const selectionHandler = e => {
    setSelection(e);
  };

  const modalPageHandler = direction => {
    if (modalPage >= 3 && direction === "next") {
      setModalPage(1);
    } else {
      setModalPage(modalPage + 1);
    }

    if (direction === "prev") {
      if (modalPage <= 1) {
        setModalPage(3);
      } else {
        setModalPage(modalPage - 1);
      }
    }
  };

  return (
    <>
      <Modal
        className="language-modal"
        show={displayModal}
        hideModal={() => setDisplayModal(false)}
      >
        <div className="modal-inner">
          {modalPage === 1 && <Frontdev />}
          {modalPage === 2 && <Backdev />}
          {modalPage === 3 && <Nativedev />}
        </div>
        <div className="modal-control">
          <button
            className="btn-reset"
            onClick={() => modalPageHandler("next")}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
            <span>
              Next ({modalPage === 1 && `Back end developer`}
              {modalPage === 2 && `Mobile developer`}
              {modalPage === 3 && `Front end developer`})
            </span>
          </button>
        </div>
      </Modal>
      <div className="find-course">
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
              <Card key={lang.link} size="sm" image={lang.img} />
            ))}
          <CSSTransition
            classNames="card-animation"
            timeout="200"
            in={langList}
          >
            <Card
              text="View all"
              link={`/courses/${courseUrl}`}
              size="sm"
              className="view-all-card"
            />
          </CSSTransition>
        </div>
      </div>
    </>
  );
};

export default FindLanguage;
