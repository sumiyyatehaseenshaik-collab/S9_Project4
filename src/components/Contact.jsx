import { Link, useLocation } from "react-router-dom";
import "../components/contact.css";
import profile from "../assets/photo1.png";

function Contact() {
  const location = useLocation();

  return (
    <>
      {/* Header */}
      <div className="head">
        <nav className="nav">
          <Link to="/">Main</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <h1>This is Contact Page guys !!!!**</h1>
      </div>

      {/* Main Layout */}
      <div className="main-container">
        
        {/* INFO PANEL */}
        <div className="info-panel">
          <img src={profile} alt="Profile" className="profile-img" />

          <div className="info-item">
            <span className="info-label">Course</span>
            <span className="info-value">{location.state?.course}</span>
          </div>

          <div className="info-item">
            <span className="info-label">ID Number</span>
            <span className="info-value">2500031106</span>
          </div>

          <div className="info-item">
            <span className="info-label">Name</span>
            <span className="info-value">Shaik Sumiyya Tehaseen</span>
          </div>

          <div className="info-item">
            <span className="info-label">Phone</span>
            <span className="info-value">9441428589</span>
          </div>

          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">sumiyyatehaseenshaik@gmail.com</span>
          </div>

          <div className="info-item">
            <span className="info-label">Address</span>
            <span className="info-value">Old Guntur, Andhra Pradesh</span>
          </div>

          <div className="info-item">
            <span className="info-label">Department</span>
            <span className="info-value">CSE</span>
          </div>

          <div className="info-item">
            <span className="info-label">College</span>
            <span className="info-value">KL UNIVERSITY</span>
          </div>
        </div>

        {/* MESSAGE PANEL */}
        <div className="message-panel">
          <h2>Send a Message</h2>

          {/* Horizontal Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Your Message"></textarea>
            </div>
          </div>

          <button className="send-btn">Send Message</button>
        </div>

      </div>
    </>
  );
}

export default Contact;
