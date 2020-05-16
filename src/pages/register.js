import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SignupForm from "../components/signupForm";

const Register = () => {
  return (
    <Layout noFooter className="form-wrapper">
      <SEO title="Sign Up" />
      <div className="form-image form-image--big"></div>
      <SignupForm />
    </Layout>
  );
};

export default Register;
