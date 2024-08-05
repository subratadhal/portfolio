import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { stockData } from "../../data/casestudy";
import ScrollTop from "../ScrollTop";
import Heading from "../Heading";
import { Fade } from "react-awesome-reveal";

function Casestudylist() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Heading title="Case Study" type="colored1" />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="screen-container case-study-screen-container">
              {stockData.map((data, key) => {
                return (
                  <div className="list-box" key={key}>
                    <NavLink
                      to={`/case-study-details/${data?.slug}`}
                      rel="nofollow"
                    >
                      <div className="image-section">
                        <Fade>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/casestudy/${data?.paginationBanner}`}
                            alt=""
                          />
                        </Fade>
                      </div>
                      <div className="content-section">
                        <Fade>
                          <h2>{data?.title}</h2>
                          <p>{data?.ShortDecription}</p>
                          {data?.type?.map((item, key) => {
                            return (
                              <ul className="case-study-list">
                                <li className="key-take-away" key={key}>
                                  {item}
                                </li>
                              </ul>
                            );
                          })}
                        </Fade>
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

export default Casestudylist;
