import externalLink from "../images/externalLink.png";
import githubImage from "../images/github.png";
import "../styles/PortfolioSection.css";
const PortfolioSection = ({
  imageSrc,
  title,
  date,
  externalSrc,
  githubLink,
}) => {
  return (
    <a className="portfolioCard" href="#">
      <img className="portfolioImage" src={imageSrc} alt={title}></img>
      <div className="portfolioDescription">
        <div className="cardDesc">
          <h2 className="cardTitle">{title}</h2>
          <h3 className="cardDate">{date}</h3>

          <div className="linkContainer">
            <a href={externalSrc}>
              <img src={externalLink} className="links"></img>
            </a>
            <a href={githubLink}>
              <img src={githubImage} className="links"></img>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioSection;
