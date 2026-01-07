import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "25px",
    padding: "20px",
    backgroundColor: "#222",
  },
};

export default Navbar;
