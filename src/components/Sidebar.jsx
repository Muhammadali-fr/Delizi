// Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar} aria-label="Close sidebar">
          &times;
        </button>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <button
        className="toggle-btn"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
}

export default Sidebar;
