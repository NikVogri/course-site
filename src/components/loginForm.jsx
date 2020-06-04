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

const LoginForm = () => {
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
      .signInWithEmailAndPassword(data.email, data.password)
      .catch(err => {
        console.log(err);
        if (err.code === "auth/user-not-found") {
          setMessage({
            type: "warning",
            message: "User with that email address could not be found",
          });
        } else if (err.code === "auth/wrong-password") {
          setMessage({
            type: "warning",
            message: "The password is invalid",
          });
        } else {
          setMessage({
            type: "warning",
            message: err.message,
          });
        }
        setLoading(false);
      });

    if (res && res.user) {
      addToLocalStorage("user", {
        email: res.user.email,
        name: res.user.displayName,
        id: res.user.uid,
      });
      navigate("/");
    }
  };

  return (
    <Form
      className={`authentication-form index-form`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Log in </h3>
      <Form.Group>
        {message && <Alert variant={message.type}>{message.message}</Alert>}
        <Form.Label>Your Email</Form.Label>
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
        <Form.Label>Your Password</Form.Label>
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
          "Log in"
        )}
      </button>
      <Spacer space="0.95" />
      <span>
        Don't have an account ? <Link to="/register">Sign Up</Link>
      </span>
    </Form>
  );
};

export default LoginForm;
