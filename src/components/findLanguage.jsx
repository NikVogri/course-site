import React, { useState, useEffect } from "react";
import Card from "./card";
import Spacer from "./spacer";

// import images for cards
import cssLogo from "../images/languages/css-logo.png";
import htmlLogo from "../images/languages/html-logo.png";
import jsLogo from "../images/languages/js-logo.png";
import vueLogo from "../images/languages/vue-logo.png";
import reactLogo from "../images/languages/react-logo.png";

const FindLanguage = () => {
  const [option, setOption] = useState("front-web-dev");

  let test;
  let languages = [
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

  useEffect(() => {
    console.log("here");
    switch (option) {
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
        break;
      case "back-web-dev":
        console.log("back-web-dev");
        break;
      case "software-dev":
        console.log("software-dev");
        break;
      case "mobile-dev":
        console.log("mobile-dev");
        break;
      default:
        break;
    }
  }, [option]);

  const selectionHandler = e => {
    setOption(e.target.value);
  };

  return (
    <div className="find-course">
      <select className="btn" onChange={selectionHandler} value={option}>
        <option value="front-web-dev">Front end web development</option>
        <option value="back-web-dev">Back end web development</option>
        <option value="software-dev">Software development</option>
        <option value="mobile-dev">Mobile development</option>
      </select>
      <Spacer space="1" />
      <div className="find-course-cards">
        {languages &&
          languages.map(lang => (
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
