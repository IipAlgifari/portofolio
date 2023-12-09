// -- core
import React, { useEffect } from "react";
import { initAnimation } from "core/util/Animate/animate";
// -- component
import BannerCard from "presentation/component/molecule/Banner";

// style
import "./style.scss";

const HeroBanner = () => {
  const dataBanner = {
    subtitle: "New Arrival",
    title: "Discover Our New Collection",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  };

  useEffect(() => {
    initAnimation();
  }, []);

  return (
    <section className="hero-banner">
      <div className="hero-banner__img" data-aos="zoom-out" data-aos-duration="2000">
        <img src="asset/images/banner/bg-img-1.png" alt="hero-banner" className="hero-banner__img__el" />
      </div>
      <div className="container">
        <div className="hero-banner__wrapper">
          <BannerCard subtitle={dataBanner.subtitle} title={dataBanner.title} description={dataBanner.description} />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
