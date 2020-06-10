import React from "react";
import heroImg from "../images/hero-main.svg";
import heroWallpaper from "../images/hero-wallpaper.jpg";

import { Link } from "gatsby";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroWallpaper} className="hero-wallpaper" alt="background" />
      <div className="hero-info">
        <img src={heroImg} className="hero-right" alt="person" />
        <div className="hero-left">
          <h1>Free online web courses</h1>
          <p>created by programmers for programmers</p>
          <div className="hero-left-links">
            <Link className="hero-left-signup-link" to="/signup">
              Sign up
            </Link>
            <Link className="hero-left-courses-link" to="/courses/all">
              View Courses
            </Link>
          </div>
          <span>
            Registration is not required to watch courses, but is encouraged to
            access custom made tools.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
