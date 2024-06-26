import React from "react";
import { NavLink } from 'react-router-dom';
import LogoImage from '../../assets/images/svg/logo.svg';
import {stockData} from '../../data/casestudy';
import ScrollTop from "../ScrollTop";
import { Hinge, JackInTheBox, Roll, Slide, ZoomRoll, Fade, Rotate, Flip, Bounce, Zoom, Reveal } from "react-awesome-reveal";

function Logo() {
  return (
    <>
    <section className='header-panel'>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="header-panel-logo"> 
                <img src={LogoImage} alt='' />
                </div>  
            </div>
          </div>
        </div>
      </section> 
     
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='screen-container case-study-screen-container'>
              {stockData.map((data, key) => {
                return (
                  <div className="list-box" key={key}>
                    <NavLink to={`/portfolio/case-study-details/${data?.slug}`} rel="nofollow">
                      <div className="image-section">
                        <img src={`${process.env.PUBLIC_URL}/images/casestudy/${data?.paginationBanner}`} alt='' />
                      </div>
                      <div className="content-section">
                        <h2>{data?.title}</h2>
                        <p>{data?.ShortDecription }</p>
                        {data?.type?.map((item, key) => {
                          return (
                            <ul>
                              <li className="key-take-away" key={key}>
                                {item}
                              </li>
                            </ul>
                          );
                        })}    


                      </div>                    
                   </NavLink>     
                                  
                  </div>
                );
              })}              
            </div>
          </div>
        </div>
      </div>       
      <ScrollTop />
    </>
  );
}

export default Logo;
