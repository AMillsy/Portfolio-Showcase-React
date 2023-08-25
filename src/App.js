import "./styles/Styles.css";
import Layout from "./pages/Layout";
import Splitter from "./components/Splitter";
import portfolioImage1 from "./images/portfolioSplit1.png";
import portfolioImage2 from "./images/portfolioSplit2.png";

function App() {
  const splitters = [
    {
      name: "Portfolio",
      backgroundColour: "grey",
      splitImage1: portfolioImage1,
      splitImage2: portfolioImage2,
    },
    {
      name: "Resume",
      backgroundColour: "#210124",
      splitImage1: portfolioImage1,
      splitImage2: portfolioImage2,
    },
    {
      name: "Contacts",
      backgroundColour: "#210124",
      splitImage1: portfolioImage1,
      splitImage2: portfolioImage2,
    },
    {
      name: "About me",
      backgroundColour: "#210124",
      splitImage1: portfolioImage1,
      splitImage2: portfolioImage2,
    },
  ];

  return (
    <Layout>
      {splitters.map(
        ({ name, backgroundColour, splitImage1, splitImage2 }, i) => {
          return (
            <Splitter
              name={name}
              backgroundColour={backgroundColour}
              splitImage1={splitImage1}
              splitImage2={splitImage2}
              currentSection={i}
            />
          );
        }
      )}
    </Layout>
  );
}

export default App;
