import PortfolioSection from "../components/PortfolioSections";
import visualVault from "../images/portfolioSplit2.png";

const Portfolio = () => {
  const portfolioCards = [
    {
      imageSrc: visualVault,
      title: "Visual Vault",
      date: "10th July 2023",
      externalSrc: "https://visual-vault-70f24eab589d.herokuapp.com/",
      githubLink: "https://github.com/AMillsy/Visual-Vault",
    },
  ];

  return (
    <>
      <h2>Projects</h2>
      {portfolioCards.map(
        ({ imageSrc, title, date, externalSrc, githubLink }) => {
          return (
            <PortfolioSection
              imageSrc={imageSrc}
              title={title}
              date={date}
              externalSrc={externalSrc}
              githubLink={githubLink}
            />
          );
        }
      )}
    </>
  );
};

export default Portfolio;
