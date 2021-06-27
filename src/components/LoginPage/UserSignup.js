import { Container, Form, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./UserSignup.css";
import axios from "axios";
import jwt_decode from "jwt-decode";

// npm install query-string
const queryString = require("query-string");

const UserSignup = ({ token, setToken }) => {
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
  const [cityGermany, setCityGermany] = useState(false);
  const [userRole, setUserRole] = useState("");

  // testing console
  console.log(cityGermany);
  console.log(userRole);

  // unneeded login code - can be deleted
  /*   const handleLogin = (e) => {
    e.preventDefault()
    const form = document.getElementById("loginForm");
    form.reset();
    const user = queryString.stringify({
      email: email,
      password: pw
    })
    loginFunction(user).then(res => {
      if (res) {
        alert('Welcome Back')
      }
      else {
        alert("You\\'ve entered an incorrect E-mail or Password")
      }
    })
  }

  const loginFunction = user => {
    return axios
      .post('https://stark-fjord-75040.herokuapp.com/login', user)
      .then(response => {
        setToken(response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  } */

  // code to prepare user inputted form data
  const handleRegister = (e) => {
    e.preventDefault();
    const form = document.getElementById("registerForm");
    /*     form.reset(); */

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
      user_role: userRole,
    });
    registerFunction(user).then((err) => {
      if (err) {
        alert(err);
      } else {
        alert("Your account has been registered. You can now login.");
        setLogin(true);
        setRegister(false);
      }
    });
  };

  // Post inputted data from HandleRegister to the backend
  const registerFunction = (newUser) => {
    // heroku database is not being auto-updated from git repository
    // running the backend server locally will run the backend through port 3002

    return (
      axios
        .post("https://stark-fjord-75040.herokuapp.com/users/register", newUser)
        /*     return axios.post("http://localhost:3002/users/register", newUser) */
        .then((res) => {
          console.log(res);
          console.log("Registered");
        })
        .catch((err) => {
          return err.response.data;
        })
    );
  };

  // old code for Poke game
  /*   const handleStartClick = () => {
      if (token) {
        const decoded = jwt_decode(token)
        if (Date.now() >= decoded.exp*1000) {
          alert('Session expired, please login again')
          setLoginScreen(true)
        }
        else if(decoded.user.name) {
          alert(`Welcome back ${decoded.user.name}!`)
        }
        else setLoginScreen(true)
      }
      else setLoginScreen(true)
      
    } */

  return (
    <Container>
      <h3>Create an Account</h3>
      <Form
        className="signup"
        onSubmit={handleRegister}
        id="registerForm"
        autoComplete="off"
      >
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
              placeholder="i.e. English, French, Italian, Spanish"
              required
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
              required
            />
          </Form.Group>
        </Form.Row>

        {/*         <Form.Group>
          <Form.Label>Do you live in Germany yet?</Form.Label>
          <Form.Control onChange={(e) => setCityGermany(e.target.value)} type="text" id="cityGermany" name="cityGermany" placeholder="leave blank if unknown"/>
        </Form.Group> */}

        <Form.Group id="formGridCheckbox form-check-inline">
          <h6>Do you live in Germany yet?</h6>
          <Form.Check
            onChange={(e) => setCityGermany(e.target.id)}
            value={userRole}
            name="userCity"
            inline
            type="radio"
            label="Yes, I do"
            id="true"
            required
          />
          <Form.Check
            onChange={(e) => setCityGermany(e.target.id)}
            value={userRole}
            name="userCity"
            inline
            type="radio"
            label="No, not yet"
            id="false"
            required
          />
        </Form.Group>

        <Form.Group id="formGridCheckbox form-check-inline">
          <h6>
            Are you looking for information or do you want to help others?
          </h6>
          <Form.Check
            onChange={(e) => setUserRole(e.target.id)}
            value={userRole}
            name="userType"
            type="radio"
            inline
            label="Info-Seeker"
            id="Seeker"
            required
          />
          <Form.Check
            onChange={(e) => setUserRole(e.target.id)}
            value={userRole}
            name="userType"
            type="radio"
            inline
            label="Info-Guide"
            id="Mentor"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default UserSignup;
