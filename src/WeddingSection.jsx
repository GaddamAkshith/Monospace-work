import React from "react";
import wedding2 from "./assets/wedding2.jpg";
import wedding1 from "./assets/wedding1.jpg";
import './styles/herosection.css'; 

const WeddingSection = () => {
  const weddings = [
    { img: wedding1, name: "LEON & STELLA" },
    { img: wedding2, name: "POWELL & INGRID" },
    { img: wedding2, name: "SAMUEL & HANNAH" },

  ];

  return (
    <section className="wedding-section" id="wedding-section">
      <h1>Modern weddings with a luxurious twist</h1>
      <div className="wedding-gallery">
        {weddings.map((wedding, index) => (
          <div key={index} className="wedding-card">
            <img src={wedding.img} alt={wedding.name} />
            <p>{wedding.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingSection;
