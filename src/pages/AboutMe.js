import "../styles/AboutMe.css";
import portrait from "../images/Portrait.png";
const AboutMe = () => {
  return (
    <section className="aboutSection">
      <h2 className="aboutTitle">About Me</h2>
      <div className="aboutContents">
        <div className="portraitContainer">
          <img src={portrait} className="portrait" alt="portrait"></img>
        </div>
        <div className="textContents">
          <p className="bold">
            I am Adam Mills, a student bootcamp studying at University of
            Birmingham studying Full stack Web Development
          </p>
          <p className="contents">
            I will be finishing my course in early October and have been doing
            full stack web Development learning technologies like React,
            Bootstrap and JQuery for the frontend and MySQL, Express, Node,
            MongoDB and many more for the backend. I love learning about new
            technologies and have setup AWS S3 storage for previous project
            called Visual Vault.
          </p>
          <p className="contents">
            I hope to get a job in the industry and create an amazing website, I
            enjoy doing the backend for websites the most because of the thrill
            of finally getting that database to post to the frontend.
          </p>
          <p className="contents">
            Out of coding, you will find me engrossed in Video games or playing
            sports.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
