import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Hinge, JackInTheBox, Roll, Slide, ZoomRoll, Fade, Rotate, Flip, Bounce, Zoom, Reveal } from "react-awesome-reveal";
//import { Parallax, Background } from 'react-parallax';

import webDesignHeading from '../../assets/images/web/svg/webDesignHeading.svg';

import slide1 from '../../assets/images/web/arbor.png';
import slide1Left from '../../assets/images/web/svg/slide1-left-bottom.svg';
import slide1Right from '../../assets/images/web/svg/slide1-right-bottom.svg';

import slide2 from '../../assets/images/web/eshop.png';
import slide2Right from '../../assets/images/web/svg/slide2-right-bottom.png';
import slide2Left from '../../assets/images/web/svg/slide2-left-bottom.png';

import slide3 from '../../assets/images/web/theautopartsshop.png';
import slide3Right from '../../assets/images/web/svg/slide3-right-bottom.png';
import slide3Left from '../../assets/images/web/svg/slide3-left-bottom.png';

import slide4 from '../../assets/images/web/trianz.png';
import slide4Right from '../../assets/images/web/svg/slide4-right-bottom.svg';
import slide4Left from '../../assets/images/web/svg/slide4-left-bottom.svg';

import slide5 from '../../assets/images/web/hajoona.png';
import slide5Right from '../../assets/images/web/svg/slide5-right-bottom.png';
import slide5Left from '../../assets/images/web/svg/slide5-left-bottom.png';

import slide6 from '../../assets/images/web/forever.png';
import slide6Left from '../../assets/images/web/svg/slide6-right-bottom.png';
import slide6Right from '../../assets/images/web/svg/slide6-left-bottom.png';

import slide7 from '../../assets/images/web/infosky.png';
import slide7Right from '../../assets/images/web/svg/slide7-right-bottom.png';
import slide7Left from '../../assets/images/web/svg/slide7-left-bottom.png';

import slide8 from '../../assets/images/web/morethanjustpart.png';
import slide8Right from '../../assets/images/web/svg/slide8-right-bottom.png';
import slide8Left from '../../assets/images/web/svg/slide8-left-bottom.png';

import slide9 from '../../assets/images/web/ds3.png';
import slide9Right from '../../assets/images/web/svg/slide9-right-bottom.png';
import slide9Left from '../../assets/images/web/svg/slide8-left-bottom.svg';


import slide10 from '../../assets/images/web/speedtrader.png';
import slide10Right from '../../assets/images/web/svg/slide10-right-bottom.png';
import slide10Left from '../../assets/images/web/svg/slide10-left-bottom.png';


import slide11 from '../../assets/images/web/oralarchitect.png';
import slide11Right from '../../assets/images/web/svg/slide11-right-bottom.png';
import slide11Left from '../../assets/images/web/svg/slide11-left-bottom.png';


import slide12 from '../../assets/images/web/relianceprimary.png';
import slide12Right from '../../assets/images/web/svg/slide12-right-bottom.png';
import slide12Left from '../../assets/images/web/svg/slide12-left-bottom.png';


import slide13 from '../../assets/images/web/stayextra.png';
import slide13Right from '../../assets/images/web/svg/slide8-right-bottom.svg';
import slide13Left from '../../assets/images/web/svg/slide8-left-bottom.svg';


import slide14 from '../../assets/images/web/icd.png';
import slide14Right from '../../assets/images/web/svg/slide14-right-bottom.png';
import slide14Left from '../../assets/images/web/svg/slide8-left-bottom.svg';

import slide15 from '../../assets/images/web/chalothirth.png';
import slide15Right from '../../assets/images/web/svg/slide15-right-bottom.png';
import slide15Left from '../../assets/images/web/svg/slide15-left-bottom.png';

import slide16 from '../../assets/images/web/edrugsafety.png';
import slide16Right from '../../assets/images/web/svg/slide16-right-bottom.png';
import slide16Left from '../../assets/images/web/svg/slide16-left-bottom.png';

import slide17 from '../../assets/images/web/csr.png';
import slide17Right from '../../assets/images/web/svg/slide17-right-bottom.png';
import slide17Left from '../../assets/images/web/svg/slide17-left-bottom.png';
import ScrollTop from '../ScrollTop';



function Webdesign() {

  return (
    <>
       <section className='header-panel'>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="header-panel-logo"> 
                <img src={webDesignHeading} alt='' />
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
            {/* arborfinancialgroup */}
            <div className='screen-container'>
              <div className='web-slide slide1'>
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
                    <NavLink  to={'http://arborfinancialgroup.net'} target="_blank" rel="nofollow" >Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* eshopbox Gym */}
            <div className='screen-container'>
              <div className='web-slide slide2'>
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
                    <NavLink  to={'https://www.eshopbox.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* Talk Cast */}
            <div className='screen-container'>
              <div className='web-slide slide3'>
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
                    <NavLink  to={'https://theautopartsshop.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* Aqua Trade */}
            <div className='screen-container'>
              <div className='web-slide slide4'>
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
                    <NavLink  to={'/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* hajoona */}
            <div className='screen-container'>              
              <div className='web-slide slide5'>
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
                    <NavLink  to={'https://hajoona.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
            {/* https://foreverliving.com/ */}
            <div className='screen-container'>
              <div className='web-slide slide6'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide6} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <Fade>
                  <div className='slide-left-img'>
                    <img src={slide6Left} alt=''/>
                  </div>
                </Fade>
                <Rotate>
                  <div className='slide-right-img'>
                    <img src={slide6Right} alt='' />
                  </div>
                </Rotate>
                <Bounce>
                  <div className='link link-slide6'>
                    <NavLink  to={'https://foreverliving.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* https://www.infoskysolutions.com/ */}
            <div className='screen-container'>
              <div className='web-slide slide7'>
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
                    <NavLink  to={'https://www.infoskysolutions.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>
                {/* morethanjustparks  */}
            <div className='screen-container'>
              <div className='web-slide slide8'>
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
                    <NavLink  to={'https://morethanjustparks.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* https://ds3-software.de/  */}
            <div className='screen-container'>
              <div className='web-slide slide9'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide9} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                {/* <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide9Left} alt=''/>
                  </div>
                </JackInTheBox> */}
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide9Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'https://ds3-software.de/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* https://speedtrader.com/ */}
            <div className='screen-container'>
              <div className='web-slide slide10'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide10} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide10Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide10Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'https://speedtrader.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* https://oral-architect.com/ */}
            <div className='screen-container'>
              <div className='web-slide slide11'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide11} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide11Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide11Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'https://oral-architect.com/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* relianceprimary  */}
            <div className='screen-container'>
              <div className='web-slide slide12'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide12} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide12Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide12Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'https://relianceprimary.com'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* Online food  */}
            {/* <div className='screen-container'>
              <div className='slide slide13'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide13} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide13Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide13Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'/'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div> */}

            {/* icd10charts  */}
            <div className='screen-container'>
              <div className='web-slide slide14'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide14} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                {/* <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide14Left} alt=''/>
                  </div>
                </JackInTheBox> */}
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide14Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'http://www.icd10charts.com'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* chalotirth  */}
            <div className='screen-container'>
              <div className='web-slide slide15'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide15} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide15Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide15Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'https://chalotirth.com'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* http://edrugsafety.com/  */}
            <div className='screen-container'>
              <div className='web-slide slide16'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide16} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide16Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide16Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'http://edrugsafety.com'} target="_blank" rel="nofollow">Web link</NavLink>
                  </div>
                </Bounce>
              </div>
            </div>

            {/* CSR Portal */}
            <div className='screen-container'>
              <div className='web-slide slide17'>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={slide17} alt='' className='main-image'/>
                    </Fade>
                  </div>
                </Zoom>
                <JackInTheBox>
                  <div className='slide-left-img'>
                    <img src={slide17Left} alt=''/>
                  </div>
                </JackInTheBox>
                <Fade>
                  <div className='slide-right-img'>
                    <img src={slide17Right} alt='' />
                  </div>
                </Fade>
                <Bounce>
                  <div className='link link-slide8'>
                    <NavLink  to={'http://prodcsrportal.theautopartsshop.com/login'} target="_blank" rel="nofollow">Web link</NavLink>
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

export default Webdesign;
