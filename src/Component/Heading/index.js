import React from "react";
import { JackInTheBox, Rotate, Bounce, Zoom } from "react-awesome-reveal";

function Heading(props) {
  return (
    <section className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading-container">
              <div className="top-img">
                {props.type === "bw" && (
                  <JackInTheBox direction="left">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/heading-svg/star.svg`}
                      alt=""
                    />
                  </JackInTheBox>
                )}
                {props.type === "colored1" && (
                  <Rotate>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/heading-svg/star1.svg`}
                      alt=""
                    />
                  </Rotate>
                )}
              </div>
              <h1>{props.title}</h1>
              <div className="bottom-img">
                {props.type === "bw" && (
                  <Bounce>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/heading-svg/hash.svg`}
                      alt=""
                    />
                  </Bounce>
                )}
                {props.type === "colored1" && (
                  <Zoom>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/heading-svg/star2.svg`}
                      alt=""
                    />
                  </Zoom>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heading;
