import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [percentageStyle1, setPercentageStyle1] = useState(0);
  const [percentageStyle2, setPercentageStyle2] = useState(0);
  const [percentageStyle3, setPercentageStyle3] = useState(0);
  const [percentageStyle4, setPercentageStyle4] = useState(0);
  const [percentageStyle5, setPercentageStyle5] = useState(0);
  const [percentageStyle6, setPercentageStyle6] = useState(0);
  const [percentageStyle7, setPercentageStyle7] = useState(0);
  const [percentageStyle8, setPercentageStyle8] = useState(0);
  const [percentageStyle9, setPercentageStyle9] = useState(0);
  const [percentageStyle10, setPercentageStyle10] = useState(0);

  const handleMouseMoveStyle1 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle1(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle1Reset = () => {
    setPercentageStyle1(0);
  };
  const handleMouseMoveStyle2 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle2(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle2Reset = () => {
    setPercentageStyle2(0);
  };
  const handleMouseMoveStyle3 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle3(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle3Reset = () => {
    setPercentageStyle3(0);
  };
  const handleMouseMoveStyle4 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle4(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle4Reset = () => {
    setPercentageStyle4(0);
  };
  const handleMouseMoveStyle5 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle5(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle5Reset = () => {
    setPercentageStyle5(0);
  };
  const handleMouseMoveStyle6 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle6(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle6Reset = () => {
    setPercentageStyle6(0);
  };
  const handleMouseMoveStyle7 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle7(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle7Reset = () => {
    setPercentageStyle7(0);
  };
  const handleMouseMoveStyle8 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle8(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle8Reset = () => {
    setPercentageStyle8(0);
  };
  const handleMouseMoveStyle9 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle9(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle9Reset = () => {
    setPercentageStyle9(0);
  };
  const handleMouseMoveStyle10 = (e) => {
    const divWidth = e.target.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const mousePercentage = (mouseX / divWidth) * 100;
    setPercentageStyle10(mousePercentage.toFixed(2));
  };
  const handleMouseMoveStyle10Reset = () => {
    setPercentageStyle10(0);
  };

  return (
    <>
      {isMobile ? (
        <div>
          <div className="home-container">
            <div className="widmill-animation">
              <div className="windmill-blades"></div>
            </div>
            <div className="navigation-section">
              <div className="animation">
                <ul>
                  <li>
                    <span className="line"></span>
                    <span className="circle">
                      <NavLink to={"/portfolio/case-study"}>Case Study</NavLink>
                    </span>
                  </li>
                  <li>
                    <span className="line"></span>
                    <span className="circle">
                      <NavLink to={"/portfolio/app-design"}>App Design</NavLink>
                    </span>
                  </li>
                  <li>
                    <span className="line"></span>
                    <span className="circle">
                      <NavLink to={"/portfolio/web-design"}>Web Design</NavLink>
                    </span>
                  </li>
                  <li>
                    <span className="line"></span>
                    <span className="circle">
                      <NavLink to={"/portfolio/sass-design"}>
                        SASS Design
                      </NavLink>
                    </span>
                  </li>
                  <li>
                    <span className="line"></span>
                    <span className="circle">
                      <NavLink to={"/portfolio/logo"}>Logo Design</NavLink>
                    </span>
                  </li>
                  <li>
                    <span className="line"></span>
                    <span className="circle">
                      <NavLink to={"/portfolio/creatives"}>
                        Graphics Design
                      </NavLink>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home-container">
          <div className="widmill-animation">
            <div className="windmill-blades"></div>
          </div>
          <div className="crative">
            <Slider {...settings}>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/00-Research.svg`}
                  alt=""
                />
                <h2>Research</h2>
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/01-User_Persona.svg`}
                  alt=""
                />
                <h2>User Persona</h2>
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/02-Information_Architecture.svg`}
                  alt=""
                />
                <h2>Information Architecture</h2>
              </div>
              <div>
                <h2>Wireframing and Prototyping</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/03-Wireframing_and_Prototyping.svg`}
                  alt=""
                />
              </div>
              <div>
                <h2>Usability Testing</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/04-Usability_Testing.svg`}
                  alt=""
                />
              </div>
              <div>
                <h2>Iteration and Refinement</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/05-Iteration_and_Refinement.svg`}
                  alt=""
                />
              </div>
              <div>
                <h2>Visual Design</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/06-Visual_Design.svg`}
                  alt=""
                />
              </div>
              <div>
                <h2>Collaboration</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/07-Collaboration.svg`}
                  alt=""
                />
              </div>
              <div>
                <h2>Launch and Evaluation</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-slider/08-Launch_and_Evaluation.svg`}
                  alt=""
                />
              </div>
            </Slider>
          </div>
          <div className="navigation-section">
            <ul>
              <li className="link-style-1">
                <NavLink
                  onMouseMove={handleMouseMoveStyle1}
                  onMouseLeave={handleMouseMoveStyle1Reset}
                  style={{ backgroundSize: `${percentageStyle1}%` }}
                  to={"/portfolio/resume"}
                >
                  Resume
                </NavLink>
              </li>
              <li className="link-style-2">
                <NavLink
                  onMouseMove={handleMouseMoveStyle2}
                  onMouseLeave={handleMouseMoveStyle2Reset}
                  style={{ backgroundSize: `${percentageStyle2}%` }}
                  to={"/portfolio"}
                >
                  Banners
                </NavLink>
              </li>
              <li className="link-style-3">
                <NavLink
                  onMouseMove={handleMouseMoveStyle3}
                  onMouseLeave={handleMouseMoveStyle3Reset}
                  style={{ backgroundSize: `${percentageStyle3}%` }}
                  to={"/portfolio/web-design"}
                >
                  Web Design
                </NavLink>
              </li>
              <li className="link-style-4">
                <NavLink
                  onMouseMove={handleMouseMoveStyle4}
                  onMouseLeave={handleMouseMoveStyle4Reset}
                  style={{ backgroundSize: `${percentageStyle4}%` }}
                  to={"/portfolio/case-study"}
                >
                  Case Study
                </NavLink>
              </li>
              <li className="link-style-5">
                <NavLink
                  onMouseMove={handleMouseMoveStyle5}
                  onMouseLeave={handleMouseMoveStyle5Reset}
                  style={{ backgroundSize: `${percentageStyle5}%` }}
                  to={"/portfolio/app-design"}
                >
                  App Design
                </NavLink>
              </li>
              <li className="link-style-7">
                <NavLink
                  onMouseMove={handleMouseMoveStyle7}
                  onMouseLeave={handleMouseMoveStyle7Reset}
                  style={{ backgroundSize: `${percentageStyle7}%` }}
                  to={"/portfolio"}
                >
                  Illustration
                </NavLink>
              </li>
              <li className="link-style-9">
                <NavLink
                  onMouseMove={handleMouseMoveStyle9}
                  onMouseLeave={handleMouseMoveStyle9Reset}
                  style={{ backgroundSize: `${percentageStyle9}%` }}
                  to={"/portfolio"}
                >
                  Creatives
                </NavLink>
              </li>
              <li className="link-style-8">
                <NavLink
                  onMouseMove={handleMouseMoveStyle8}
                  onMouseLeave={handleMouseMoveStyle8Reset}
                  style={{ backgroundSize: `${percentageStyle8}%` }}
                  to={"/portfolio/logo"}
                >
                  Logo
                </NavLink>
              </li>
              <li className="link-style-10">
                <NavLink
                  onMouseMove={handleMouseMoveStyle10}
                  onMouseLeave={handleMouseMoveStyle10Reset}
                  style={{ backgroundSize: `${percentageStyle10}%` }}
                  to={"/portfolio/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="link-style-6">
                <NavLink
                  onMouseMove={handleMouseMoveStyle6}
                  onMouseLeave={handleMouseMoveStyle6Reset}
                  style={{ backgroundSize: `${percentageStyle6}%` }}
                  to={"/portfolio/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="animation">
              <ul>
                <li>
                  <span className="line"></span>
                  <span className="circle"></span>
                </li>
                <li>
                  <span className="line"></span>
                  <span className="circle"></span>
                </li>
                <li>
                  <span className="line"></span>
                  <span className="circle"></span>
                </li>
                <li>
                  <span className="line"></span>
                  <span className="circle"></span>
                </li>
                <li>
                  <span className="line"></span>
                  <span className="circle"></span>
                </li>
                <li>
                  <span className="line"></span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
