import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import * as yup from "yup";
import Spacer from "./spacer";

import { Link, navigate } from "gatsby";
import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";

// auth
import firebase from "./auth/firebase";

const FormSchema = yup.object().shape({
  name: yup
    .string("Please provide name")
    .required("Please provide a name")
    .max(120, "Name is too long"),
  email: yup
    .string("Please provide a valid email address")
    .required("Please provide an email address")
    .email("Please provide a valid email address")
    .max(120, "Email is too long"),
  password: yup
    .string("Please provide a valid password")
    .required("Please provide a password")
    .max(120, "Password is too long"),
});

const SignupForm = () => {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: FormSchema,
  });

  const { addToLocalStorage } = useLocalStorage();

  const onSubmit = async data => {
    setLoading(true);
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch(err => {
        setMessage({ type: "warning", message: err.message });
        setLoading(false);
      });

    if (res && res.user) {
      firebase
        .database()
        .ref("users/" + res.user.uid)
        .set({
          username: data.name,
          email: data.email,
          createdAt: new Date(),
          profile_image: "default",
        })
        .then(
          firebase.auth().currentUser.updateProfile({ displayName: data.name })
        )
        .then(() => {
          addToLocalStorage("user", {
            email: res.user.email,
            name: res.user.displayName,
            id: res.user.uid,
          });
          setTimeout(() => navigate("/"), 1000);
        })
        .catch(err => {
          setMessage({ type: "danger", message: err.message });
          setLoading(false);
        });
    }
  };

  return (
    <Form
      className={`authentication-form index-form`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Sign Up for Free</h3>
      <Form.Group>
        {message && <Alert variant={message.type}>{message.message}</Alert>}
        <Form.Label>Your Name*</Form.Label>
        <Form.Control
          type="text"
          name="name"
          ref={register}
          isInvalid={errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name && errors.name.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Email*</Form.Label>
        <Form.Control
          type="text"
          name="email"
          ref={register}
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email && errors.email.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Password*</Form.Label>
        <Form.Control
          type="password"
          name="password"
          ref={register}
          isInvalid={errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password && errors.password.message}
        </Form.Control.Feedback>
      </Form.Group>
      <button className="btn">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          "Start your journey"
        )}
      </button>
      <Spacer space="0.2" />
      <span className="form-policy">
        By signing up for Freecourso, you agree to our
        <Link to="/tos"> Terms of Service </Link>&{" "}
        <Link to="/policy"> Privacy Policy</Link>.
      </span>
      <span>
        Already have an account? <Link to="/login">Log In</Link>
      </span>
    </Form>
  );
};

export default SignupForm;
