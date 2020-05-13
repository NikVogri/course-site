import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/title";
import LoginForm from "../components/loginForm";

const Login = () => {
  return (
    <Layout noFooter>
      <SEO title="Log In" />
      <Title title="Log In" />
      <LoginForm />
    </Layout>
  );
};

export default Login;
