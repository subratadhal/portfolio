import React from "react";

import { NavLink } from "react-router-dom";
import { JackInTheBox, Fade, Bounce, Zoom } from "react-awesome-reveal";

import slide0 from "../../assets/images/sass/eshop.png";
import slide0Right from "../../assets/images/sass/svg/slide0-right-bottom.png";
import slide0Left from "../../assets/images/sass/svg/slide0-left-bottom.png";

import slide1 from "../../assets/images/sass/ack.png";
import slide1Right from "../../assets/images/sass/svg/slide1-right-bottom.png";
import slide1Left from "../../assets/images/sass/svg/slide1-left-bottom.png";

import slide2 from "../../assets/images/sass/takeoff.png";
import slide2Right from "../../assets/images/sass/svg/slide2-right-bottom.png";
import slide2Left from "../../assets/images/sass/svg/slide2-left-bottom.png";

import ScrollTop from "../ScrollTop";
import Heading from "../Heading";

function Sassdesign() {
  return (
    <>
      <Heading title="Sass Design" type="colored1" />
      <div className="container">
        <div className="row">
          <div className="col">
            {/* eshopbox */}
            <div className="screen-container">
              <div className="sass-slide slide0">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide0} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className="slide-right-img">
                    <img src={slide0Right} alt="" />
                  </div>
                </Fade>
                <JackInTheBox>
                  <div className="slide-left-img">
                    <img src={slide0Left} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link">
                    <NavLink
                      to={"https://www.eshopbox.com"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Web link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* ack */}
            <div className="screen-container">
              <div className="sass-slide slide1">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide1} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox direction="left">
                  <div className="slide-left-img">
                    <img src={slide1Left} alt="" />
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className="slide-right-img">
                    <img src={slide1Right} alt="" />
                  </div>
                </Fade>
                <Bounce>
                  <div className="link">
                    <NavLink
                      to={"https://shorturl.at/Y2xmA"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* takeoff */}
            <div className="screen-container">
              <div className="sass-slide slide2">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide2} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox direction="left">
                  <div className="slide-left-img">
                    <img src={slide2Left} alt="" />
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className="slide-right-img">
                    <img src={slide2Right} alt="" />
                  </div>
                </Fade>
                <Bounce>
                  <div className="link">
                    <NavLink
                      to={"https://shorturl.at/3YOSL"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop />
    </>
  );
}

export default Sassdesign;
