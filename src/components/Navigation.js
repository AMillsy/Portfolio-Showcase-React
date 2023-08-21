import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
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
  );
};

export default Navigation;
