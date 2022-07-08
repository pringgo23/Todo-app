import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { loginPost } from "../store/actions/loginPosts";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const clickLogin = () => {
    dispatch(
      loginPost({
        params: {
          email,
          password,
        },
        onSuccess: () => {
          navigate("/");
        },
        onFail: () => {},
      })
    );
  };

  return (
    <div className="body-login">
      <div className="wrap-login">
        <h1>Login</h1>
        <Form>
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

          <Button onClick={clickLogin} variant="secondary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
