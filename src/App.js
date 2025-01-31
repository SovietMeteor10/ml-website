import React, { useState} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import DrawGrid from './DrawGrid.js';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (componentName) => {
    navigate('/' + componentName);
    setMenuOpen(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const predictDigit = (gridArray) => {
    console.log('Predicting with array:', gridArray);
  };
  
  return (
    <div className="app-container">
      <div className="top-bar">
        <button className="topbar-menu-title" onClick={() => handleMenuClick('')}>ML Projects</button>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode character for the hamburger icon */}
        </div>
        {menuOpen && (
          <div className="dropdown-menu">
            <button className="topbar-menu-buttons" onClick={() => handleMenuClick('app')}>MNIST</button>
            <button className="topbar-menu-buttons" onClick={() => handleMenuClick('about')}>About</button>
            <button className="topbar-menu-buttons" onClick={() => handleMenuClick('donate')}>Donate</button>
          </div>
        )}
      </div>
      <div className="content">
        <DrawGrid onPredict={predictDigit} />
      </div>
    </div>
  );
}

export default App;
