import React from 'react';
import {
    Carousel,
    Container,
    Row,
    Col,
    ListGroup,
    Form,
    Button,
    Popover,
    OverlayTrigger,
} from "react-bootstrap";
import Carousel01 from "../../images/banner/01_BerlinTurm.jpg";
import Carousel02 from "../../images/banner/02_Guitar.jpg";
import Carousel03 from "../../images/banner/03_BeerOutside.jpg";
import Carousel04 from "../../images/banner/04_Cafe.jpg";
import Carousel05 from "../../images/banner/05_ThreeWoman.jpg";
import './LandingBanner.css';


const LandingBanner = () => {

    return (
        <div>
            <div class="carousel-inner" role="listbox" style=" width:100%; height: 500px !important;">

            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Carousel01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Carousel02}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Carousel03}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Berlin</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
}

export default LandingBanner;