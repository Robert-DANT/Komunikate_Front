import { useState } from "react";
import { Nav, Image, Name, Container, Row, Col } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import { Link } from "react-router-dom";
import "./HeaderBody.css";
import "../fonts.css";

import Articles from "../Articles/Articles";
import LandingBanner from "../LandingBanner/LandingBanner";

const MainBody = (props) => {
  // const [token, setToken] = useState(props.token);
  const token = localStorage.getItem("token");
  return (
    <Container fluid className="fullWidthImage">
      {/* Subnavbar code moved to Navbar component */}
{/*       <Container fluid className="fullWidthImage">
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
              <Link to="/guide" className="mainHeaderFonts color_white"> Guides </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="/visas" className="mainHeaderFonts color_white"> Visas </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <Link to="/healthInsurance" className="mainHeaderFonts color_white"> Insurance </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-4">
              <Link to="/applications" className="mainHeaderFonts color_white"> Everyday Life </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container> */}
      
      <LandingBanner className="bannerShift" />
      
      <Container className="our-mission-container mainBodyFont justifyText">
        <h1 className="mainHeaderFonts color_lightblue someTopPadding">What we're about!</h1>
        <hr className="color_lightblue_hr" />
        <h5>
          <strong className="color_lightblue">komunikate</strong> is a community 
          of people helping each other figure out all of the necessary steps when immigrating to Germany.

          
          Moving to another country can be challenging for anybody and
          taking the right steps is often a maze that involves
          endless hours of searching the internet to find the right answers. By
          bringing together people who have already gone through the process of
          coming to Germany and people who desire to move there, this community
          will be your definitive guide in finding all your answers without
          needing to go to dozens of websites.
        </h5>
      </Container>
      {/* <div style={{ backgroundImage: `url(${HomePagePic})` }}></div> */}
      {token ? "" : <Articles />}
    </Container>
  );
};

export default MainBody;
