import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/style.scss";
import Home from "./Component/Home";
import About from "./Component/About";
import Appportfolio from "./Component/Appportfolio";
import Webdesign from "./Component/Webdesign";
import Casestudylist from "./Component/Casestudylist";
import Casestudydetails from "./Component/Casestudydetails";
import Resume from "./Component/Resume";
import Contact from "./Component/Contact";
import Logo from "./Component/Logo";
import { JackInTheBox, Slide, Bounce } from "react-awesome-reveal";

function Menu({ onMenuChildComponentClick }) {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/portfolio" && (
        <div
          className="menu-button"
          role="button"
          onClick={onMenuChildComponentClick}
        >
          <span className="menu-button-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      )}
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const menuOnClick = () => {
    setMenu((prev) => !prev);
  };

  return (
    <Router>
      <header className={menu ? "menu-profile open" : "menu-profile"}>
        <div className="menu-close">
          <Slide>
            {" "}
            <NavLink to="/portfolio" onClick={() => menuOnClick()}>
              {"<"} Home
            </NavLink>
          </Slide>
        </div>
        <ul>
          <li>
            <div className="menu-box">
              <div className="menu-heading">
                <JackInTheBox>UI/UX</JackInTheBox>
              </div>
              <div className="nav-link">
                <Bounce>
                  <NavLink
                    to="/portfolio/app-design"
                    onClick={() => menuOnClick()}
                  >
                    App
                  </NavLink>
                </Bounce>
              </div>
              <div className="nav-link">
                <Bounce>
                  <NavLink
                    to="/portfolio/web-design"
                    onClick={() => menuOnClick()}
                  >
                    Web
                  </NavLink>
                </Bounce>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-box">
              <div className="menu-heading">
                <JackInTheBox>Case Study</JackInTheBox>
              </div>
              <div className="nav-link">
                <Bounce>
                  {" "}
                  <NavLink
                    to="/portfolio/case-study"
                    onClick={() => menuOnClick()}
                  >
                    App & Web
                  </NavLink>
                </Bounce>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-box">
              <div className="menu-heading">
                <JackInTheBox>Graphics</JackInTheBox>
              </div>
              <div className="nav-link">
                <Bounce>
                  {" "}
                  <NavLink to="/portfolio/logo" onClick={() => menuOnClick()}>
                    Logo
                  </NavLink>
                </Bounce>
              </div>
              <div className="nav-link">
                <Bounce>
                  {" "}
                  <NavLink
                    to="/portfolio/creatives"
                    onClick={() => menuOnClick()}
                  >
                    Creatives
                  </NavLink>
                </Bounce>
              </div>
              <div className="nav-link">
                <Bounce>
                  {" "}
                  <NavLink
                    to="/portfolio/banners"
                    onClick={() => menuOnClick()}
                  >
                    Banners
                  </NavLink>
                </Bounce>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-box">
              <div className="menu-heading">
                <JackInTheBox>Business</JackInTheBox>
              </div>
              <div className="nav-link">
                <Bounce>
                  {" "}
                  <NavLink to="/portfolio/resume" onClick={() => menuOnClick()}>
                    Resume
                  </NavLink>
                </Bounce>
              </div>
              <div className="nav-link">
                <Bounce>
                  {" "}
                  <NavLink to="/portfolio/about" onClick={() => menuOnClick()}>
                    About
                  </NavLink>
                </Bounce>
              </div>
              <div className="nav-link">
                <Bounce>
                  {" "}
                  <NavLink
                    to="/portfolio/contact"
                    onClick={() => menuOnClick()}
                  >
                    Contact
                  </NavLink>
                </Bounce>
              </div>
            </div>
          </li>
        </ul>
        <Menu onMenuChildComponentClick={menuOnClick} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/app-design" element={<Appportfolio />} />
          <Route path="/portfolio/web-design" element={<Webdesign />} />
          <Route path="/portfolio/resume" element={<Resume />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/case-study" element={<Casestudylist />} />
          <Route
            path="/portfolio/case-study-details/:id"
            element={<Casestudydetails />}
          />
          <Route path="/portfolio/logo" element={<Logo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
