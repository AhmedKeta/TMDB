import "./Portfolio.css";
import PortfolioSample from "../PortfolioSample/PortfolioSample";
const Portfolio = () => {
  const samples = [
    {
      key: 1,
      name: "Bobazona",
      href: "https://www.bobazona.com/",
    },
    {
      key: 2,

      name: "Nurery System",
      href: "https://github.com/AhmedKeta/nursery-system",
    },
    {
      key: 3,

      name: "Kids Sudoku",
      href: "https://github.com/AhmedKeta/sudoku",
    },
    {
      key: 4,

      name: "Library System",
      href: "https://github.com/AhmedKeta/Library",
    },
    {
      key: 5,

      name: "Amazon cloning",
      href: "https://github.com/MahmoudFady/shop-restful-api",
    },
    {
      key: 6,

      name: "Book Reaing",
      href: "https://github.com/AhmedKeta/bookReading-back",
    },
  ];
  return (
    <div className="portfolio-container" id="portfolio">
      <h1 className="col-12 text-center">Portfolio</h1>
      <div className="samples container">
        <div className="row justify-content-around align-items-around">
          {samples.map((sample) => {
            return <PortfolioSample sample={sample.name} href={sample.href} key = {sample.key} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
