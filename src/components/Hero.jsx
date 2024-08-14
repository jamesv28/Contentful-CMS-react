import React from "react";
import HeroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1 className="hero-title">Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut maiores
            error fugit eaque officia optio nostrum cumque reprehenderit illum
            quaerat odit, modi odio fugiat deserunt quos laborum quis corrupti
            tempora!
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
