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




function App() {
  const [menu, setMenu] = useState(false);

  const menuOnClick = () =>{
    setMenu( prev => !prev)
  }

  return (
    <Router>
      {/* <header className='app-header'>
        <section className='header-top'>
          <div className='nav-button set1'>
            <div className='overbutton home'>
              Setup
            </div>
          </div>
          <div className='nav-button set2'>
            <div className='overbutton about'>
              Setup
            </div>
          </div>
          <div className='nav-button set3'>
            <div className='overbutton contact'>
              Setup
            </div>
          </div>
        </section>
        <section className='header-right'>
          <div className='nav-button-right set1'>
            <div className='overbutton linkedin_portfolio'>
              Setup
            </div>
          </div>
          <div className='nav-button-right set2'>
            <div className='overbutton other2'>
              Setup
            </div>
          </div>
          <div className='nav-button-right set3'>
            <div className='overbutton other1'>
              Setup
            </div>
          </div>
        </section>
        <section className='header-bottom'></section>
        <section className='header-left'>
          <div className='nav-button-left set1'>
            <div className='overbutton portfolio'>
              Setup
            </div>
          </div>
          <div className='nav-button-left set2'>
            <div className='overbutton case_study'>
              Setup
            </div>
          </div>
          <div className='nav-button-left set3'>
            <div className='overbutton resume'>
              Setup
            </div>
          </div>
        </section>
      </header> */}
      <header className={menu ? 'menu-profile open' : 'menu-profile'}>
      <ul>
        <li>
          <div className='menu-box'>
            <div className='menu-heading'>Portfolio</div>
            <NavLink to="/portfolio/app-design" onClick={()=>menuOnClick()}>App Design</NavLink>
            <NavLink to="/portfolio/web-design" onClick={()=>menuOnClick()}>Web Design</NavLink>
            <NavLink to="/portfolio/web-design" onClick={()=>menuOnClick()}>Web Sites</NavLink>
          </div>
        </li>
        <li>
          <div className='menu-box'>
            <div className='menu-heading'>Case Study</div>
              <NavLink to="/portfolio/case-study" onClick={()=>menuOnClick()}>App / Web Design</NavLink>
          </div>
        </li>
        <li>
        <div className='menu-box'>
          <div className='menu-heading'>Graphics</div>
            <NavLink to="/portfolio">
              Banners
            </NavLink>
          </div>
        </li>
        <li>
          <div className='menu-box'>
            <div className='menu-heading'>Business</div>
            <NavLink to="/portfolio/about" onClick={()=>menuOnClick()}>About</NavLink>
            <NavLink to="/portfolio/contact">Contact</NavLink>
          </div>
        </li>
      </ul>
       <div className='menu-button' role='button' onClick={()=>menuOnClick()}>          
          <img src={menuImg} alt='' />
        </div>
        {menu && (
          <div className='home-menu-button' role='button'>          
            <NavLink to="/portfolio" onClick={()=>menuOnClick()}><img src={homeImg} alt='' className='home-menu' /></NavLink>
          </div>
        )}
      </header>
      <main>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/app-design" element={<Appportfolio />} />
          <Route path="/portfolio/web-design" element={<Webdesign />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/case-study" element={<Casestudylist />} />
          <Route path="/portfolio/case-study-details/:id" element={<Casestudydetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
