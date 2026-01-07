import { Link } from "react-router-dom";
import "./styles.css";

function Master() {
  return (
    <div className="main-page">
      <nav className="nav">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link to="/about" state={{course:"CSE"}}>About</Link>

      <div className="main-content">
        <h1>This is the main page u know!!!!</h1>
        <p>Welcome to my React website</p>
      </div>
    </div>
  );
}

export default Master;