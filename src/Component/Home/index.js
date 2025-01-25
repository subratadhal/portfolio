import React, { useState, useRef } from "react";
import { allprojects } from "../../data/allprojects";
import Drawer from "./drawer";

function Home() {
  const [drawer, setDrawer] = useState(0);
  const [project, setProject] = useState(0);
  const [activeSection, setActiveSection] = useState("section0");

  const openDrawerEvent = (item) => {
    setProject(item);
    setDrawer(true);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  const section0Ref = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(ref.current.id);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col">
              <section className="header-inner">
                <div className="brand">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/portrait.png`}
                    alt=""
                  />
                </div>
                <div className="name">
                  <h2>Subrata Dhal</h2>
                </div>
                <ul className="nav">
                  <li>
                    <button
                      onClick={() => scrollToSection(section0Ref)}
                      className={activeSection === "section0" ? "active" : ""}
                    >
                      SAAS
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection(section1Ref)}
                      className={activeSection === "section1" ? "active" : ""}
                    >
                      App
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection(section2Ref)}
                      className={activeSection === "section2" ? "active" : ""}
                    >
                      Web
                    </button>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        {/* <section id="section0" ref={section0Ref} className="section"></section> */}
        <section id="section0" ref={section0Ref} className="section">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="section-header">SaaS (UX/UI)</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {allprojects.map((item, index1) => {
                  return (
                    <>
                      {item?.type === "saas" && (
                        <div className="project-card" key={index1}>
                          <div className="project-card-image">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.img}`}
                              alt=""
                            />
                          </div>
                          <div className="project-card-content">
                            <h3>{item?.title}</h3>
                            <p>{item?.description}</p>
                            <ul className="technology-logos">
                              {item?.techLogos?.map((data, key) => {
                                return (
                                  <li key={key}>
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/casestudy/svg/${data}`}
                                      alt={data}
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                            <ul className="links">
                              <li>
                                <button
                                  className="details-button"
                                  onClick={() => {
                                    openDrawerEvent(item?.id);
                                  }}
                                >
                                  Details
                                </button>
                              </li>
                              {item?.links?.map((link, index) => {
                                return (
                                  <li key={index}>
                                    <a
                                      href={link?.link}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {link?.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="section1" ref={section1Ref} className="section">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="section-header">App (UX/UI)</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {allprojects.map((item, index) => {
                  return (
                    <>
                      {item?.type === "app" && (
                        <div
                          key={index}
                          className={
                            index % 2 === 0 ? "app-card" : "app-card odd-class"
                          }
                        >
                          <div className="app-card-header">
                            {item?.logo && (
                              <div className="app-card-header-logo">
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.logo}`}
                                  alt=""
                                />
                              </div>
                            )}
                            {item?.title && (
                              <div className="app-card-header-title">
                                <h3>{item?.title}</h3>
                              </div>
                            )}
                          </div>
                          <div className="app-card-body">
                            <div className="app-card-content">
                              <p>{item?.description}</p>
                            </div>
                          </div>
                          <div className="app-card-footer">
                            <ul className="links">
                              {item?.id !== 0 && (
                                <li>
                                  <button
                                    className="details-button"
                                    onClick={() => {
                                      openDrawerEvent(item?.id);
                                    }}
                                  >
                                    Details
                                  </button>
                                </li>
                              )}
                              {item?.links?.map((link, index1) => {
                                return (
                                  <li key={index1}>
                                    <a
                                      href={link?.link}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {link?.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.thumb}`}
                            alt=""
                            className="thumb"
                          />
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="section2" ref={section2Ref} className="section">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="section-header">Web (UX/UI)</h2>
              </div>
            </div>
            <div className="row">
              {allprojects.map((item, index1) => {
                return (
                  <>
                    {item?.type === "web" && (
                      <div className="col-6 col-mob-1" key={index1}>
                        <div className="web-card">
                          <div className="web-card-image">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/casestudy/${item?.img}`}
                              alt=""
                            />
                          </div>
                          <div className="web-card-content">
                            <h3>{item?.title}</h3>
                            <p>{item?.description}</p>
                            <ul className="links">
                              {/* <li>
                                <button
                                  className="details-button"
                                  onClick={() => {
                                    openDrawerEvent(item?.id);
                                  }}
                                >
                                  Details
                                </button>
                              </li> */}
                              {item?.links?.map((link, index) => {
                                return (
                                  <li key={index}>
                                    <a
                                      href={link?.link}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {link?.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Drawer open={drawer} dataKey={project} closeDrawer={closeDrawer} />
    </>
  );
}

export default Home;
