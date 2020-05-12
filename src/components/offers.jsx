import React from "react";
import workerImage from "../images/offers-worker.svg";
import Spacer from "./spacer";
import FindLanguage from "./findLanguage";
const offers = () => {
  return (
    <section className="offers">
      <Spacer space="1" />
      <img src={workerImage} alt="what we offer" />
      <Spacer space="1.5" />
      <h2>What we offer</h2>
      <ul>
        <li>Free course videos in one place</li>
        <li>Tools that help you learn more efficiently</li>
        <li>Answers and question section</li>
        <li>Random tests between video courses</li>
      </ul>
      <Spacer space="1" />
      <FindLanguage />
    </section>
  );
};

export default offers;
