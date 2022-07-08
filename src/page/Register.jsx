import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerPost } from "../store/actions/registerPosts";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeUser = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const clickRegister = () => {
    dispatch(
      registerPost({
        params: {
          username,
          email,
          password,
        },
        onSuccess: () => {
          navigate("/login");
        },
        onFail: () => {},
      })
    );
  };

  return (
    <div className="body-login">
      <div className="wrap-login">
        <h1>Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="Enter Username"
              onChange={changeUser}
              value={username}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              placeholder="Enter email"
              onChange={changeEmail}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoComplete="off"
              type="password"
              placeholder="Password"
              onChange={changePassword}
              value={password}
            />
          </Form.Group>

          <Button onClick={clickRegister} variant="secondary">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
