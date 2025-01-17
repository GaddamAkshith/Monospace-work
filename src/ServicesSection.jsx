import React from "react";
import service from "./assets/service.jpg";
// import './styles/index1.css'; 

const ServicesSection = () => {
  const services = [
    "Wedding Styling",
    "Floral Design",
    "Bridal Styling & Makeup",
    "Haldi & Mehandi Ceremony",
    "Photography & Videography",
    "Venue Selection & Management",
    "Full Wedding Planning & Design",
  ];

  return (
    <section className="services-section" id="services-section">
      <div className="services-wrapper">
        <div className="image-container">
          <img src={service} alt="Dining Table" className="responsive-img" />
        </div>
        <div className="content">
          <h3>Services Offered</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
