import { Link } from "react-router-dom";
import girl from "../assets/girl.png";
import "./styles.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* NAVBAR */}
      <nav className="nav">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* PAGE TITLE */}
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>Get in touch with me</p>
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-sections">

        {/* CONTACT INFO */}
        <div className="contact-card">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> pranathithipparamalli@gmail.com</p>
          <p><strong>Phone:</strong> 5366474762</p>
        </div>

        {/* PERSONAL INFO */}
        <div className="contact-card">
          <h2>Personal Details</h2>
          <p><strong>Name:</strong> Pranathi</p>
          <p><strong>Age:</strong> 17</p>
          <p><strong>Education:</strong> B-Tech</p>
        </div>

        {/* IMAGE */}
        <div className="contact-card image-card">
          <img src={ammu} alt="Pranathi" />
        </div>

      </section>
    </div>
  );
}

export default Contact;