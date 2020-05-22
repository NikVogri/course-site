import React from "react";
import womanSvg from "../images/woman-pc.svg";
import backgroundWomanSvg from "../images/woman-background-pc.svg";

import { Link } from "gatsby";

const Hero = () => {
  let width;

  if (typeof window !== `undefined`) {
    width = window.innerWidth;
  }

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <h2>Sign up now!</h2>
        <h1>
          Free programming courses in one place with additional tools to help
          you learn faster!
        </h1>
        <Link className="btn btn-index" to="/register">
          Sign up
        </Link>
      </div>

      {width >= 850 ? (
        <img
          className="background-image"
          src={backgroundWomanSvg}
          alt="background"
        />
      ) : (
        <img className="background-image" src={womanSvg} alt="woman" />
      )}
    </section>
  );
};

export default Hero;
