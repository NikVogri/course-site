import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Spacer from "./spacer";
import { Link } from "gatsby";

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

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: FormSchema,
  });

  const onSubmit = data => {
    console.log(errors);
    console.log(data);
  };

  return (
    <Form
      className={`authentication-form index-form`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Log in </h3>
      <Form.Group>
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
      <button className="btn">Log in</button>
      <Spacer space="0.95" />
      <span>
        Don't have an account ? <Link to="/register">Sign Up</Link>
      </span>
    </Form>
  );
};

export default LoginForm;
