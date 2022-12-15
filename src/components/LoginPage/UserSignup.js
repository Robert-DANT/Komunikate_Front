import { Container, Form, Col, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ISO6391 from 'iso-639-1'
import jwt_decode from "jwt-decode";
import "./UserSignup.css";
import "../fonts.css";

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
  const [languages, setLanguages] = useState(['']);
  const [cityGermany, setCityGermany] = useState(false);
  const [userRole, setUserRole] = useState("");

  // testing console
  console.log(cityGermany);
  console.log(userRole);

  const languagesArray = ISO6391.getAllNames()

  // code to prepare user inputted form data
  const handleRegister = (e) => {
    e.preventDefault();
    //const form = document.getElementById("registerForm");
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
    console.log(user)

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
      .post("https://komunikate-backend.onrender.com/users/register", newUser)
        .then((res) => {
          console.log(res);
          console.log("Registered");
        })
        .catch((err) => {
          return err.response.data;
        })
    );
  };

    const handleAddLanguage = () => {
      const newLanguages = [...languages, ''];
      setLanguages(newLanguages);
    };
  
    const handleInputChange = (index, e) => {
      const newLanguages = [...languages];
      newLanguages[index] = e.target.value;
  
      setLanguages(newLanguages);
    };

  return (
    <Container className="outer-container-register" fluid>
      <Container className="content-container-register bg-light">

        <Form className="signup-form" onSubmit={handleRegister} id="registerForm" autoComplete="off">

        <h3 className="mainHeaderFonts">Create an Account</h3>
        <hr />
        <p></p>
        <p></p>
           <Form.Row>
            <Form.Group as={Col}>
            <Form.Label  className="mainBodyFont">Username</Form.Label>
            <Form.Control onChange={(e) => setUserName(e.target.value)}
              type="text" id="name" name="name" placeholder="Username" required/>
            </Form.Group>
           </Form.Row>

           <Form.Row>
            <Form.Group as={Col}>
            <Form.Label  className="mainBodyFont">Password</Form.Label>
            <Form.Control onChange={(e) => setPw(e.target.value)}
              type="password" id="password" name="password" placeholder="Password" required/>
            </Form.Group>
           </Form.Row>

           <Form.Row>
            <Form.Group as={Col}>
            <Form.Label  className="mainBodyFont">Email</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)}
              type="email" id="email" name="email" placeholder="Enter email" required/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label  className="mainBodyFont">First Name</Form.Label>
              <Form.Control onChange={(e) => setFirstName(e.target.value)}
                type="text" id="firstname" name="firstname" placeholder="Enter First name" required/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label  className="mainBodyFont">Last name</Form.Label>
              <Form.Control onChange={(e) => setLastName(e.target.value)}
                type="text" id="lastname" name="lastname" placeholder="Enter Last name" required/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Col>
            <Form.Label  className="mainBodyFont">Languages</Form.Label>
          {languages.map((language, index) => (
            // <div key={`${language}-${index}`}>
              //{console.log(`${language}-${index}`)}
              <Form.Group as={Col}>

              <Form.Control onChange={(e) => handleInputChange(index, e)} 
                as="select" value={language} id="languages" name="languages" required
                //defaultValue=''
                // onChange={(e) => setLanguages(...languages, e.target.value)}
                >
                    <option></option>
                    {languagesArray.map(el => <option>{el}</option>)}
              </Form.Control>
            </Form.Group>              
            //</div>
          ))}
            <Button type="button" onClick={() => handleAddLanguage()}>
                + Add another language
            </Button>
            </Col>

            <Form.Group as={Col}>
              <Form.Label  className="mainBodyFont">Nationality</Form.Label>
              <Form.Control onChange={(e) => setNationality(e.target.value)}
                type="text" id="nationality" name="nationality" placeholder="What is your nationality?" required/>
            </Form.Group>
          </Form.Row>
          <hr />
          <Form.Group id="formGridCheckbox form-check-inline">
            <p></p>
            <h6 className="mainBodyFont">Do you live in Germany yet?</h6>
            <Form.Check onChange={(e) => setCityGermany(e.target.id)} className="subHeadlineFonts"
              value='true' name="userCity" inline type="radio" label="Yes, I do" id="true" required/>
            <Form.Check onChange={(e) => setCityGermany(e.target.id)} className="subHeadlineFonts"
              value='false' name="userCity" inline type="radio" label="No, not yet" id="false"required/>
          </Form.Group>

          <Form.Group id="formGridCheckbox form-check-inline">
            <h6 className="mainBodyFont">
              Are you looking for information or do you want to help others?
            </h6>
            <Form.Check onChange={(e) => setUserRole(e.target.id)} className="subHeadlineFonts"
              value="Seeker" name="userType" type="radio"inline label="Info-Seeker" id="Seeker" required/>
            <Form.Check onChange={(e) => setUserRole(e.target.id)} className="subHeadlineFonts"
              value="Mentor" name="userType" type="radio" inline label="Info-Guide" id="Mentor" required/>
          </Form.Group>
          <hr />
          <Button variant="primary" type="submit">
            Register
          </Button>

        </Form>
      </Container>
    </Container>
  );
};

export default UserSignup;