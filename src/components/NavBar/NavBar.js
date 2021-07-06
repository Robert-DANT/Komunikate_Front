import React, { useState, useRef } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import "./NavBar.css";
import "../fonts.css";
import { Link, useHistory  } from "react-router-dom";
import logo from "../../images/logos/Komunikate_Long_Blue_sub_v03.svg";
// import logo from './components/logos/Komunikate_Long_Black_v01.svg';
// import logo from './components/logos/Komunikate_Long_Blue_v01.svg';
// import logo from './components/logos/Komunikate_Long_White_v01.svg';
// import logo from './components/logos/Komunikate_Small_Black_v01.svg';
// import logo from './components/logos/Komunikate_Small_Black_v01.svg';
// import logo from './components/logos/Komunikate_Small_White_v01.svg';
import Axios from 'axios';
import jwt_decode from "jwt-decode";

const PORT = process.env.PORT || 'https://stark-fjord-75040.herokuapp.com/';
const queryString = require("query-string");

const NavBar = ({ userToken, setJwt }) => {

  // Dropdown Login Functionality Below

  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = queryString.stringify({
      email: email,
      password: pw,
    });
    loginFunction(user).then((res) => {
      if (res) {
        alert("You've logged in");
        setJwt(res);
        history.push("/");
      } else {
        alert("You've entered an incorrect E-mail or Password");
      }
    });
  };

  const loginFunction = (user) => {
    return Axios.post("https://stark-fjord-75040.herokuapp.com/login", user)
    /* return Axios.post("https://stark-fjord-75040.herokuapp.com/login", user) */
      .then((response) => {
        localStorage.setItem("token", response.data);
        // Commented out setToken below because it 
        // doesn't seem to be needed for userlogin to run
/*         setToken(response.data); */
        return response.data; //redirect react-router to individual landing page
      })
      .catch((err) => {
        console.log(err); //show error message, clear form, say try again
      });
  };

  // Login Functionality Above
    const searchRef = useRef()
    const [searchResults, setSearchResults] = useState([])
  const token = localStorage.getItem("token");


  const getSearch = () => {
    const search = { params: {searchtext: searchRef.current.value}}

    Axios
        .get(`${PORT}/posts/search`, search)
        .then(res => {
            console.log(res)
            //setSearchResults(results)
        })
        .catch(err => {
          console.log(err)
        })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value) 
    getSearch()
  }



  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="dropShadowNav">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              width="350"
              /* height="50" */
              className="d-inline-block align-top logoShift"
              alt="Kommunikate"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Form onSubmit={handleSubmit} id="center" inline>
            <FormControl
              type="text"
              placeholder="What are you looking for?"
              className="mr-sm-2 formFonts formWidth roundedInput"
              ref={searchRef}
            />
            <Button type="submit" variant="outline-success" className="buttonFonts">Find it!</Button>
          </Form>
        </Navbar.Collapse>

        {token ? (
          <Nav>
            <Nav.Link>
              <Link to="/adminpanel">
                <img
                  src="https://image.flaticon.com/icons/png/512/3463/3463339.png"
                  // change icon to admin panel & add conditional rendering for admin
                  width="30"
                  alt="Admin Panel"
                />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/messages">
                <img
                  src="https://image.flaticon.com/icons/png/512/2950/2950657.png"
                  width="30"
                  alt="Messages"
                />
              </Link>
            </Nav.Link>
            <NavDropdown
              title={`Hello ${userToken.username}` || "Hello!"}
              id="basic-nav-dropdown"
              className="navBarSpacing"
            >
              <NavDropdown.Item>
                <Link to="/user_home">User Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/user_profile">User Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/user_settings">User Settings</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={() => localStorage.clear()}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="mr-auto">
            {/*             <Nav.Link>
              <Link to="/user_login">Login</Link>
            </Nav.Link> */}
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="formFonts"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="formFonts"
                    onChange={(e) => setPw(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="buttonFonts" onClick={handleLogin}>
                  Log In
                </Button>
              </Form>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Reset Password
              </NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <Link exact to="/register">
                <Button variant="outline-success" className="buttonFonts">
                  Register
                </Button>{" "}
              </Link>
            </Form>
          </Nav>
        )}
      </Navbar>

      {/* SubNavBar starts here */}
      <Container fluid className="fullWidthImage">
        <Nav
          bg="light"
          expand="lg"
          id="center"
          variant="light"
          defaultActiveKey="/"
          className="color_brandgradient stickyNav"
        >
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link to="/articles/guide" className="mainHeaderFonts color_white"> Guides </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="/articles/visa" className="mainHeaderFonts color_white"> Visas </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <Link to="/articles/healthcare" className="mainHeaderFonts color_white"> Healthcare </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-4">
              <Link to="/articles/lifestyle" className="mainHeaderFonts color_white"> Lifestyle </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
};

export default NavBar;
