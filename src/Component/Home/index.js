import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Hinge, JackInTheBox, Roll, Slide, ZoomRoll, Fade, Rotate, Flip, Bounce, Zoom, Reveal } from "react-awesome-reveal";
//import { Parallax, Background } from 'react-parallax';

import portfolioTitle from '../../assets/images/svg/portfolio-title.svg';

function Home() {

  return (
    <>
       <section className='header-panel'>
        <div class="container">
          <div class="row">
            <div class="col"> 
              <div class="header-panel-logo"> 
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
home
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
