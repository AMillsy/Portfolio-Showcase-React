import cv from "../files/cv.pdf";
import "../styles/Resume.css";
const Resume = () => {
  return (
    <section className="resumeSection">
      <h2 className="resumeTitle">Resume</h2>
      <a href={cv} download={cv} style={{ color: "blue" }}>
        Download my Resume
      </a>
      <ul className="resumeList">
        <h3>Fontend Profiencies</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
        <h3>Backend Profiencies</h3>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Sequelize</li>
        <li>Mongoose</li>
        <li>GraphQL</li>
        <li>RestAPI</li>
      </ul>
    </section>
  );
};

export default Resume;
