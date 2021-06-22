import React from 'react';

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import './navBar.css';
import { Link } from "react-router-dom";
import logo from '../logos/Komunikate_Long_Blue_v01.svg';
// import logo from './components/logos/Komunikate_Long_Black_v01.svg';
// import logo from './components/logos/Komunikate_Long_Blue_v01.svg';
// import logo from './components/logos/Komunikate_Long_White_v01.svg';
// import logo from './components/logos/Komunikate_Small_Black_v01.svg';
// import logo from './components/logos/Komunikate_Small_Black_v01.svg';
// import logo from './components/logos/Komunikate_Small_White_v01.svg';


export const NavBar = () => {
  return (
  <>

  <Navbar bg="light" expand="lg">
  <Navbar.Brand>
      <Link to="/home"><img
        src={logo}
        width="280"
        height="50"
        className="d-inline-block align-top"
        alt="Kommunikate"
      /></Link>
  </Navbar.Brand>

  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form id="center" inline>
      <FormControl type="text" placeholder="Search everything ..." className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  <Nav className="mr-auto">
     <NavDropdown title="Login" id="basic-nav-dropdown">
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Reset Password</NavDropdown.Item>
      </NavDropdown>
   </Nav>
   <Form inline>
      <Button variant="outline-success">Register</Button>{' '}
    </Form>
    </Navbar>

    <br />


<Nav bg="light" expand="lg" id="center" variant="tabs" defaultActiveKey="/">

<Nav.Item>
  <Nav.Link eventKey="link-1"><Link to="/guide"> Guide </Link></Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link eventKey="link-2"><Link to="/visas"> Visas </Link></Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link eventKey="link-3"><Link to="/healthInsurance"> healthInsurance </Link></Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link eventKey="link-4"><Link to="/applications"> Applications </Link></Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link eventKey="link-5"><Link to="/forums"> Forums </Link></Nav.Link>
</Nav.Item>

</Nav>

</>

)};


export default NavBar;