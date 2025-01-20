import React from "react";
import './styles/herosection.css'; 


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h1 className="cursive-text">
          Everything <br />
          you can imagine, <br />
          I will make real
        </h1>
        <p>Natalia Lowe | Bespoke Wedding + Floral Stylist</p>
        <div className="buttons">
          <a href="#wrapper"><button>See Some Recent Pictures</button></a>
          <a href="#wedding-section"><button>Explore Wedding Insight</button></a>
          <a href="#services-section"><button>Explore Services</button></a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

