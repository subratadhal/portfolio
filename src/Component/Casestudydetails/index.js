import React, { useState, useEffect, useRef  } from 'react';
import { useParams } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import {stockData} from '../../data/casestudy';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import PaginationCaseStudy from '../PaginationCaseStudy';
import ScrollTop from '../ScrollTop';


function Casestudydetails(props) {
  const [item, setIitem] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    const arrayItem = stockData.find(item => item.slug === id);
    setIitem(arrayItem);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className='case-study-details'>
     <section className='header-panel'>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="header-heading"> 
                <h1 className="header-heading-h1" style={{color: item?.color?.primary }}>{item?.title}</h1>
                </div>  
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="hero-banner-case-study">  
                  <img src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.bannerImage}`} alt='' />
                </div>  
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="hero-paragraph-case-study" style={{color: item?.color?.secondary }}>
                {item?.Decription}              
              </div>  
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col technical-logos" style={{background: item?.color?.logosBackground}}>
            <Marquee>
            {item?.techLogos?.map((data, key) => {
              return (
                <img key={key} 
                src={`${process.env.PUBLIC_URL}/images/casestudy/svg/${data}`} alt='' />
              );
            })}      
            </Marquee>                  
            </div>                      
          </div>
        </div>
      </section> 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs
"> 
                  <h2 style={{color: item?.color?.primary }}>Scope Of Work</h2>
                  <p className='section-paragraph' style={{color: item?.color?.secondary }}>
                  {item?.ScopeContent}  
                  </p>

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col ui-ux-section">   
                        <img src={`${process.env.PUBLIC_URL}/images/casestudy/${'ux.svg'}`} alt='' />
                        <h3 style={{color: item?.color?.primary }}>UX Design</h3>
                        <p style={{color: item?.color?.secondary }}>{item?.ScopeUiDesign}</p>
                      </div>
                      <div className="col ui-ux-section">                        
                        <img src={`${process.env.PUBLIC_URL}/images/casestudy/${'ui.svg'}`} alt='' />
                        <h3 style={{color: item?.color?.primary }}>UI Design</h3>
                        <p style={{color: item?.color?.secondary }}>{item?.ScopeUxDesign}</p>
                      </div>
                    </div>
                  </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs
"> 
                  <h2 style={{color: item?.color?.primary }}>Project Goals.</h2>
                  <p className='section-paragraph' style={{color: item?.color?.secondary }}>
                  {item?.ProjectGoal}
                  </p>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col goal-points">
                      {item?.projectGoalUl?.map((data, key) => {
                        return (
                          <div 
                          className='points' 
                          key={key}
                          style={{background: item?.color?.primary, color: item?.color?.primaryText}}
                          >{data}</div>
                        );
                      })}                        
                      </div>                      
                    </div>
                  </div>

              </div>  
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs
"> 
                  <h2 style={{color: item?.color?.primary }}>Research</h2>
                  <p className='section-paragraph' style={{color: item?.color?.secondary }}>
                  {item?.Research}
                  </p>
              </div>  
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs
"> 
                  <h2 style={{color: item?.color?.primary }}>Key Take Away</h2>
                  <p className='section-paragraph'>
                  {item?.keyTakeAwayContent}
                  </p>
                  <div className="container-fluid">
                    <div className="row">                      
                      {item?.keyTakeAway?.map((data, key) => {
                        return (
                          <div className="col-md-6">
                          <div className="key-take-away" key={key}>
                            <div className='kta-number'
                              style={{background: item?.color?.primary, color: item?.color?.primaryText}}
                            >0{key+1}</div>
                            <div 
                              className='kta-text'
                              style={{backgroundImage: `linear-gradient(to right, ${item?.color?.primary}, ${item?.color?.primaryText})`}}
                            >{data}</div>
                          </div>
                          </div> 
                        );
                      })}                                  
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      { item?.UserFlowImage && ( 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs text-center
"> 
                  <h2 style={{color: item?.color?.primary }}>User Flow</h2>
                  <p className='section-paragraph' style={{color: item?.color?.secondary }}>
                    {item?.UserFlow}
                  </p>
                  <img className='user-flow-img' src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.UserFlowImage}`} alt='' />
              </div>  
            </div>
          </div>
        </div>
      </section>
      )}
      { item?.colorPalate && ( 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs portfolio-video">
                  <h2 style={{color: item?.color?.primary }}>Color Palette</h2>
                  <img className='user-flow-img' src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.colorPalate}`} alt='' />
              </div>  
            </div>
          </div>
        </div>
      </section> 
      )}
      { item?.logoDesign && ( 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs portfolio-video">
                  <h2 style={{color: item?.color?.primary }}>Logo Design</h2>
                  <img className='user-flow-img' src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.logoDesign}`} alt='' />
              </div>  
            </div>
          </div>
        </div>
      </section> 
      )}
      { item?.prototypeVideo && ( 
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-cs portfolio-video">
                  <h2 style={{color: item?.color?.primary }}>Prototype Video</h2>
                  <ReactPlayer url={ item?.prototypeVideo}  />
              </div>  
            </div>
          </div>
        </div>
      </section>  
       )}
      <section>
        <div className="container-fluid screens-section" style={{background: item?.color?.screensBackground }}>
          <div className="row">
            <div className="col"> 
              <div className="section-cs text-center"> 
                  <h2 style={{color: item?.color?.primary }}>Screens</h2>                  
              </div> 
              <div className='container' style={{background: item?.color?.screensBackground }}> 
                  <div className="row">
                    <div className="col all-screens"> 
                    {item?.appImg?.map((data, key) => {
                      return (
                        <img src={`${process.env.PUBLIC_URL}/images/casestudy/${data}`} alt='' />
                      );
                    })}   
                    </div>
                  </div>
                </div> 
            </div>
          </div>
        </div>
      </section> 
      <PaginationCaseStudy slug={id}/>
      <ScrollTop />
    </div>
  );
}

export default Casestudydetails;
