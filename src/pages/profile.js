import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import ImageUploadForm from "../components/imageUploadForm";

const profile = () => (
  <Layout>
    <SEO title="Home" />
    <ImageUploadForm />
  </Layout>
);

export default profile;
