import React from 'react';
import ScrollTop from '../ScrollTop';
import resumeHeading from '../../assets/images/resume/resume.svg';
import { NavLink } from 'react-router-dom';

function Contact() {

  return (
    <>
      <div className='case-study-details'>
        <section className='header-panel'>
            <div className="container">
              <div className="row">
                <div className="col"> 
                  <div className="header-heading"> 
                  <img src={resumeHeading} alt='' />
                    </div>  
                </div>
              </div>
            </div>
          </section> 
          <section>
            <div className="container">
              <div className="row">
                <div className="col"> 
                  <div className="contact-body">  
                     Email: subrata.dhal@gmail.com <br/>
                     Phone: +91 9163553305
                    </div>  
                </div>
              </div>
            </div>
          </section> 
          <section>
            <div className="container">
              <div className="row">
                <div className="col"> 
                  <div className="contact-body">  
                      <NavLink to="/portfolio/resume">Resume</NavLink> | <NavLink to="/portfolio/about">About</NavLink>
                  </div>  
                </div>
              </div>
            </div>
          </section> 
      </div>    
    </>
  );
}

export default Contact;
