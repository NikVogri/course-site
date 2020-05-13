import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/title";
import SignupForm from "../components/signupForm";

const Register = () => {
  return (
    <Layout noFooter>
      <SEO title="Sign Up" />
      <Title title="Sign Up" />
      <SignupForm />
    </Layout>
  );
};

export default Register;
