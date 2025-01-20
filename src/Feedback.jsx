import React, { useState } from 'react';
import './styles/feedback.css'; 
import logo from "./assets/logo.png";
import { Link } from 'react-router-dom';

const Feedback = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [feedback, setFeedback] = useState('');
    const [callback, setCallback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ fullName, phone, feedback, callback });
    };

    return (
       <div className='feedback'>
            {/* Navbar */}
            <div className='navbar-container'>
            <nav className="navbar-feedback">
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" width="80px" height="80px" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to="#services-section">Services</Link></li>
                    <li><Link to="/product">Product</Link></li>
                </ul>
                <div className="hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('active')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            </div>

            {/* Feedback Section */}
            <section className="feedback-section">
                <div className="feedback-container">
                    <h1>We deeply value your feedback.</h1>
                    <p>We'd love to hear what you thought about us.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div>
                                <label htmlFor="fullName">Full Name *</label>
                                <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone *</label>
                                <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="feedback">Please share your detailed feedback *</label>
                            <textarea id="feedback" name="feedback" rows="4" value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Would you like us to call you back?</label>
                            <div className="radio-group">
                                <label><input type="radio" name="callback" value="yes" onChange={(e) => setCallback(e.target.value)} required /> Yes</label>
                                <label><input type="radio" name="callback" value="no" onChange={(e) => setCallback(e.target.value)} required /> No</label>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">Send Feedback</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Feedback;
