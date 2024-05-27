import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Roll, Fade, Rotate, Flip, Bounce, Zoom, Reveal } from "react-awesome-reveal";
//import { Parallax, Background } from 'react-parallax';
import img from '../../assets/images/tab.png';
import img1 from '../../assets/images/svg/slide1_small.svg';
import img2 from '../../assets/images/svg/slide1_big.svg';
import img3 from '../../assets/images/svg/slide2_big.svg';


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
      <section className='clubs-panel'>

      </section>
      <section className='parents-panel'>
      </section>
      <div class="container">
        <div class="row">
          <div class="col">
            <div className='screen-container'>
              {/* <img src={img1} alt='' /> */}
              <div className='slide slide1'>
                <Roll>
                  <div className='slide1-left-img'>
                    <img src={img2} alt='' />
                  </div>
                </Roll>
                <Zoom>
                  <div>
                    <Fade>
                      <img src={img} alt='' />
                    </Fade>
                  </div>
                </Zoom>
                <Flip right>
                  <div className='slide1_content_background'>
                    <h2>The Auto Parts Shop</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled but also the leap</p>
                    <NavLink className="slide_link slide1_link" to="/"></NavLink>
                  </div>
                </Flip>
                <Rotate>
                  <div className='slide1-right-img'>
                    <img src={img1} alt='' />
                  </div>
                </Rotate>
              </div>
            </div>
            <div className='screen-container'>
              {/* <img src={img1} alt='' /> */}
              <div className='slide slide2'>
                {/* <Roll>
                  <div className='slide2-left-img'>
                    <img src={img2} alt='' />
                  </div>
                </Roll> */}
                <Zoom>
                  <div>
                    <Fade>
                      <img src={img} alt='' />
                    </Fade>
                  </div>
                </Zoom>
                <Rotate>
                  <div className='slide2-right-img'>
                    <img src={img3} alt='' />
                  </div>
                </Rotate>
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
