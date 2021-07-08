import React from 'react';
import { Carousel } from "react-bootstrap";
import Carousel01 from "../../images/banner/01_BerlinTurm.jpg";
import Carousel02 from "../../images/banner/02_Guitar.jpg";
import Carousel03 from "../../images/banner/03_BeerOutside.jpg";
import Carousel04 from "../../images/banner/04_RJD6863.jpg";
import Carousel05 from "../../images/banner/05_ThreeWoman.jpg";
import Carousel06 from "../../images/banner/06_RJD9955.jpg"
import Carousel07 from "../../images/banner/07_relocating-to-germany.jpg"
import Carousel08 from "../../images/banner/08_Berlin_Bridge.jpg"
import Carousel09 from "../../images/banner/10_BerlinSky.jpg";
import './LandingBanner.css';
import "../fonts.css"

const LandingBanner = () => {

    return (
        <div>
            <div class="carousel-inner" role="listbox" className="bannerShift boxDropShadow">

            <Carousel fade controls={false} indicators={false}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 imgYShift"
                        src={Carousel01}
                        alt="Karl-Marx-Allee"
                    />
                    <Carousel.Caption>
                    <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">

                    <h3 className="mainHeaderFonts text-left">Berlin</h3>
                        <p className="subHeadlineFonts text-left">Karl-Marx-Allee</p>

                    </div>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100 imgYShift"
                        src={Carousel02}
                        alt="Kantstrasse, Charlottenburg"
                    />

                    <Carousel.Caption>
                        <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">
                        <h3 className="mainHeaderFonts text-left">Berlin</h3>
                        <p className="subHeadlineFonts text-left">Kantstrasse, Charlottenburg</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 imgYShift"
                        src={Carousel03}
                        alt="Central Park"
                    />

                    <Carousel.Caption>
                        <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">
                        <h3 className="mainHeaderFonts text-left">Hamburg</h3>
                        <p className="subHeadlineFonts text-left">
                            Central Park
                        </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 imgYShift"
                        src={Carousel09}
                        alt="The sky over Alexanderplatz"
                    />

                    <Carousel.Caption>
                        <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">
                        <h3 className="mainHeaderFonts text-left">Berlin</h3>
                        <p className="subHeadlineFonts text-left">
                            The sky over Alexanderplatz
                        </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 imgYShift"
                        src={Carousel04}
                        alt="Platz der Republik in Altona"
                    />

                    <Carousel.Caption>
                        <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">
                        <h3 className="mainHeaderFonts text-left">Hamburg</h3>
                        <p className="subHeadlineFonts text-left">
                            Platz der Republik in Altona
                        </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Carousel06}
                        alt="Overlook point at Weißenburgpark"
                    />

                    <Carousel.Caption>
                        <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">
                        <h3 className="mainHeaderFonts text-left">Stuttgart </h3>
                        <p className="subHeadlineFonts text-left">
                            Overlook point at Weißenburgpark
                        </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Carousel07}
                        alt="Frankfurt International Airport"
                    />

                    <Carousel.Caption>
                        <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">
                        <h3 className="mainHeaderFonts text-left">Frankfurt </h3>
                        <p className="subHeadlineFonts text-left">
                            Frankfurt International Airport
                        </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Carousel08}
                        alt="The Molecule Man in the Spree River"
                    />

                    <Carousel.Caption>
                        <div class="text-wrap" className="color_lightblueBox captionShift dropShadow">
                        <h3 className="mainHeaderFonts text-left">Berlin </h3>
                        <p className="subHeadlineFonts text-left">
                            The Molecule Man in the Spree River
                        </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
}

export default LandingBanner;