import React from 'react';
import Wedding2 from "./assets/Wedding2.png";
import logo from "./assets/logo.png";
import Hero from './Hero';
// import Gallery from "./Gallery";
import WeddingSection from "./WeddingSection";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

import './index.css'; // Assuming styles are in App.css

const HomePage = () => {
  const handleHamburgerClick = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">
          <a href="index.html"><img src={logo} alt="" width="75" height="80" /></a>
        </div>
        <ul className="nav-links">
          <a href="#home">Home</a>
          <a href="#wedding-section">Product</a>
          <a href="#services-section">Services</a>
          <a href="#contact">Contact</a>
        </ul>
        <div className="hamburger" onClick={handleHamburgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

          
        <div className="img">
          <img src={Wedding2} alt="" width="100%" height="100%" />
        </div>
         <section className="about">
        <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
          <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} src="https://www.canva.com/design/DAGbUYwIFn4/Ykswn3pVKp1XFBufNgV-Lg/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen"></iframe>
        </div>
      </section> 
    <Hero/>
    {/* <Gallery/> */}
    <WeddingSection/>
    <ServicesSection/>
    <Footer/>
    </div>
    
  );
};

export default HomePage;
