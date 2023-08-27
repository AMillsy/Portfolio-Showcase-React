import "../styles/Navigation.css";
import SocialLink from "./SocialLink";
import twitter from "../images/twitter.png";
import linkedIn from "../images/linkedIn.png";
import instagram from "../images/instagram.png";
const Navigation = ({ setPage, page }) => {
  console.log(page);
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
            <a
              href="#home"
              onClick={() => setPage("Home")}
              className={page === "Home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li key={"portfolio"}>
            <a
              href="#portfolio"
              onClick={() => setPage("Portfolio")}
              className={page === "Portfolio" ? "active" : ""}
            >
              Portfolio
            </a>
          </li>
          <li key={"resume"}>
            <a
              href="#resume"
              onClick={() => setPage("Resume")}
              className={page === "Resume" ? "active" : ""}
            >
              Resume
            </a>
          </li>
          <li key={"contact"}>
            <a
              href="#contact"
              onClick={() => setPage("Contacts")}
              className={page === "Contacts" ? "active" : ""}
            >
              Contacts
            </a>
          </li>
          <li key={"about-me"}>
            <a
              href="#about-me"
              onClick={() => setPage("About me")}
              className={page === "About me" ? "active" : ""}
            >
              About Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
