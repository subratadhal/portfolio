import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

//import './assets/scss/style.scss';
import Home from './Component/Home';

import 'bootstrap/dist/css/bootstrap.css';



function App() {
  
  const eventHandler = (e, data) => {
    console.log('Event Type', e.type);
    console.log({e, data});
  }
  const setActive = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <Router>
      <header className='app-header'>
        <section className='header-top'>
          <div className='nav-button set1'>
            <div className='overbutton'>
              Setup
            </div>
          </div>
          <div className='nav-button set2'>
            <div className='overbutton'>
              Setup
            </div>
          </div>
          <div className='nav-button set3'>
            <div className='overbutton'>
              Setup
            </div>
          </div>
        </section>
        <section className='header-right'></section>
        <section className='header-bottom'></section>
        <section className='header-left'></section>
      </header>
      <main>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
