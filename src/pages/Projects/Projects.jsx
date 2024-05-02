import React from "react";
import "./Projects.css";
import firstProject from "../../img/project_1.png";
import secondProject from "../../img/project_2.png";
import thirdProject from "../../img/project_3.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-content">
        <div className="projects-block">
          <a href="#" className="projects-link">
            <img src={firstProject} />
          </a>
          <span>Project 1</span>
        </div>
        <div className="projects-block">
          <a href="#" className="projects-link">
            <img src={secondProject} />
          </a>
          <span>Project 2</span>
        </div>
        <div className="projects-block">
          <a  href="#"className="projects-link">
            <img src={thirdProject} />
          </a>
          <span>Project 3</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
