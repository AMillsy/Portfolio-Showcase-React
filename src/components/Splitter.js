import { Link } from "react-router-dom";
import "../styles/Splitter.css";

const Splitter = ({
  name,
  backgroundColour,
  splitImage1,
  splitImage2,
  currentSection,
  setPage,
  link,
}) => {
  function displayCorrectSection() {
    const sectionType = currentSection % 2;
    if (sectionType === 0) {
      return (
        <>
          <div
            className="splitLeft"
            style={{
              background: backgroundColour,
              borderTopLeftRadius: "2rem",
            }}
          >
            <h2 className="splitHeader">{name}</h2>
            <p></p>
          </div>
          <div className="splitRight" style={{ borderTopRightRadius: "2rem" }}>
            <img
              src={splitImage1}
              className="splitterImage"
              style={{ borderTopRightRadius: "2rem" }}
              alt=""
            ></img>
            <img
              src={[splitImage2]}
              className="splitterImageHover"
              style={{ borderTopRightRadius: "2rem" }}
              alt=""
            ></img>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="splitRight">
          <img
            src={splitImage1}
            className="splitterImage"
            style={{ borderTopLeftRadius: "2rem" }}
            alt=""
          ></img>
          <img
            src={[splitImage2]}
            className="splitterImageHover"
            style={{ borderTopLeftRadius: "2rem" }}
            alt=""
          ></img>
        </div>
        <div
          className="splitLeft"
          style={{ background: backgroundColour, borderTopRightRadius: "2rem" }}
        >
          <h2 className="splitHeader">{name}</h2>
          <p></p>
        </div>
      </>
    );
  }

  return (
    <Link className="splitter" to={link}>
      {displayCorrectSection()}
    </Link>
  );
};

export default Splitter;
