import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Hinge, JackInTheBox, Roll, Slide, ZoomRoll, Fade, Rotate, Flip, Bounce, Zoom, Reveal } from "react-awesome-reveal";
//import { Parallax, Background } from 'react-parallax';

import portfolioTitle from '../../assets/images/app/svg/appDesignHeading.svg';

import slide1 from '../../assets/images/app/ChitChat.png';
import slide1Left from '../../assets/images/app/svg/slide1-left-bottom.svg';
import slide1Right from '../../assets/images/app/svg/slide1-right-bottom.svg';

import slide2 from '../../assets/images/app/FitnessGym.png';
import slide2Right from '../../assets/images/app/svg/slide2-right-bottom.svg';
import slide2Left from '../../assets/images/app/svg/slide2-left-bottom.svg';

import slide3 from '../../assets/images/app/TalkCast.png';
import slide3Right from '../../assets/images/app/svg/slide3-right-bottom.svg';
import slide3Left from '../../assets/images/app/svg/slide3-left-bottom.svg';

import slide4 from '../../assets/images/app/AguaTrade.png';
import slide4Right from '../../assets/images/app/svg/slide4-right-bottom.svg';
import slide4Left from '../../assets/images/app/svg/slide4-left-bottom.svg';

import slide5 from '../../assets/images/app/GraftiChik.png';
import slide5Right from '../../assets/images/app/svg/slide5-right-bottom.svg';
import slide5Left from '../../assets/images/app/svg/slide5-left-bottom.svg';

import slide6 from '../../assets/images/app/FLBook.png';
import slide6Right from '../../assets/images/app/svg/slide6-right-bottom.svg';

import slide7 from '../../assets/images/app/CabMe.png';
import slide7Right from '../../assets/images/app/svg/slide7-right-bottom.svg';
import slide7Left from '../../assets/images/app/svg/slide7-left-bottom.svg';

import slide8 from '../../assets/images/app/Foodcube.png';
import slide8Right from '../../assets/images/app/svg/slide8-right-bottom.svg';
import slide8Left from '../../assets/images/app/svg/slide8-left-bottom.svg';

function Appportfolio() {

  return (
    <>
       <section className='header-panel'>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="header-panel-logo"> 
                <img src={portfolioTitle} alt='' />
                </div>  
            </div>
          </div>
        </div>
      </section> 
      {/* <div className="container">
        <div className="row">
          <div className="col">
<br /><br /><br /><br /><br /><br />
          </div>
          </div>
          </div> */}


      <div className="container">
        <div className="row">
          <div className="col">
            {/* Chit Chat */}
            <div className='screen-container'>
              <div className='slide slide1'>
                <Zoom >
                  <div>
                    <Fade>
                      <img src={slide1} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox direction="left">
                  <div className='slide-left-img'>
                    <img src={slide1Left} alt='' />
                  </div>
                </JackInTheBox>
                {/* <Fade right>
                  <div className='slide1_content_background'>
                    <h2>The Auto Parts Shop</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled but also the leap</p>
                    <NavLink className="slide_link slide1_link" to="/"></NavLink>
                  </div>
                </Fade> */}
                <Rotate direction="right">
                  <div className='slide-right-img'>
                    <img src={slide1Right} alt='' />
                  </div>
                </Rotate>
                <Bounce>
                  <div className='link'>
                    <NavLink  to={'https://www.figma.com/proto/RclfLgY4qwmTUctGXxagMO/Talk-Cast?t=PEc1ZwEzwLcLRxPm-1&scaling=min-zoom&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2'} target="_blank">Prototype link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* Fitness Gym */}
            <div className='screen-container'>
              <div className='slide slide2'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide2} alt=''  className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-right-img'>
                    <img src={slide2Right} alt='' />
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-left-img'>
                    <img src={slide2Left} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link'>
                    <NavLink  to={'https://www.gllgle.com'} target="_blank">Prototype link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* Talk Cast */}
            <div className='screen-container'>
              <div className='slide slide3'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide3} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className='slide-left-img'>
                    <img src={slide3Left} alt=''/>
                  </div>
                </Fade>
                <Rotate>
                  <div className='slide-right-img'>
                    <img src={slide3Right} alt='' />
                  </div>
                </Rotate>
                <Bounce>
                  <div className='link link-slide3'>
                    <NavLink  to={'https://www.figma.com/proto/RclfLgY4qwmTUctGXxagMO/Talk-Cast?node-id=1-10&t=PKsgXmrNnCOZ0sWE-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2'} target="_blank">Prototype link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* Aqua Trade */}
            <div className='screen-container'>
              <div className='slide slide4'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide4} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className='slide-left-img'>
                    <img src={slide4Left} alt=''/>
                  </div>
                </Fade>
                <Rotate>
                  <div className='slide-right-img'>
                    <img src={slide4Right} alt='' />
                  </div>
                </Rotate>
                <Bounce>
                  <div className='link'>
                    <NavLink  to={'https://www.figma.com/proto/EV1hsbhOEpejqJo6oncvFC/Aqua-Trade?node-id=1-164&t=aQfVYOWqdn2zvIaC-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A164'} target="_blank">Prototype link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* GraftiChik */}
            <div className='screen-container'>              
              <div className='slide slide5'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide5} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className='slide-left-img'>
                    <img src={slide5Left} alt=''/>
                  </div>
                </Fade>
                <Rotate>
                  <div className='slide-right-img'>
                    <img src={slide5Right} alt='' />
                  </div>
                </Rotate>
                <Bounce>
                  <div className='link'>
                    <NavLink  to={'https://www.figma.com/proto/9ijNuYQcehSfdzKAwpGr64/GraftiChik?node-id=1-1977&t=as1XLmvro7EMLDqw-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A1977'} target="_blank">Prototype link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* FLBOOK */}
            <div className='screen-container'>
              <div className='slide slide6'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide6} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                {/* <Fade>
                  <div className='slide-left-img'>
                    <img src={slide5Left} alt=''/>
                  </div>
                </Fade> */}
                <Rotate>
                  <div className='slide-right-img'>
                    <img src={slide6Right} alt='' />
                  </div>
                </Rotate>
                <Bounce>
                  <div className='link link-slide6'>
                    <NavLink  to={'https://www.figma.com/proto/7O0dLBYjfaLxs8lzc5K2rt/Flbook?node-id=1-3093&t=qI0Y9fXH0A2hkI4E-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3093'} target="_blank">Prototype link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* CAB ME */}
            <div className='screen-container'>
              <div className='slide slide7'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide7} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide7Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide7Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide7'>
                    <NavLink  to={'https://www.figma.com/proto/wovjWDiOFGVt7WcPeA7ipK/Cab-me-Ride?node-id=314-2061&t=Q1LeIA37EjB1FiEH-1&scaling=scale-down&page-id=0%3A1'} target="_blank">Prototype link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* Online food  */}
            <div className='screen-container'>
              <div className='slide slide8'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide8} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide8Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide8Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'https://www.figma.com/proto/T3C7KhvNsun0TJCM6ilPIU/eat-first?node-id=1-2&t=sikOkKaDtxpgereV-1&scaling=scale-down&page-id=0%3A1'} target="_blank">Prototype link</NavLink>
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

    </>
  );
}

export default Appportfolio;
