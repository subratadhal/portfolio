import React, { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { isMobile } from "react-device-detect";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { sassprojects } from "../../data/allprojects";
import Casestudydetails from "../Casestudydetails";

const Drawer = ({ open, dataKey, closeDrawer }) => {
  const myRef = useRef(null);
  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollTo(0, 0);
    }
  }, []);
  return (
    <>
      <div className={`${open ? "drawer open" : "drawer"}`}>
        <div className="drawer-main">
          <div className="drawer-main-inner">
            <div className="header-section"></div>
            <div className="content-section" ref={myRef}>
              <Casestudydetails id={dataKey} />
            </div>
          </div>
        </div>
        <div className="drawer-close" onClick={closeDrawer}></div>
      </div>
      <div className={`${open ? "backdraw open" : "backdraw"}`}></div>
    </>
  );
};

export default Drawer;
