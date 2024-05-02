import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../../animation";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>frontend</span>
        <span>developer</span> <br />
      </div>
    </div>
  );
};

export default Preloader;
