import "./Portfolio.css";
import PortfolioSample from "../PortfolioSample/PortfolioSample";
const Portfolio = () => {
  const samples = [
    {
      name: "Bobazona",
      href: "https://www.bobazona.com/",
    },
    {
      name: "Nurery System",
      href: "https://github.com/AhmedKeta/nursery-system",
    },
    {
      name: "Kids Sudoku",
      href: "https://github.com/AhmedKeta/sudoku",
    },
    {
      name: "Library System",
      href: "https://github.com/AhmedKeta/Library",
    },
    {
      name: "Amazon cloning",
      href: "https://github.com/MahmoudFady/shop-restful-api",
    },
    {
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
            return <PortfolioSample sample={sample.name} href={sample.href} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
