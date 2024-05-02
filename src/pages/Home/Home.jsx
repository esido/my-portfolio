import React from "react";
import "./Home.css";
import bigGlow from "../../img/big_glow.png";
import githubLogo from "../../img/my_github.svg";
import instagramLogo from "../../img/my_instagram.svg";
import linkedinLogo from "../../img/my_linkedin.svg";
import smallCurves from "../../img/side_curves.png";
import miniBall from "../../img/mini_ball.png";

const Home = () => {
  return (
    <section className="home">
      <div>
        <h1 className="home-title">
          Nurmurodov <br /> Jasurbek
        </h1>
        <div className="home-info">
          <p className="home-text">
            I'm a frontend developer with passion for learning and creating
          </p>
        </div>
      </div>
      <div>
        <button className="home-cv">CV</button>
      </div>
      <img src={bigGlow} className="home-circle" />
      <img src={smallCurves} className="home-circle" />
      <img src={miniBall} className="home-minicircle" />
      <div className="home__links">
        <a href="https://github.com/esido" target="_blank">
          <img src={githubLogo} />
        </a>
        <a href="https://www.instagram.com/jasur.nj/" target="_blank">
          <img src={instagramLogo} />
        </a>
        <a
          href="https://www.linkedin.com/in/jasurbek-nurmurodov-36a750290/"
          target="_blank"
        >
          <img src={linkedinLogo} />
        </a>
      </div>
    </section>
  );
};

export default Home;
