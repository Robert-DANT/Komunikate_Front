import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import "./UserLogin.css";
import Axios from "axios";
import jwt_decode from "jwt-decode";

const queryString = require("query-string");

const UserLogin = (props) => {
  let history = useHistory();

  function redirect() {
    history.push("https://stark-fjord-75040.herokuapp.com/users/");
  }

  const [token, setToken] = useState();
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = document.getElementById("loginForm");
    form.reset();
    const user = queryString.stringify({
      email: email,
      password: pw,
    });
    loginFunction(user).then((res) => {
      if (res) {
        alert("You've logged in");
        /*         return <Redirect to='/frontpage' /> */
        // props.history("/")
        window.location.href = "/";
      } else {
        alert("You've entered an incorrect E-mail or Password");
      }
    });
  };

  const loginFunction = (user) => {
    return Axios.post("https://stark-fjord-75040.herokuapp.com/login", user)
      .then((response) => {
        localStorage.setItem("token", response.data);
        setToken(response.data);
        return response.data; //redirect react-router to individual landing page
      })
      .catch((err) => {
        console.log(err); //show error message, clear form, say try again
      });
  };

  return (
    <Container>
      <h3>User Login Page</h3>

      <Row className="justify-content-center">
        <Col xs={6}>
          <Breadcrumb className="form-nav">
            <Breadcrumb.Item href="#">Login</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              SignUp
            </Breadcrumb.Item>
          </Breadcrumb>
          <Form onSubmit={handleLogin} id="loginForm" autocomplete="off">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="name"
                name="name"
                placeholder="E-mail address"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPw(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <div className="font-weight-light">
              <p>Not a member? Sign Up</p>
              <p>Forgot Password?</p>
            </div>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
