import "./AboutMe.css";
import { Button } from "react-bootstrap";

const AboutMe = () => {
  const handleClick = () => {
      const resumeUrl =
        "https://download939.mediafire.com/0xu5snieibwgNHed3PQKf4yQ_2rHWo4NHd76e790ozgEIwFoah3xoBXNXi38VVbMbetGoRYhTEAqBvXk6UnGks4H6QJCjDz49yjcAw4T3cK2mSEpUd5oPrwVejWFgzJT-LkHZcdA9pf0cp4Y9w1t3DzQTOov3X4xdxaLVkwHhyYjwQ/egq61x4m7279puk/ahmed-mohamed-abd-elKader.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="about-me container"
      id="about"
      data-aos="fade-up "
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100">
      <div className="row">
        <h1 className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          About me
        </h1>
        <p className="col-12 col-md-8 text-justify">
          Motivated junior developer with over one year of experience in
          full-stack web development using MEARN technologies. Skilled in
          JavaScript, React.js, Angular, MongoDB, Node.js, and Express.js.
          Proficient in other technologies such as Python, C, and PWA. Strong
          problem-solving skills and experience working in agile environments.
        </p>
        <Button
          onClick={handleClick}
          variant="dark"
          className="transparent-button">
          Download Resume
        </Button>
      </div>
    </div>
  );
};
export default AboutMe;
