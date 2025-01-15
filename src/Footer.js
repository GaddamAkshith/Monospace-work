import React from 'react';
// import { Link } from 'react-router-dom';
import logo from "./assets/logo.png"; // Updated import statement


import './styles/footer.css'; // Assuming styles are in App.css

const Footer = () => {
  const handleHamburgerClick = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  return (
    <div>
      <div className="footer">
        <div className="logo">
          <a href="/home"><img src={logo} alt="" width="100" height="100" /></a>
        </div>
        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p><a href="#">Wedding Decor</a></p>
            <p><a href="#">Wedding Photography</a></p>
            <p><a href="#">Venue Consultation</a></p>
            <p><a href="#">Vendor Management</a></p>
            <p><a href="#">Lead Dashboard</a></p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p><a href="https://in.linkedin.com/company/monospacetech"><i className="fab fa-linkedin"></i> Linkedin</a></p>
            <p><a href="#"><i className="fab fa-twitter"></i> Twitter</a></p>
            <p><a href="#"><i className="fab fa-github"></i> Github</a></p>
            <p><a href="#"><i className="fab fa-facebook"></i> Facebook</a></p>
            <p><a href="#"><i className="fab fa-instagram"></i> Instagram</a></p>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Blogs</a></p>
            <p><a href="#">Contact</a></p>
          </div>
          <div className="links">
            <h4>Company Policy</h4>
            <p><a href="#">Terms & Conditions</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href='#'>Feedback Form</a></p>
            
          </div>
          <div className="details">
            <h4 className="fas fa-map-marker-alt fa-2x">Address</h4>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Cupiditate, qui!</p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">+91 9261141701</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="#">info@lilacmosaic.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
          <p className="right">© 2025 LILACMOSAIC Technologies Pvt Ltd. All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
