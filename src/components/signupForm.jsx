import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string("Please provide name")
    .required("Please provide a valid name")
    .max(120, "Name is too long"),
  email: yup
    .string("Please provide a valid email address")
    .required("Please provide a valid email address")
    .email("Please provide a valid email address")
    .max(120, "Email is too long"),
  password: yup
    .string("Please provide a valid email address")
    .required("Please provide a valid password")
    .max(120, "Password is too long"),
});

const SignupForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: FormSchema,
  });

  const onSubmit = data => {
    console.log(errors);
    console.log(data);
  };

  console.log(errors);

  return (
    <Form
      className={`signup-form index-form`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
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
      <button className="btn">Start your journey</button>
    </Form>
  );
};

export default SignupForm;
