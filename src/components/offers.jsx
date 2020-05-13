import React from "react";
import workerImage from "../images/offers-worker.svg";
import Spacer from "./spacer";
import FindLanguage from "./findLanguage";

const Offers = () => {
  return (
    <section className="offers">
      <Spacer space="2.5" />
      <img src={workerImage} alt="what we offer" />
      <Spacer space="2" />
      <h2>What we offer</h2>
      <Spacer space="0.5" />
      <ul>
        <li>Free course videos in one place</li>
        <li>Tools that help you learn more efficiently</li>
        <li>Answers and question section</li>
        <li>Random tests between video courses</li>
      </ul>
      <Spacer space="2" />
      <FindLanguage />
    </section>
  );
};

export default Offers;
