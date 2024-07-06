import React, { FC } from "react";
import "./hero.scss";
import heroUp from "../../assets/hero/hero-logo.png";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <img src={heroUp} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed
          justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis.
          Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi.
          Tortor nibh magna feugiat id nunc, dui nisl viverra.
        </p>
      </div>
    </section>
  );
};

export default Hero;
