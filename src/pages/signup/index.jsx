import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { register } from "../../apis/auth.api";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submittedValues: ", credentials);
    try {
      await axios.post(register, { ...credentials });
      navigate("/login");
    } catch (err) {
      console.log("failed to register user: ", err);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-enter flex-column w-50"
      style={{ height: "100vh", width: "100%" }}
    >
      <h3>Register Form</h3>
      <p className="text-muted fs-6">
        Already have an account?{" "}
        <Link to="/login" className="text-decoration-underline text-black">
          Login
        </Link>
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            name="username"
            value={credentials.username}
            placeholder="Enter User Name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input
            name="email"
            value={credentials.email}
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
