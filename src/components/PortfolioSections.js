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
          <h3 className="cardDate">Created: {date}</h3>

          <div className="linkContainer">
            {externalSrc && (
              <a href={externalSrc} target="_blank">
                <img src={externalLink} className="links"></img>
              </a>
            )}

            <a href={githubLink} target="_blank">
              <img src={githubImage} className="links"></img>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioSection;
