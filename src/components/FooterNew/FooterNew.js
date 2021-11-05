import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <Container className="themed-container footer-container" fluid="true">
        <div className='footer color_darkblueBox'>
              <div>
                <span className="color_white">Copyright © Komunikate {year} All Rights Reserved</span>
              </div>
        </div>
    </Container>
  );
};

export default Footer;