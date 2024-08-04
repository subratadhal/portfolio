import React, { useEffect } from "react";
import { bannerData } from "../../data/banner";
import ScrollTop from "../ScrollTop";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import Heading from "../Heading";

function Banners() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Heading title="Banners" type="colored1" />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="">
              {bannerData.map((data, key) => {
                return (
                  <div className="banner-box" key={key}>
                    <Fade>
                      <JackInTheBox>
                        <h2 className="text-center">{data?.title}</h2>
                      </JackInTheBox>
                      <div className="image-section">
                        {data?.img?.map((imgData, key) => {
                          return (
                            <img
                              key={key}
                              src={`${process.env.PUBLIC_URL}/images/banners/${imgData}`}
                              alt=""
                            />
                          );
                        })}
                      </div>
                    </Fade>
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

export default Banners;
