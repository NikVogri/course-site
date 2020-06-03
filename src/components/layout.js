/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import Footer from "./footer";
import "./layout.scss";

// auth
import firebase from "./auth/firebase";

const Layout = ({ children, noFooter, className }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("user is here");
        setLoggedIn(true);
        // ...
      } else {
        // User is signed out.
        setLoggedIn(false);
        console.log("user not here");
      }
    });
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navigation
        siteTitle={data.site.siteMetadata.title}
        loggedIn={loggedIn}
      />
      <main className={`main ${className ? className : ""}`}>{children}</main>
      {!noFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
