import "./SkillsChart.css";

const SkillsChart = (props) => {
  return (
    <div
      className="skill-bar"
      data-aos="fade-right "
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100">
      <div
        className="bar"
        style={{ width: props.value + "%" }}
        data-aos="fade-right "
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="100">
        {props.skill}
      </div>
    </div>
  );
};
export default SkillsChart;
