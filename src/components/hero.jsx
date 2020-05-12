import React from "react";
import SignupForm from "./signupForm";
import womanSvg from "../images/woman-pc.svg";
import { Link } from "gatsby";

const Hero = () => {
  const inputs = [
    { label: "Your Name", type: "text", required: true },
    { label: "Your Email Address", type: "email", required: true },
    { label: "Your Password", type: "password", required: true },
  ];

  return (
    <section className="hero">
      <div className="container">
        <h2>Sign up now!</h2>
        <h1>
          Free programming courses in one place with additional tools to help
          you learn faster!
        </h1>
      </div>
      {/* <div className="form-background">
        <SignupForm inputs={inputs} button="Start your journey" />
      </div> */}
      <Link className="btn btn-index" to="register">
        Sign up
      </Link>
      <img className="background-image" src={womanSvg} alt="woman" />
    </section>
  );
};

export default Hero;
