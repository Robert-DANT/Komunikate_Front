import React, { Component } from 'react';

import {
    Nav,
  Image,
  Name,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import './mainBody.css';
import HomePagePic from '../pics/HomePageBackgroundPic.jpg';


class MainBody extends Component {
  render()  {
    return (
  
  <>
  <Container >
    <Row>
      <Col id="center" xs={50} md={50}>
      <Image  src={HomePagePic} fluid />
    </Col>
    </Row>
  </Container>


<br />
<br />
<h1>Our Mission</h1>

<br />
<br />
  <p>

  komunicate is a community of people who have or want to move to Germany. Moving to a new a country can be challenging for anybody and figuring out the right steps to take is often a maze that involves endless hours of searching the internet to find the right answers.

By bringing together people who have already gone through the process of coming to Germany and people who desire to move there, this community will be your definitive guide in finding all your answers without needing to go to dozens of websites.
  </p>

  <div style={{backgroundImage: `url(${HomePagePic})` }}></div>
</>

);
}
}

export default MainBody;