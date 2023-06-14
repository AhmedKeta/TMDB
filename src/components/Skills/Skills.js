import "./Skills.css";
import SkillsChart from "../SkillsChart/SkillsChart";
import MyFocus from "../MyFocus/MyFocus";

const Skills = () => {
  const skills = [
    { name: "HTML", value: 75, key: 1 },
    { name: "CSS", value: 85, key: 2 },
    { name: "JavaScript", value: 80, key: 3 },
    { name: "Node.js", value: 65, key: 4 },
    { name: "React", value: 60, key: 5 },
    { name: "Anguler", value: 65, key: 6 },
    { name: "Express", value: 75, key: 7 },
    { name: "Mongo", value: 70, key: 8 },
    { name: "SQL", value: 65, key: 9 },
  ];
  return (
    <div
      className="skills-container"
      id="skills"
      data-aos="fade-up "
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100">
      <div className="container">
        <h1>Skills</h1>
        <p>Developed and maintained web applications using MEARN stack. </p>
        <p>
          Collaborated with cross-functional teams to design and implement new
          features.
        </p>
        <p>
          Conducted unit testing and resolved bugs to ensure application
          stability.
        </p>
        <div className="row">
          <MyFocus />
          <div className="chart-data col-12 col-md-5">
            {skills.map((skill) => {
              return <SkillsChart skill={skill.name} value={skill.value} key = {skill.key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
