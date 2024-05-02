import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-block">
        <div className="about-img"></div>
        <div>
          <h2 className="about-title">About me</h2>
          <p className="about-text">
            Nurmurodov Jasurbek, a talented web developer with a passion for
            crafting elegant and functional digital solutions. Armed with
            expertise in HTML,CSS, JavaScript,React.js and more, Their keen eye
            for detail,coupled with theircommitment to staying abreast of
            industry trends,ensures that every project they undertake is not
            only visually stunning but also optimizedfor peak performance.
          </p>
          <button className="about-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
