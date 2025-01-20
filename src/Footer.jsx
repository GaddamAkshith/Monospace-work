import React from 'react';
import logo from "./assets/logo.png"; // Updated import statement
import './styles/footer.css'; // Assuming styles are in App.css
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <a href="/home"><img src={logo} alt="" width="100" height="100" /></a>
        </div>
        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p><a href="/wedding-decor">Wedding Decor</a></p>
            <p><a href="/wedding-photography">Wedding Photography</a></p>
            <p><a href="/venue-consultation">Venue Consultation</a></p>
            <p><a href="/vendor-management">Vendor Management</a></p>
            <p><a href="/lead-dashboard">Lead Dashboard</a></p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p><a href="https://in.linkedin.com/company/monospacetech"><i className="fab fa-linkedin"></i> Linkedin</a></p>
            <p><a href="#/"><i className="fab fa-twitter"></i> Twitter</a></p>
            <p><a href="https://whatsapp.com/channel/0029Vb1rOAvLY6dB4uW42O2e"><i className="fab fa-Whatsapp"></i>Whatsapp </a></p>
            <p><a href="https://www.facebook.com/share/1aCHpPDXRQ/ "><i className="fab fa-facebook"></i> Facebook</a></p>
            <p><a href="https://www.instagram.com/monospace_india?igsh=azFkaTVmOGU4Yzl5"><i className="fab fa-instagram"></i> Instagram</a></p>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p><a href="/">Home</a></p>
            <p><a href="/about">About</a></p>
            <p><a href="/blogs">Blogs</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          <div className="links">
            <h4>Company Policy</h4>
            <p><a href="/terms">Terms & Conditions</a></p>
            <p><a href="/privacy">Privacy Policy</a></p>
            <p><Link to={'/feedback'}>Feedback Form</Link></p>
          </div>
          <div className="details">
            <h4 className="fas fa-map-marker-alt fa-2x">Address</h4>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Cupiditate, qui!</p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="tel:+919261141701">+91 9261141701</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="mailto:info@lilacmosaic.com">info@lilacmosaic.com</a></p>
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
