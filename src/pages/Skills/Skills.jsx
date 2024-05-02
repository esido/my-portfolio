import React from "react";
import "./Skills.css"
import cssSkills from "../../img/css-skills.png"
import jsSkills from "../../img/js-skills.png"
import reactSkills from "../../img/react-skills.png"
import figmaSkills from "../../img/figma-skills.png"
import tailwindSkills from "../../img/tailwind-skills.png"
import sassSkills from "../../img/sass-skills.png"

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-block">
        <div>
          <div  className="skills-block__content">
            <span>Css</span>
            <img src={cssSkills} />
          </div>
          <div  className="skills-block__content">
            <span>Javascript</span>
            <img src={jsSkills} />
          </div>
          <div  className="skills-block__content">
            <span>React</span>
            <img src={reactSkills} />
          </div>
        </div>
        <div>
          <div  className="skills-block__content">
            <span>Figma</span>
            <img src={figmaSkills} />
          </div>
          <div  className="skills-block__content">
            <span>Tailwind</span>
            <img src={tailwindSkills} />
          </div>
          <div  className="skills-block__content">
            <span>SCSS/SASS</span>
            <img src={sassSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
