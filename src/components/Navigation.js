import "../styles/Navigation.css";
import SocialLink from "./SocialLink";
import twitter from "../images/twitter.png";
import linkedIn from "../images/linkedIn.png";
import instagram from "../images/instagram.png";
const Navigation = ({ setPage }) => {
  return (
    <header className="nav">
      <h1>ADAM</h1>
      <h1 className="lastName">MILLS</h1>
      <div className="socials">
        <SocialLink
          anchorLink={"https://twitter.com/home"}
          src={twitter}
          name={"Twitter logo"}
        />
        <SocialLink
          anchorLink={"https://www.linkedin.com/in/adam-mills-74274a198/"}
          src={linkedIn}
          name={"LinkedIn Logo"}
        />
        <SocialLink
          anchorLink={"https://www.instagram.com"}
          src={instagram}
          name={"Instagram logo"}
        />
      </div>
      <nav>
        <ul className="nav-list">
          <li key={"home"}>
            <a href="#home" onClick={() => setPage("Home")}>
              Home
            </a>
          </li>
          <li key={"portfolio"}>
            <a href="#portfolio" onClick={() => setPage("Portfolio")}>
              Portfolio
            </a>
          </li>
          <li key={"resume"}>
            <a href="#resume" onClick={() => setPage("Resume")}>
              Resume
            </a>
          </li>
          <li key={"contact"}>
            <a href="#contact" onClick={() => setPage("Contacts")}>
              Contacts
            </a>
          </li>
          <li key={"about-me"}>
            <a href="#about-me" onClick={() => setPage("About me")}>
              About Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
