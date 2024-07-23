import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { JackInTheBox, Fade, Bounce, Zoom } from "react-awesome-reveal";

// import portfolioTitle from "../../assets/images/app/svg/appDesignHeading.svg";

import slide1 from "../../assets/images/app/ChitChat.png";
import slide1Left from "../../assets/images/app/svg/slide1-left-bottom.svg";
import slide1Right from "../../assets/images/app/svg/slide1-right-bottom.svg";

import slide2 from "../../assets/images/app/FitnessGym.png";
import slide2Right from "../../assets/images/app/svg/slide2-right-bottom.svg";
import slide2Left from "../../assets/images/app/svg/slide2-left-bottom.svg";

import slide3 from "../../assets/images/app/TalkCast.png";
import slide3Right from "../../assets/images/app/svg/slide3-right-bottom.svg";
import slide3Left from "../../assets/images/app/svg/slide3-left-bottom.svg";

import slide4 from "../../assets/images/app/AguaTrade.png";
import slide4Right from "../../assets/images/app/svg/slide4-right-bottom.svg";
import slide4Left from "../../assets/images/app/svg/slide4-left-bottom.svg";

import slide5 from "../../assets/images/app/banner-graftichik.png";
import slide5Right from "../../assets/images/app/svg/slide5-right-bottom.svg";
import slide5Left from "../../assets/images/app/svg/slide5-left-bottom.svg";

import slide6 from "../../assets/images/app/FLBook.png";
import slide6Right from "../../assets/images/app/svg/slide6-right-bottom.svg";

import slide7 from "../../assets/images/app/banner-beenow.png";
import slide7Right from "../../assets/images/app/svg/slide7-right-bottom.svg";
import slide7Left from "../../assets/images/app/svg/slide7-left-bottom.svg";

import slide8 from "../../assets/images/app/banner-quickeats.png";
import slide8Right from "../../assets/images/app/svg/slide8-right-bottom.svg";
import slide8Left from "../../assets/images/app/svg/slide8-left-bottom.svg";
import ScrollTop from "../ScrollTop";
import Heading from "../Heading";

function Appportfolio() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Heading title="App Design" type="colored1" />
      <div className="container">
        <div className="row">
          <div className="col">
            {/* BeeNow */}
            <div className="screen-container">
              <div className="slide slide7">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide7} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className="slide-left-img">
                    <img src={slide7Left} alt="" />
                  </div>
                </Fade>
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide7Right} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link link-slide7">
                    <NavLink
                      to={"https://shorturl.at/pnrXL"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* Quick Eats  */}
            <div className="screen-container">
              <div className="slide slide8">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide8} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className="slide-left-img">
                    <img src={slide8Left} alt="" />
                  </div>
                </Fade>
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide8Right} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link link-slide8">
                    <NavLink
                      to={"https://shorturl.at/NcU3L"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* Chit Chat */}
            <div className="screen-container">
              <div className="slide slide1">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide1} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className="slide-left-img">
                    <img src={slide1Left} alt="" />
                  </div>
                </Fade>
                {/* <Fade right>
                  <div className='slide1_content_background'>
                    <h2>The Auto Parts Shop</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled but also the leap</p>
                    <NavLink className="slide_link slide1_link" to="/"></NavLink>
                  </div>
                </Fade> */}
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide1Right} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link">
                    <NavLink
                      to={"https://shorturl.at/kwKN2"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* Fitness Gym */}
            <div className="screen-container">
              <div className="slide slide2">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide2} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide2Right} alt="" />
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className="slide-left-img">
                    <img src={slide2Left} alt="" />
                  </div>
                </Fade>
                <Bounce>
                  <div className="link">
                    <NavLink
                      to={"https://shorturl.at/F9qRx"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* Talk Cast */}
            <div className="screen-container">
              <div className="slide slide3">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide3} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className="slide-left-img">
                    <img src={slide3Left} alt="" />
                  </div>
                </Fade>
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide3Right} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link link-slide3">
                    <NavLink
                      to={"https://shorturl.at/OkJd5"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* Aqua Trade */}
            <div className="screen-container">
              <div className="slide slide4">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide4} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className="slide-left-img">
                    <img src={slide4Left} alt="" />
                  </div>
                </Fade>
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide4Right} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link">
                    <NavLink
                      to={"https://shorturl.at/RDyJI"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* GraftiChik */}
            <div className="screen-container">
              <div className="slide slide5">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide5} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className="slide-left-img">
                    <img src={slide5Left} alt="" />
                  </div>
                </Fade>
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide5Right} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link">
                    <NavLink
                      to={"https://shorturl.at/Zp8Jq"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* FLBOOK */}
            <div className="screen-container">
              <div className="slide slide6">
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide6} alt="" className="main-image" />
                    </Fade>
                  </div>
                </Zoom>
                {/* <Fade>
                  <div className='slide-left-img'>
                    <img src={slide5Left} alt=''/>
                  </div>
                </Fade> */}
                <JackInTheBox>
                  <div className="slide-right-img">
                    <img src={slide6Right} alt="" />
                  </div>
                </JackInTheBox>
                <Bounce>
                  <div className="link link-slide6">
                    <NavLink
                      to={"https://shorturl.at/h4c6f"}
                      target="_blank"
                      rel="nofollow"
                    >
                      Prototype link
                    </NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Reveal effect="slide-in-right">
                  <div className='slide1_content_background'>
                    <h2>The Auto Parts Shop</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled but also the leap</p>
                    <NavLink className="slide_link slide1_link" to="/"></NavLink>
                  </div>
                </Reveal> */}
      <ScrollTop />
    </>
  );
}

export default Appportfolio;
