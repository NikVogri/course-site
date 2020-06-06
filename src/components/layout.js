/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import Footer from "./footer";
import "./layout.scss";

const Layout = ({ children, noFooter, className }) => {
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
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main className={`main ${className ? className : ""}`}>{children}</main>
      {!noFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
