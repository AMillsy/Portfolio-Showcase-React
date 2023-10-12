import "../styles/Navigation.css";
import SocialLink from "./SocialLink";
import twitter from "../images/twitter.png";
import linkedIn from "../images/linkedIn.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Navigation = ({ setPage, page }) => {
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation();

  useEffect(
    function () {
      setCurrentPage(location.pathname);
    },
    [location]
  );

  return (
    <header className="nav">
      <h1>ADAM</h1>
      <h1 className="lastName">MILLS</h1>
      <div className="socials">
        {/* <SocialLink
          anchorLink={"https://twitter.com/home"}
          src={twitter}
          name={"Twitter logo"}
        /> */}
        <SocialLink
          anchorLink={"https://www.linkedin.com/in/adam-mills-74274a198/"}
          src={linkedIn}
          name={"LinkedIn Logo"}
        />
        <SocialLink
          anchorLink={"https://github.com/AMillsy"}
          src={github}
          name={"Github logo"}
        />
      </div>
      <nav>
        <ul className="nav-list">
          <li key={"home"}>
            <Link to={"/"} className={currentPage === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li key={"portfolio"}>
            <Link
              to={"/portfolio"}
              className={currentPage === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>
          <li key={"resume"}>
            <Link
              to={"/resume"}
              className={currentPage === "/resume" ? "active" : ""}
            >
              Resume
            </Link>
          </li>
          <li key={"contact"}>
            <Link
              to={"contact"}
              className={currentPage === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li key={"about-me"}>
            <Link
              to={"/about-me"}
              className={currentPage === "/about-me" ? "active" : ""}
            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
