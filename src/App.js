import React from 'react';
import Draggable from 'react-draggable';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import HomeIcon from './images/svg/HomeIcon';

const Home = () => <div className='heightfull'>Home Page</div>;
const About = () => <div className='heightfull'>About Us</div>;
const Contact = () => <div className='heightfull'>Contact Information</div>;


function App() {
  
  const eventHandler = (e, data) => {
    console.log('Event Type', e.type);
    console.log({e, data});
  }
  const setActive = ({ isActive }) =>
    isActive ? "active" : "";
  return (
    
    <div className="App">
       <Router> 
      <div>
      <Draggable       
       defaultPosition={{x: 0, y: 0}}
       onMouseDown={eventHandler}
       onStart={eventHandler}
       onDrag={eventHandler}
       onStop={eventHandler}>
        <nav className='navigation-dragable'>
          <ul>
            <li>
            <NavLink
                to="/"  
                style={({ isActive }) => ({
                  fill: isActive ? '#fff' : '#545e6f',
                })}
              >
               <HomeIcon />
              </NavLink>              
            </li>
            <li>
              <NavLink
                to="/about"  
                className={setActive}
              >
                About
              </NavLink>
            </li>
            <li>              
              <NavLink
                to="/contact"  
                className={setActive}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </Draggable>
      
      {/* https://blog.logrocket.com/create-draggable-components-react-draggable/ */}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      
    </Router>
    </div>
  );
}

export default App;
