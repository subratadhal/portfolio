import React from 'react';
import ScrollTop from '../ScrollTop';
import resumeHeading from '../../assets/images/resume/resume.svg';
import { NavLink } from 'react-router-dom';
import PaginationCommon from "../PaginationCommon";
import Heading from "../Heading";

function About() {
  const linkData = {
    prevLink: "/portfolio/resume",
    prevTitle: "Resume",
    prevContent: "View resume and download resume from google drive",
    homeLink: "/portfolio",
    nextLink: "/portfolio/Contact",
    nextTitle: "Contact",
    nextContent: "See contact information for business",
  };

  return (
    <>
      <div className="">
        <Heading title="About" type="bw" />
        <section className="cms-pages">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="about-body">
                  <p>
                    Seasoned UI/UX designer with a decade of experience in
                    innovation, blending design creativity with technical
                    proficiency. Expertise in crafting user-centric interfaces,
                    translating designs into functional and responsive
                    interfaces, and leading cross-functional teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PaginationCommon linkData={linkData} />
        <ScrollTop />
      </div>
    </>
  );
}
 
export default About;
