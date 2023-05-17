import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../../apis/auth.api";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
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
    try {
      const {
        data: { token, user },
      } = await axios.post(login, { ...credentials });
      localStorage.setItem("userData", JSON.stringify(user));
      localStorage.setItem("auth_token", token);
      JSON.parse(localStorage.getItem("userData"));
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
    console.log("submittedValues: ", credentials);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-enter flex-column w-50"
      style={{ height: "100vh", width: "100%" }}
    >
      <h3>Login Form</h3>
      <p className="text-muted fs-6">
        New User?{" "}
        <Link to="/signup" className="text-decoration-underline text-black">
          Register Now
        </Link>
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleName">Email Address</Label>
          <Input
            name="email"
            value={credentials.email}
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleprice">Password</Label>
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

export default Login;
