import React, { Component } from 'react';

import { Image, Container, Row, Col, Carousel, } from "react-bootstrap";
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import './mainBody.css';
import HomePagePic from '../pics/HomePageBackgroundPic.jpg';


const Sliders = () => {
    return (

<>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="HomePageBackgroundPic.jpg/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="HomePageBackgroundPic.jpg/800x400?text=First slide&bg=373940"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="HomePageBackgroundPic.jpg/800x400?text=First slide&bg=373940"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Berlin</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</>

);
}

export default Sliders;