import React from 'react';
import ScrollTop from '../ScrollTop';
import resumeHeading from '../../assets/images/resume/resume.svg';
import { NavLink } from 'react-router-dom';

function About() {

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
                  <div className="about-body">  
                    <p>Seasoned UI/UX designer with a decade of experience in innovation, blending design creativity with technical proficiency. Expertise in crafting user-centric interfaces, translating designs into functional and responsive interfaces, and leading cross-functional teams.</p>
                  </div>  
                </div>
              </div>
            </div>
          </section> 
          <section>
            <div className="container">
              <div className="row">
                <div className="col"> 
                  <div className="page-link-body">  
                    
                    <NavLink to="/portfolio/resume" className="link left">
                      <p><strong>Resume</strong></p>
                      <p>View resume and download resume from google drive</p>
                    </NavLink> 

                    <div className='pagination-list-menu'>
                      <NavLink to={`/portfolio/case-study`} rel="nofollow">                     
                        <span></span>
                        <span></span>
                        <span></span>
                      </NavLink>
                    </div>

                    <NavLink to="/portfolio/Contact" className="link right">
                      <p><strong>Contact</strong></p>
                      <p>See contact information for business</p>
                    </NavLink>
                  </div>  
                </div>
              </div>
            </div>
          </section> 
      </div>    
    </>
  );
}
 
export default About;
