import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import notFound from "../images/404_NOT_FOUND.svg";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="forofor">
      <img src={notFound} alt="not found" />
      <h1>Page not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
