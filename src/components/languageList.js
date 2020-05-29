export default selection => {
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
      break;
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
