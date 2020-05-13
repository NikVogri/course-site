import React, { useState, useEffect } from "react";
import Card from "./card";
import Spacer from "./spacer";

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

const FindLanguage = () => {
  const [langList, setLangList] = useState([
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
  const [selection, setSelection] = useState("front-web-dev");

  useEffect(() => {
    let languages;
    switch (selection) {
      case "front-web-dev":
        languages = [
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
        setLangList(languages);
        break;
      case "back-web-dev":
        languages = [
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
        ];
        setLangList(languages);
        break;
      case "mobile-dev":
        languages = [
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
        setLangList(languages);
        break;
      default:
        break;
    }
  }, [selection]);

  const selectionHandler = e => {
    setSelection(e.target.value);
  };

  return (
    <div className="find-course">
      <select className="btn" onChange={selectionHandler} value={selection}>
        <option value="front-web-dev">Front end web development</option>
        <option value="back-web-dev">Back end web development</option>
        <option value="mobile-dev">Mobile development</option>
      </select>
      <Spacer space="1" />
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
  );
};

export default FindLanguage;
