import React from 'react';
import './styles/styles.css'; 
import wed2bkimg from './assets/wed2bkimg.jpg';

const Hero = () => {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <img src={wed2bkimg} alt="Wedding Background" className="hero-img" />
          <div className="hero-text">
            <h1>Your Love Story,</h1>
            <h2>Our Wedding Planning Expertise</h2>
            <p>
              Ready to party? At MonoSpace, we&apos;re passionate about planning weddings
              that are as unique as you are! Our team of expert planners will work with
              you to create an unforgettable celebration that reflects your style, budget,
              and love story. From concept to execution, we&apos;ve got you covered - 
              so you can focus on what really matters: enjoying every moment of your
              special day.
            </p>
            <button className="btn" onClick={() => window.location.href='/services'}>Know More</button>
          </div>
        </div>
      </header>
    </main>
  );
}

export default Hero;
