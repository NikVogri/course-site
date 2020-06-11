import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import * as yup from "yup";

import { Link, navigate } from "gatsby";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/actionCreator";

import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const LoginForm = ({ isLoading, loginUser, errorMessage }) => {
  const [showingPassword, setShowingPassword] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: FormSchema,
  });

  const onSubmit = async data => {
    const authSuccess = await loginUser(data);
    if (authSuccess) navigate("/");
  };

  return (
    <Form
      className={`authentication-form index-form`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Log in </h3>
      <Form.Group>
        {errorMessage && <Alert variant="warning">{errorMessage}</Alert>}
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
        <div className="password-control">
          <Form.Control
            type={showingPassword ? "text" : "password"}
            name="password"
            className="form-password"
            ref={register}
            isInvalid={errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password && errors.password.message}
          </Form.Control.Feedback>
          <FontAwesomeIcon
            className="password-control-icon"
            icon={showingPassword ? faEyeSlash : faEye}
            onMouseDown={() => setShowingPassword(true)}
            onMouseUp={() => setShowingPassword(false)}
            onTouchStart={() => setShowingPassword(true)}
            onTouchEnd={() => setShowingPassword(false)}
          />
        </div>
      </Form.Group>
      <button className="btn">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          "Log in"
        )}
      </button>
      <span>
        Don't have an account ? <Link to="/register">Sign Up</Link>
      </span>
    </Form>
  );
};

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  errorMessage: state.user.errorMsg,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
