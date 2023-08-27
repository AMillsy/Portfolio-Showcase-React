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
      <a href={cv} download={cv} className="download">
        Download my Resume
      </a>

      <ul className="resumeList">
        <h3>Frontend Profiencies</h3>
        <p>Hover to see more information</p>
        <ul className="innerLists">
          <li>
            HTML
            <div>
              <p>Skill: Advanced</p>
              <p>
                I have used this in most projects and getting better and better
                each time
              </p>
            </div>
          </li>
          <li>
            CSS
            <div>
              <p>Skill: Advanced</p>
              <p>Have used this hand in hand with HTML</p>
            </div>
          </li>
          <li>
            Javascript
            <div>
              <p>Skill: Advanced</p>
              <p>Using this all the time with all the projects</p>
            </div>
          </li>
          <li>
            JQuery
            <div>
              <p>Skill: Intermediate</p>
              <p>
                I have used this for a singular project that you can find on
                github called JQuery-Work-Day-Scheduler
              </p>
            </div>
          </li>
          <li>
            Bootstrap
            <div>
              <p>Skill: Novice</p>
              <p>
                I have had a contact with this library and have used it a couple
                times
              </p>
            </div>
          </li>
          <li>
            React
            <div>
              <p>Skill: Intermediate</p>
              <p>
                I have used this for personal project and is used to create this
                project as well
              </p>
            </div>
          </li>
        </ul>
        <h3>Backend Profiencies</h3>
        <p>Hover to see more information</p>
        <ul className="innerLists">
          <li>
            NodeJS
            <div>
              <p>Skill: Advanced</p>
              <p>
                Use this all the time, used in 5/6 projects on the Portfolio
                page
              </p>
            </div>
          </li>
          <li>
            ExpressJS
            <div>
              <p>Skill: Advanced</p>
              <p>Use all the time to create a server to host my backend on</p>
            </div>
          </li>
          <li>
            MySQL
            <div>
              <p>Skill: Advanced</p>
              <p>
                Used this in a couple projects, most notabilty the Visual Vault
                Projects on the portfolio page
              </p>
            </div>
          </li>
          <li>
            MongoDB
            <div>
              <p>Skill: Intermediate</p>
              <p>
                Very easy to use and have used this with Mongoose and GraphQL
              </p>
            </div>
          </li>
          <li>
            Sequelize
            <div>
              <p>Skill: Advanced</p>
              <p>
                Used it when doing MySQL and mostly when doing the Visual Vault
                project
              </p>
            </div>
          </li>
          <li>
            Mongoose
            <div>
              <p>Skill: Intermediate</p>
              <p>Goes hand in hand with MongoDB</p>
            </div>
          </li>
          <li>
            GraphQL
            <div>
              <p>Skill: Intermediate</p>
              <p>
                Flexible querier that I have recently started using with Apollo
              </p>
            </div>
          </li>
          <li>
            Apollo
            <div>
              <p>Skill: Intermediate</p>
              <p>
                Use this when I am doing GraphQL, makes it easier to write out
                my GQL statments
              </p>
            </div>
          </li>
          <li>
            RestAPI
            <div>
              <p>Skill: Advanced</p>
              <p>
                Used this alot when using MySQL and Sequelize to send handle
                queries from the frontend. Most notable project is Visual Vault
              </p>
            </div>
          </li>
          <li>
            AWS S3
            <div>
              <p>Skill: Intermediate</p>
              <p>
                Used this in the Visual Vault Project to store all the images
                that the client sent in.
              </p>
            </div>
          </li>
        </ul>
      </ul>
    </section>
  );
};

export default Resume;
