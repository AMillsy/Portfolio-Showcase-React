import portfolioImage from "../images/portfolioSplit1.png";
import "../styles/PortfolioSection.css";
const PortfolioSection = () => {
  return (
    <a className="portfolioCard">
      <h2>Find that Place</h2>
      <h3>Date created</h3>
      <img className="portfolioImage" src={portfolioImage}></img>
    </a>
  );
};

export default PortfolioSection;
