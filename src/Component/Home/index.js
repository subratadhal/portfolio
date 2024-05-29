import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Hinge, JackInTheBox, Roll, Slide, ZoomRoll, Fade, Rotate, Flip, Bounce, Zoom, Reveal } from "react-awesome-reveal";
//import { Parallax, Background } from 'react-parallax';
import img from '../../assets/images/tab.png';
import img1 from '../../assets/images/svg/slide1_small.svg';
import img2 from '../../assets/images/svg/slide1_big.svg';
import img3 from '../../assets/images/svg/slide2_big.svg';

import slide1 from '../../assets/images/ChitChat.png';
import slide1Left from '../../assets/images/svg/slide1-left-bottom.svg';
import slide1Right from '../../assets/images/svg/slide1-right-bottom.svg';

import slide2 from '../../assets/images/FitnessGym.png';
import slide2Right from '../../assets/images/svg/slide2_big.svg';
import slide2Left from '../../assets/images/svg/slide2-left-bottom.svg';

import slide3 from '../../assets/images/TalkCast.png';
import slide3Right from '../../assets/images/svg/slide3-right-bottom.svg';
import slide3Left from '../../assets/images/svg/slide3-left-bottom.svg';

import slide4 from '../../assets/images/AguaTrade.png';
import slide4Right from '../../assets/images/svg/slide4-right-bottom.svg';
import slide4Left from '../../assets/images/svg/slide4-left-bottom.svg';

import slide5 from '../../assets/images/GraftiChik.png';
import slide5Right from '../../assets/images/svg/slide5-right-bottom.svg';
import slide5Left from '../../assets/images/svg/slide5-left-bottom.svg';

import slide6 from '../../assets/images/FLBook.png';
import slide6Right from '../../assets/images/svg/slide6-right-bottom.svg';

import slide7 from '../../assets/images/CabMe.png';
import slide7Right from '../../assets/images/svg/slide7-right-bottom.svg';
import slide7Left from '../../assets/images/svg/slide7-left-bottom.svg';

import slide8 from '../../assets/images/Foodcube.png';
import slide8Right from '../../assets/images/svg/slide8-right-bottom.svg';
import slide8Left from '../../assets/images/svg/slide8-left-bottom.svg';

function Home() {

  return (
    <>
      {/* <section className='header-panel'>
        <div class="container">
          <div class="row">
            <div class="col">

            </div>
          </div>
        </div>
      </section> */}
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
              </div>
            </div>

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
              </div>
            </div>

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
              </div>
            </div>

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
              </div>
            </div>

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
              </div>
            </div>

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
              </div>
            </div>

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
              </div>
            </div>

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

export default Home;
