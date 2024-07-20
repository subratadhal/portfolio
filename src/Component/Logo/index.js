import React from "react";
import { logoData } from "../../data/logo";
import ScrollTop from "../ScrollTop";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import Heading from "../Heading";

function Logo() {
  return (
    <>
      <Heading title="Logo" type="colored1" />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="">
              {logoData.map((data, key) => {
                return (
                  <div className="logo-box" key={key}>
                    <Fade>
                      <JackInTheBox>
                        <h2 className="text-center">{data?.title}</h2>
                      </JackInTheBox>
                      <div className="image-section">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/logo/${data?.url}`}
                          alt=""
                        />
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

export default Logo;
