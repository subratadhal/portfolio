import React, { useEffect } from "react";
import ScrollTop from "../ScrollTop";
import PaginationCommon from "../PaginationCommon";
import Heading from "../Heading";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

const SetArrow = () => {
  return (
    <span>
      <img
        className="cicle"
        src={`${process.env.PUBLIC_URL}/images/cms-page-icons/circle.svg`}
        alt=""
      />
      <img
        className="arrow"
        src={`${process.env.PUBLIC_URL}/images/cms-page-icons/arrow.svg`}
        alt=""
      />
    </span>
  );
};

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const linkData = {
    prevLink: "/about",
    prevTitle: "About",
    prevContent: "View resume and download resume from google drive",
    homeLink: "",
    nextLink: "/Resume",
    nextTitle: "Resume",
    nextContent: "View resume and download resume from google drive",
  };

  return (
    <>
      <div className="">
        <Heading title="Contact" type="bw" />
        <section className="cms-pages">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="contact-body">
                  <h3>Primary</h3>
                  <ul>
                    <li>
                      <a href="mailto:subrata.dhal@gmail.com">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cms-page-icons/gmail.svg`}
                          alt=""
                        />
                        subrata.dhal@gmail.com
                        <SetArrow></SetArrow>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+1234567890">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cms-page-icons/call.svg`}
                          alt=""
                        />
                        +91 9163553305
                        <SetArrow></SetArrow>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="contact-links">
                  <h3>Social Links</h3>
                  {isMobile ? (
                    <ul className="mobile-social-links">
                      <li>
                        <NavLink
                          to={`https://www.linkedin.com/in/subratadhal`}
                          rel="nofollow"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/cms-page-icons/linkedin.svg`}
                            alt=""
                          />
                        </NavLink>

                        <NavLink
                          to={`https://www.behance.net/subratadha81b8`}
                          rel="nofollow"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/cms-page-icons/behance.svg`}
                            alt=""
                          />
                        </NavLink>

                        <NavLink
                          to={`https://in.pinterest.com/subratadhal`}
                          rel="nofollow"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/cms-page-icons/pinterest.svg`}
                            alt=""
                          />
                        </NavLink>
                      </li>
                    </ul>
                  ) : (
                    <ul className="desktop-social-links">
                      <li>
                        <NavLink
                          to={`https://www.linkedin.com/in/subratadhal`}
                          rel="nofollow"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/cms-page-icons/linkedin.svg`}
                            alt=""
                          />
                          https://www.linkedin.com/in/subratadhal
                          <SetArrow></SetArrow>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`https://www.behance.net/subratadha81b8`}
                          rel="nofollow"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/cms-page-icons/behance.svg`}
                            alt=""
                          />
                          https://www.behance.net/subratadha81b8
                          <SetArrow></SetArrow>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`https://in.pinterest.com/subratadhal`}
                          rel="nofollow"
                          target="_blank"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/cms-page-icons/pinterest.svg`}
                            alt=""
                          />
                          https://in.pinterest.com/subratadhal
                          <SetArrow></SetArrow>
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
      </div>
      {!isMobile ? <PaginationCommon linkData={linkData} /> : ""}
      <ScrollTop />
    </>
  );
}

export default Contact;
