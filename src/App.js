import React, { useRef, useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/style.scss';
import menuImg from './assets/images/svg/menu.gif';
import homeImg from './assets/images/svg/home.gif';
import Home from './Component/Home';
import About from './Component/About';
import Appportfolio from './Component/Appportfolio';
import Webdesign from './Component/Webdesign';
import Casestudylist from './Component/Casestudylist';
import Casestudydetails from './Component/Casestudydetails';
import Resume from './Component/Resume';
import Contact from './Component/Contact';
import Logo from './Component/Logo';




function App() {
  const [menu, setMenu] = useState(false);

  const menuOnClick = () =>{
    setMenu( prev => !prev)
  }

  return (
    <Router>
      <header className={menu ? 'menu-profile open' : 'menu-profile'}>
      <ul>
        <li>
          <div className='menu-box'>
            <div className='menu-heading'>Portfolio</div>
            <div className='nav-link'><NavLink to="/portfolio/app-design" onClick={()=>menuOnClick()}>App Design</NavLink></div>
            <div className='nav-link'><NavLink to="/portfolio/web-design" onClick={()=>menuOnClick()}>Web Design</NavLink></div>
            <div className='nav-link'><NavLink to="/portfolio/web-design" onClick={()=>menuOnClick()}>Web Sites</NavLink></div>
          </div>
        </li>
        <li>
          <div className='menu-box'>
            <div className='menu-heading'>Case Study</div>
            <div className='nav-link'><NavLink to="/portfolio/case-study" onClick={()=>menuOnClick()}>App & Web</NavLink></div>
          </div>
        </li>
        <li>
        <div className='menu-box'>
          <div className='menu-heading'>Graphics</div>
          <div className='nav-link'><NavLink to="/portfolio/logo">
              Logo
            </NavLink></div>
          </div>
        </li>
        <li>
          <div className='menu-box'>
            <div className='menu-heading'>Business</div>
            <div className='nav-link'><NavLink to="/portfolio/resume" onClick={()=>menuOnClick()}>Resume</NavLink></div>
            <div className='nav-link'><NavLink to="/portfolio/about" onClick={()=>menuOnClick()}>About</NavLink></div>
            <div className='nav-link'><NavLink to="/portfolio/contact" onClick={()=>menuOnClick()}>Contact</NavLink></div>
          </div>
        </li>
      </ul>
       <div className='menu-button' role='button' onClick={()=>menuOnClick()}>          
          <img src={menuImg} alt='' />
        </div>
        {menu && (
          <div className='home-menu-button' role='button'>          
            <div className='nav-link'><NavLink to="/portfolio" onClick={()=>menuOnClick()}><img src={homeImg} alt='' className='home-menu' /></NavLink></div>
          </div>
        )}
      </header>
      <main>
        <Routes>
          
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/app-design" element={<Appportfolio />} />
          <Route path="/portfolio/web-design" element={<Webdesign />} />
          <Route path="/portfolio/resume" element={<Resume />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/case-study" element={<Casestudylist />} />
          <Route path="/portfolio/case-study-details/:id" element={<Casestudydetails />} />
          <Route path="/portfolio/logo" element={<Logo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
