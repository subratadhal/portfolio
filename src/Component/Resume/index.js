import React from 'react';
import ScrollTop from '../ScrollTop';
import resumeHeading from '../../assets/images/resume/resume.svg';
import { NavLink } from 'react-router-dom';

function Resume(props) {

  return (
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
              <div className="resume-body">  
                  {/* <img src="" /> */}
                  <h1>Subrata Dhal</h1>
                  <p>Seasoned UI/UX designer with a decade of experience in innovation, blending design creativity with technical proficiency. Expertise in crafting user-centric interfaces, translating designs into functional and responsive interfaces, and leading cross-functional teams.</p>

                  <h3>RESPONSIBILITIES</h3>
                  <ul>
                    <li>Visualize user interfaces for readability, understanding, and accessibility.</li>
                    <li>Conceptualize and develop creative assets from inception to completion.</li>
                    <li>Translate business requirements into visually appealing, user-friendly designs.</li>
                    <li>Stay updated on the latest visual design trends and standards.</li>
                    <li>Conduct user research and usability testing.</li>
                    <li>Develop and propose strategic research and design implementation plans.</li>
                  </ul>
                  <h3>TECHNICAL SKILLS</h3>
                  <h4>UI/UX Designer:</h4>
                    <li>User Interface (UI) Design: Wireframing, Prototyping, Visual design, Interaction design, Information architecture.</li>
                    <li>User Experience (UX) Design: User research, Personas, Usability testing, Journey mapping, User flows.</li>
                    <li>Graphic Design Tools: Canva, Adobe XD, Sketch, Figma, Photoshop, Illustrator.</li>
                    <li>Collaboration: Working with cross-functional teams, Communication and presentation skills.</li>
                    <li>Web Design Principles: Responsive design, Accessibility considerations, Typography, Color theory.</li>
                    <li>Prototyping Tools: InVision, Marvel, Proto.io.</li>

                    <h3>WORK EXPERIENCE (11 Years)</h3>
                    <h4>Team Lead UI/UX (Present)</h4>
                    <p>
                      Spineor Web Services Pvt. Ltd.<br />
                      Mohali, India
                    </p>
                    <p>
                      Lead UI/UX Designer and UI Developer specializing in IT Services and IT Consulting.
                      Optimize SEO strategies, increase website traffic, and enhance user experiences.
                      Translate high-level requirements into seamless interaction flows and tangible design elements.
                    </p>

                    <h3>EDUCATION</h3>
                    <p>Bachelor of Fine Arts (BFA) - 2011<br/>
                    Indira Kala Sangit Vishwavidyalaya, Khayragarh, Chhattisgarh.</p>


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
                      <NavLink to="/portfolio/contact">Contact</NavLink> | <NavLink to="/portfolio/about">About</NavLink>
                  </div>  
                </div>
              </div>
            </div>
          </section> 
      
      <ScrollTop />
    </div>
  );
}

export default Resume;
