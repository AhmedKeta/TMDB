import "./Hero.css";
import { Button } from "react-bootstrap";

const Hero = () => {
  const email = "ahmed.mohamed.abdelkader1@gmail.com";
  const subject = "About your Portfolio";
  const body = "Dear Ahmed";

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <div
      className="hero-container"
      id="hero"
      data-aos="fade-up "
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <h1>AHMED M.ABD-ELKADER</h1>
        <h3>Full Stack Developer</h3>
        <Button
          variant="dark"
          className="transparent-button"
          onClick={handleEmailButtonClick}>
          Contact Me
        </Button>
      </div>
    </div>
  );
};
export default Hero;
