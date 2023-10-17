import externalLink from "../images/externalLink.png";
import githubImage from "../images/github.png";
import "../styles/PortfolioSection.css";
const PortfolioSection = ({
  imageSrc,
  title,
  date,
  externalSrc,
  githubLink,
  inProgress,
}) => {
  return (
    <button className="portfolioCard" href="#">
      {inProgress && <p className="cardWork">Working on currently</p>}
      <img className="portfolioImage" src={imageSrc} alt={title}></img>
      <div className="portfolioDescription">
        <div className="cardDesc">
          <h2 className="cardTitle">{title}</h2>
          <h3 className="cardDate">Created: {date}</h3>

          <div className="linkContainer">
            {externalSrc && (
              <a href={externalSrc} target="_blank" rel="noreferrer">
                <img
                  src={externalLink}
                  className="links"
                  alt="External Link"
                ></img>
              </a>
            )}

            <a href={githubLink} target="_blank" rel="noreferrer">
              <img src={githubImage} className="links" alt="github"></img>
            </a>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PortfolioSection;
