import React, { useEffect } from "react";
import ScrollTop from "../ScrollTop";
import PaginationCommon from "../PaginationCommon";
import Heading from "../Heading";
import { isMobile } from "react-device-detect";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
                    I take great pride in being a UI/UX Designer because it
                    allows me to create meaningful and impactful experiences for
                    users. This role lets me blend creativity with analytical
                    thinking, ensuring that every design decision not only looks
                    good but also functions seamlessly and meets user needs. The
                    challenge of balancing aesthetics with usability and
                    aligning these with business objectives is both exciting and
                    fulfilling.
                    <br />
                    <br />
                    Moreover, as a UI/UX Designer, I get to be at the forefront
                    of innovation, constantly exploring new technologies and
                    design trends. I love the collaborative nature of this work,
                    where I can interact with diverse teams, understand
                    different perspectives, and create holistic solutions. Each
                    project is an opportunity to learn, grow, and make a
                    tangible difference in the lives of users.
                    <br />
                    <br />
                    Ultimately, being a UI/UX Designer means I can contribute to
                    creating better, more intuitive digital experiences that
                    enhance people's daily lives. This ability to combine
                    passion with purpose is what makes me truly proud of my
                    profession.
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
