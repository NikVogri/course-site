import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LoginForm from "../components/loginForm";

const Login = () => {
  return (
    <Layout noFooter className="form-wrapper">
      <SEO title="Sign Up" />
      <div className="form-image form-image--big"></div>
      <LoginForm />
    </Layout>
  );
};

export default Login;
