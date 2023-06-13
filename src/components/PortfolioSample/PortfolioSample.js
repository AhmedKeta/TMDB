import "./PortfolioSample.css";
const PortfolioSample = (props) => {
  return (
    <div
      className="alert sample-container col-12 col-sm-5 col-md-3 d-flex justify-content-center align-items-center"
      data-aos="fade-right "
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100">
      <a href={props.href}>{props.sample}</a>
    </div>
  );
};
export default PortfolioSample;
