import Splitter from "../components/Splitter";
import portfolioImage1 from "../images/portfolioSplit1.png";
import portfolioImage2 from "../images/portfolioSplit2.png";
import resumeSplit1 from "../images/resumeSplit1.png";
import resumeSplit2 from "../images/resumeSplit2.png";
import contactSplit1 from "../images/contactSplit1.jpg";
import contactSplit2 from "../images/contactSplit2.jpg";
import aboutMeSplit1 from "../images/aboutMe1.jpg";
import aboutMeSplit2 from "../images/aboutMe2.jpg";

const Home = ({ setPage }) => {
  const splitters = [
    {
      name: "Portfolio",
      backgroundColour: "grey",
      splitImage1: portfolioImage1,
      splitImage2: portfolioImage2,
    },
    {
      name: "Resume",
      backgroundColour: "#CDC392",
      splitImage1: resumeSplit1,
      splitImage2: resumeSplit2,
    },
    {
      name: "Contacts",
      backgroundColour: "#648DE5",
      splitImage1: contactSplit1,
      splitImage2: contactSplit2,
    },
    {
      name: "About me",
      backgroundColour: "#210124",
      splitImage1: aboutMeSplit1,
      splitImage2: aboutMeSplit2,
    },
  ];
  return (
    <>
      {splitters.map(
        ({ name, backgroundColour, splitImage1, splitImage2 }, i) => {
          return (
            <Splitter
              key={i}
              name={name}
              backgroundColour={backgroundColour}
              splitImage1={splitImage1}
              splitImage2={splitImage2}
              currentSection={i}
              setPage={setPage}
            />
          );
        }
      )}
    </>
  );
};

export default Home;
