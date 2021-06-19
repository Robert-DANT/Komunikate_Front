import { Container, Form, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./UserSignup.css";
import axios from "axios";

// npm install query-string
const queryString = require("query-string");

const UserSignup = () => {
  const [data, setData] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [languages, setLanguages] = useState("");
  const [cityGermany, setCityGermany] = useState("");
  const [userrole, setUserRole] = useState("Seeker");

  const fetchAPI = async () => {
    //Real Heroku Backend - https://stark-fjord-75040.herokuapp.com
    await axios
      .get("http://localhost:3002/users/registration")
      .then((response) => setData(response.data))
      .catch((e) => console.log(e.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = document.getElementById("registerForm");
    form.reset();

    const user = queryString.stringify({
      // mongo assigned name: variable name here
      username: username,
      email: email,
      password: pw,
      first_name: firstname,
      last_name: lastname,
      nationality: nationality,
      languages: languages,
      living_in_germany: cityGermany,
      user_role: userrole,
    });
    registerFunction(user).then((err) => {
      if (err) {
        alert(err);
      } else {
        alert("User Created! Please Login now :)");
        setLogin(true);
        setRegister(false);
      }
    });
  };

  const registerFunction = (newUser) => {
    return axios
      .post(
        "https://stark-fjord-75040.herokuapp.com/users/registration",
        newUser
      )
      .then((res) => {
        console.log(res);
        console.log("Registered");
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  return (
    <Container>
      <h3>User Signup Page</h3>
      <Form className="signup">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            required
          />
        </Form.Group>

        <Form.Group>
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

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter First name"
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter Last name"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Languages</Form.Label>
            <Form.Control
              onChange={(e) => setLanguages(e.target.value)}
              type="text"
              id="languages"
              name="languages"
              placeholder="First Language"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              onChange={(e) => setNationality(e.target.value)}
              type="text"
              id="nationality"
              name="nationality"
              placeholder="What country do you come from?"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Where in Germany You Live or Want to Live</Form.Label>
          <Form.Control
            onChange={(e) => setCityGermany(e.target.value)}
            type="text"
            id="cityGermany"
            name="cityGermany"
            placeholder="leave blank if unknown"
          />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <h6>Type of User:</h6>
          <Form.Check type="checkbox" label="Info-Guide" />
          <Form.Check type="checkbox" label="Info-Seeker" />
        </Form.Group>

        <Button
          onSubmit={handleRegister}
          id="registerForm"
          autocomplete="off"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default UserSignup;
