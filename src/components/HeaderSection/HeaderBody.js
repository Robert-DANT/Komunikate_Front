import { useState } from "react";
import { Nav, Image, Name, Container, Row, Col } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import { Link } from "react-router-dom";
import "./HeaderBody.css";
import "../fonts.css";
import HomePagePic from "../../images/pics/HomePageBackgroundPic.jpg";
import Articles from "../Articles/Articles";

const MainBody = (props) => {
  // const [token, setToken] = useState(props.token);
  const token = localStorage.getItem("token");
  return (
    <Container fluid className="fullWidthImage">
      <Container fluid>
        <Nav
          bg="light"
          expand="lg"
          id="center"
          variant="tabs"
          defaultActiveKey="/"
        >
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link to="/guide"> Guide </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="/visas"> Visas </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <Link to="/healthInsurance"> HealthInsurance </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-4">
              <Link to="/applications"> Applications </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col id="center" xs={50} md={50}>
            <Image className="header-image bannerShift" src={HomePagePic} fluid />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <h1 className="mainHeaderFonts color_lightblue">Our Mission</h1>

      <Container className="our-mission-container mainBodyFont">
        <h4>
          komunikate is a community of people who have moved to Germany or want to move to
          Germany. Moving to a new a country can be challenging for anybody and
          figuring out the right steps to take is often a maze that involves
          endless hours of searching the internet to find the right answers. By
          bringing together people who have already gone through the process of
          coming to Germany and people who desire to move there, this community
          will be your definitive guide in finding all your answers without
          needing to go to dozens of websites.
        </h4>
      </Container>
      {/* <div style={{ backgroundImage: `url(${HomePagePic})` }}></div> */}
      {token ? "" : <Articles />}
    </Container>
  );
};

export default MainBody;
