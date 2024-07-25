import React from 'react';
import './../assets/css/Homepage.css'

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-logo">
          LMS
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to LMS</h1>
        <p>Track your shipments in real-time with our advanced logistics management system.</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
};

export default HomePage;
