import "../styles/Navigation.css";
import SocialLink from "./SocialLink";
import twitter from "../images/twitter.png";
import linkedIn from "../images/linkedIn.png";
const Navigation = () => {
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
