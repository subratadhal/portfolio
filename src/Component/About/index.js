import React from 'react';
import ScrollTop from "../ScrollTop";
import PaginationCommon from "../PaginationCommon";
import Heading from "../Heading";
import { isMobile } from "react-device-detect";

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
        {!isMobile ? <PaginationCommon linkData={linkData} /> : ""}
        <ScrollTop />
      </div>
    </>
  );
}
 
export default About;
