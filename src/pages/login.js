import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/title";
import LoginForm from "../components/loginForm";

export default function login() {
  return (
    <Layout>
      <SEO title="Login" />
      <Title title="Login" />
      <LoginForm />
    </Layout>
  );
}
