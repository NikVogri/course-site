import React from "react";

// import images for modal
import mobileDevImg from "../../images/modal/mobile-dev.svg";

const Mobiledev = () => {
  return (
    <>
      <article>
        <h3>Mobile app developer</h3>
        <p>
          Unlike web developers, mobile developers focus solely on applications
          made for mobile devices. You have probably seen both website and
          native application versions of your favourite sites, and they can be
          very different from each other.
        </p>
        <h4>What does a mobile developer do?</h4>
        <p>
          Native developers creates both the UI and the logic behind an app that
          runs on mobile devices. Developers can also use device hardware like
          microphone and camera to implement additional features.
        </p>
        <h4>How do I become a mobile developer?</h4>
        <p>
          We recommend you start by learning front-end (HTML, CSS, Javascript),
          and then move on to React Native, Flutter or Kotlin.
        </p>
      </article>
      <img src={mobileDevImg} alt="front end developer" />
    </>
  );
};

export default Mobiledev;
