import React from "react";

// import images for modal
import frontDevImg from "../../images/modal/front-dev.svg";

const frontdev = () => {
  return (
    <>
      <article>
        <h3>Front-end web developer</h3>
        <p>
          A front-end developer is a web developer that creates the front end of
          a website - what user sees and interacts with.
        </p>
        <p>
          Front-end developers work with three main technologies: HTML, CSS &
          JavaScript. There are also frameworks that are built upon the three
          main technologies like React, Vue or Angular.
        </p>
        <h4>What does a front-end developer do?</h4>
        <p>
          When you clicked 'I don't know yet' you triggered an action, the
          action had to be implemented inside this website by a front-end web
          developer. Everything user sees, clicks or uses to input or retrieve
          information on a website is a work of a front-end developer. Their
          focus is on user experience, bringing concepts to life, maintain
          software, SEO optimization, testing the site for any bugs and so much
          more.
        </p>
        <h4>How do I become a front-end developer?</h4>
        <p>
          Many schools start with HTML and CSS, they aren't technically a
          programming language, but they are the first step in learning
          programming. After learning both HTML and CSS, which basically go
          hand-in-hand, you should start learning Javascript and after that you
          can learn anything you want, we suggest you try a framework like
          React, Vue or Angular.
        </p>
      </article>
      <img src={frontDevImg} alt="front end developer" />
    </>
  );
};

export default frontdev;
