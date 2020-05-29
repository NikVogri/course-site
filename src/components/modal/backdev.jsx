import React from "react";

// import images for modal
import backDevImg from "../../images/modal/back-dev.svg";

import { Link } from "gatsby";

const BackDev = () => {
  return (
    <>
      <article>
        <h3>Back-end web developer</h3>
        <p>
          Back-end developers make front end websites possible, they work on
          servers, applications and databases.
        </p>
        <h4>What does a back-end developer do?</h4>
        <p>
          When you want to create an account on a website, you first need to
          enter all your data, after you click that 'register' button, all the
          data gets stored in the database, but first it needs to go through a
          server. Back-end developers are focused on creating fast and secure
          servers to send and store data to and from the front end.
        </p>
        <h4>How do I become a front-end developer?</h4>
        <p>
          In order to make a server, application and database communicate with
          each other, back-end developers use server-side languages like PHP,
          Node, Java, Python and frameworks built on server-side languages like
          Express for Node and Django for Python. There are also multiple
          database types to choose from: SQL databases like MySQL, and NoSQL
          databases like MongoDB. We recommend you start with a language you
          might be already familiar with like Node (Javascript), then move on to
          frameworks and databases like MongoDB or MariaDB.
        </p>
        <Link to="/courses/backend" className="view-all-btn btn btn-primary">
          View all courses
        </Link>
      </article>
      <img src={backDevImg} alt="front end developer" />
    </>
  );
};

export default BackDev;
