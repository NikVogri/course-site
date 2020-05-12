import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

// components import

import Title from "../components/title";
import Spacer from "../components/spacer";
import Card from "../components/card";

// sections import
import Hero from "../components/hero";
import Offers from "../components/offers";

// card images import
import jsLogo from "../images/js-logo.png";
import pyLogo from "../images/py-logo.png";
import jaLogo from "../images/ja-logo.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section>
      <Title
        title="Most Popular Languages"
        subtitle="I recommend javascript, but I am also bias"
      />
      <Card
        size="lg"
        link="technology/javascript"
        text="Javascript"
        image={jsLogo}
        alt="javascript logo"
      />
      <Card
        size="lg"
        link="technology/python"
        text="Python"
        image={pyLogo}
        alt="python logo"
      />
      <Card
        size="lg"
        link="technology/java"
        text="Java"
        image={jaLogo}
        alt="java logo"
      />
    </section>
    <Offers />
    <Spacer space="1" />
  </Layout>
);

export default IndexPage;
