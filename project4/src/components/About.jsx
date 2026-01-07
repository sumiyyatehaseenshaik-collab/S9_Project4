import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  return (
    <>
      <h1>This is About page at {location.pathname}</h1>
      <p>
        It belongs to ----- {location.state?.course }
      </p>
    </>
  );
}

export default About;
