import React, { useState, useEffect, useRef } from "react";

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import webDesignHeading from '../../assets/images/svg/case-study.svg';

import {stockData} from '../../data/casestudy';

//import IMG_PATH from '../../assets/images/casestudy/1/banner.png';



function Casestudylist() {

const p = window.location.href;
const IMG_PATH = '/casestudy/1/';


const pathRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current && circleRef.current) {
        const path = pathRef.current;
        const circle = circleRef.current;

        const pathLength = path.getTotalLength();
        const scrollY = window.scrollY;
        const scrollPercentage = scrollY / (document.body.scrollHeight - window.innerHeight);
        const point = path.getPointAtLength(scrollPercentage * pathLength);

        circle.setAttribute('cx', point.x);
        circle.setAttribute('cy', point.y);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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


      <div className="scroll-container">
      <svg id="path-svg" width="246" height="1633" viewBox="0 0 246 1633" xmlns="http://www.w3.org/2000/svg">
  
        <path 
          ref={pathRef} 
          id="animation-path" 
          fill="transparent" 
          stroke="black" 
          strokeWidth="2"
          d="M1.5 2C100 80 280.2 280.5 213 458.5C129 681 -82.5 892.5 45 1045C172.5 1197.5 305.5 1413.5 213 1573C139 1700.6 76.8333 1589.5 55 1518" stroke="black" stroke-width="3"
        />
        <circle ref={circleRef} id="animated-circle" cx="0" cy="0" r="25" fill="red"/>
      </svg>
      <div className="content">
        <div style={{ height: '2000vh' }}></div>
      </div>
    </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className='screen-container'>
              {stockData.map((data, key) => {
                return (
                  <div key={key}>
                    {data.title }
                    <NavLink to={`/portfolio/case-study-details/${data.slug}`}>{data.title }</NavLink>
                    {/* <img src={`${process.env.PUBLIC_URL}/images/casestudy/1/banner.png`} />  */}
                  </div>
                );
              })}
              <div className='web-slide slide1'>
             
              </div>
            </div>
          </div>
        </div>
      </div>       
    </>
  );
}

export default Casestudylist;
