import "../styles/Navigation.css";
import SocialLink from "./SocialLink";
import twitter from "../images/twitter.png";
const Navigation = () => {
  return (
    <header className="nav">
      <div>
        <SocialLink
          anchorLink={"https://twitter.com/home"}
          src={twitter}
          name={"Twitter logo"}
          className="twitterlogo"
        />
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
