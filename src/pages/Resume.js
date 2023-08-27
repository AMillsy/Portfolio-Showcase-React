import cv from "../files/cv.pdf";
import "../styles/Resume.css";
const Resume = () => {
  /**
   * Design mini cards for each skill
   * On hover, display a description about my usage of the skill
   *
   */
  return (
    <section className="resumeSection">
      <h2 className="resumeTitle">Resume</h2>
      <a href={cv} download={cv} style={{ color: "blue" }}>
        Download my Resume
      </a>
      <ul className="resumeList">
        <h3>Frontend Profiencies</h3>
        <p>Hover to see more information</p>
        <ul className="innerLists">
          <li>
            HTML<div>text text</div>
          </li>
          <li>
            CSS<div>text text</div>
          </li>
          <li>
            Javascript<div>text text</div>
          </li>
          <li>
            JQuery<div>text text</div>
          </li>
          <li>
            Bootstrap<div>text text</div>
          </li>
          <li>
            React<div>text text</div>
          </li>
        </ul>
        <h3>Backend Profiencies</h3>
        <p>Hover to see more information</p>
        <ul className="innerLists">
          <li>
            NodeJS<div>text text</div>
          </li>
          <li>
            ExpressJS<div>text text</div>
          </li>
          <li>
            MySQL<div>text text</div>
          </li>
          <li>
            MongoDB<div>text text</div>
          </li>
          <li>
            Sequelize<div>text text</div>
          </li>
          <li>
            Mongoose<div>text text</div>
          </li>
          <li>
            GraphQL<div>text text</div>
          </li>
          <li>
            RestAPI<div>text text</div>
          </li>
        </ul>
      </ul>
    </section>
  );
};

export default Resume;
