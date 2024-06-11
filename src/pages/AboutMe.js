import "../styles/AboutMe.css";
import portrait from "../images/Portrait.png";
import me from "../images/me.jpg";
const AboutMe = () => {
  return (
    <section className="aboutSection">
      <h2 className="aboutTitle">About Me</h2>
      <div className="aboutContents">
        <div className="portraitContainer">
          <img src={me} className="portrait" alt="portrait"></img>
        </div>
        <div className="textContents">
          <p className="bold">
            I am Adam Mills, I am Junior Fullstack Developer wanting to develop and learn more about the development world.
          </p>
          <p className="contents">
            I have been working full time as a Junior Fullstack Developer since November 2023 and love developing and learning about the 
            expanding technologies that have come into the development world.
          </p>
          <p className="contents">
            I always want to expand my knowledge and always eager to create, design and implement technologies.
          </p>
          <p className="contents">
            Outside of coding, you will see my engrossed into Video games or Bouldering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
