import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import webDesignHeading from '../../assets/images/svg/case-study.svg';
import {stockData} from '../../data/casestudy';
import ScrollTop from "../ScrollTop";
import Heading from "../Heading";
import { Fade } from "react-awesome-reveal";

function Casestudylist() {
  return (
    <>
      <Heading title="case study" type="colored1" />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="screen-container case-study-screen-container">
              {stockData.map((data, key) => {
                return (
                  <div className="list-box" key={key}>
                    <NavLink
                      to={`/portfolio/case-study-details/${data?.slug}`}
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
