import React from "react";
import { Container } from "react-bootstrap";


const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Container className="themed-container footer-container" fluid="true">
     <div className='footer color_darkblueBox'>
       <div>
          <span className="color_white ">Copyright © Komunikate {year} All Rights Reserved</span>
        </div>
        <div>
       </div>
     </div>
    </Container>
  );
};
export default Footer;