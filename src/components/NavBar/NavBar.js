import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import "./NavBar.css";
import "../fonts.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import logo from "../../images/logos/Komunikate_Long_Blue_sub_v03.svg";
// import logo from './components/logos/Komunikate_Long_Black_v01.svg';
// import logo from './components/logos/Komunikate_Long_Blue_v01.svg';
// import logo from './components/logos/Komunikate_Long_White_v01.svg';
// import logo from './components/logos/Komunikate_Small_Black_v01.svg';
// import logo from './components/logos/Komunikate_Small_Black_v01.svg';
// import logo from './components/logos/Komunikate_Small_White_v01.svg';
=======
import logo from "../../images/logos/Komunikate_Long_Blue_v01.svg";
>>>>>>> 60598f4434f6f0c49cef66ff8997d7a1cddd6f65

const NavBar = (props) => {
  /*   const token = localStorage.usertoken; */
  // console.log(props);
  // const [token, setToken] = useState(props.token);
  console.log(props.token);
  /*   const test = true; */
  const token = localStorage.getItem("token");
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
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
          
          <Form id="center" inline>
            <FormControl
              type="text"
              placeholder="What are you looking for?"
              className="mr-sm-2 formFonts formWidth roundedInput"
            />
            <Button variant="outline-success" className="buttonFonts">Find it!</Button>
          </Form>
        </Navbar.Collapse>
    
        {token ? (
          <Nav>
            <Nav.Link>
              <Link to="/messages">
                <img
                  src="https://image.flaticon.com/icons/png/512/2950/2950657.png"
                  width="30"
                  alt="Messages"
                />
              </Link>
            </Nav.Link>
            <NavDropdown title="Username" id="basic-nav-dropdown" className="navBarSpacing">
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
              <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="mr-auto">
{/*             <Nav.Link>
              <Link to="/user_login">Login</Link>
<<<<<<< HEAD
            </Nav.Link> */}
            <NavDropdown title="Login" id="basic-nav-dropdown">
=======
            </Nav.Link>
           <NavDropdown title="Login" id="basic-nav-dropdown">
>>>>>>> 60598f4434f6f0c49cef66ff8997d7a1cddd6f65
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className="formFonts" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className="formFonts" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="buttonFonts">
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
                <Button variant="outline-success" className="buttonFonts">Register</Button>{" "}
              </Link>
            </Form>
          </Nav>
        )}
      </Navbar>
    </>
  );
};

export default NavBar;
