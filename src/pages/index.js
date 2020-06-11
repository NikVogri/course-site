import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// components import

import Title from "../components/title";
import Spacer from "../components/spacer";
import Card from "../components/card";

// sections import
import Hero from "../components/hero";
import Offers from "../components/offers";
import FindLanguage from "../components/findLanguage";

// card images import
import jsLogo from "../images/js-logo.png";
import reactLogo from "../images/languages/react-logo.png";
import pyLogo from "../images/py-logo.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section>
      <Title
        title="Popular Technology"
        subtitle="Learn more and advance your career"
      />
      <div className="card-container">
        <Card
          size="lg"
          text="Javascript"
          image={jsLogo}
          alt="javascript logo"
        />
        <Card size="lg" text="React" image={reactLogo} alt="react logo" />
        <Card size="lg" text="Python" image={pyLogo} alt="python logo" />
      </div>
      <Spacer size="sm" />
    </section>
    <Spacer size="sm" />
    <Offers />
    <Spacer size="sm" />
    <FindLanguage />
    <Spacer size="md" />
  </Layout>
);

export default IndexPage;
