import PortfolioSection from "../components/PortfolioSections";
import visualVault from "../images/portfolioSplit2.png";
import findThatPlace from "../images/portfolioSplit1.png";
import noSqlDatabase from "../images/noSqlDatabase.png";
import blogCMS from "../images/blogCMS.png";
import regularExpression from "../images/regularExpression.png";
import sqlQuery from "../images/sqlQuery.png";
import runDev from "../images/runDev.png";
import TalkTide from "../images/TalkTide.png";
const Portfolio = () => {
  const portfolioCards = [
    {
      imageSrc: TalkTide,
      title: "Talk Tide",
      externalSrc: "https://talktide-4335d8586286.herokuapp.com/",
      githubLink: "https://github.com/AMillsy/TalkTide---React-Messenger",
    },
    {
      imageSrc: runDev,
      title: "RunDev",
      date: "3rd September 2023",
      externalSrc: "https://rundev-625acb8fef45.herokuapp.com/",
      githubLink: "https://github.com/AMillsy/RunDev",
    },
    {
      imageSrc: visualVault,
      title: "Visual Vault",
      date: "10th July 2023",
      externalSrc: "https://visual-vault-70f24eab589d.herokuapp.com/",
      githubLink: "https://github.com/AMillsy/Visual-Vault",
    },
    {
      imageSrc: findThatPlace,
      title: "Find That Place",
      date: "11th May 2023",
      externalSrc: "https://amillsy.github.io/Find-that-Place/",
      githubLink: "https://github.com/AMillsy/Find-that-Place",
    },
    {
      imageSrc: noSqlDatabase,
      title: "NoSQL Social Network API",
      date: "7th August 2023",
      githubLink: "https://github.com/AMillsy/NoSQL-Social-Network-API",
    },
    {
      imageSrc: blogCMS,
      title: "Blog CMS MVC",
      date: "7th July 2023",
      externalSrc: "https://blogged-493c75ec6321.herokuapp.com",
      githubLink: "https://github.com/AMillsy/Blog-CMS-MVC",
    },
    {
      imageSrc: regularExpression,
      title: "Regular Expression Article",
      date: "14th August 2023",
      externalSrc: "",
      githubLink:
        "https://gist.github.com/AMillsy/91aab11b66c41df04f798c33b71d39ba",
    },
    {
      imageSrc: sqlQuery,
      title: "Content Management System SQL",
      date: "24th June 2023",
      externalSrc: "",
      githubLink: "https://github.com/AMillsy/Content-Management-System-SQL",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", margin: "20px" }}>
        <h2
          style={{
            fontSize: "300%",
            fontFamily: '"Libre Baskerville","serif"',
            borderBottom: "2px solid black",
            margin: "10px",
            padding: "10px",
            width: "100%",
          }}
        >
          Projects
        </h2>
      </div>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {portfolioCards.map(
          ({ imageSrc, title, date, externalSrc, githubLink }, i) => {
            return (
              <PortfolioSection
                key={i}
                imageSrc={imageSrc}
                title={title}
                date={date}
                externalSrc={externalSrc}
                githubLink={githubLink}
              />
            );
          }
        )}
      </section>
    </>
  );
};

export default Portfolio;
