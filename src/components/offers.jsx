import React from "react";
import workerImage from "../images/offers-worker.svg";

const Offers = () => {
  return (
    <>
      <section className="offers">
        <div className="offers-wrapper">
          <img src={workerImage} alt="what we offer" />
          <ul>
            <h2>What we offer</h2>
            <li>Free course videos in one place</li>
            <li>Tools that help you learn more efficiently</li>
            <li>Answers and question section</li>
            <li>Tests between video courses</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Offers;
