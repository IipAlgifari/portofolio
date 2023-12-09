// -- core
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { initAnimation } from "core/util/Animate/animate";
// -- icons
import { BsChevronRight } from "react-icons/bs";
// style
import "./style.scss";

const SectionBanner = (props) => {
  const { logo, img, title, navprev, nav } = props;

  // --- onScroll
  useEffect(() => {
    initAnimation();
  }, []);

  return (
    <section className="section-banner">
      <div className="section-banner__wrapper" data-aos="fade" data-aos-duration="3000">
        <div className="section-banner__box">
          <img src={img} alt="hero-banner" className="section-banner__img" />
        </div>
        <div className="section-banner__txt">
          <div className="section-banner__logo" data-aos="fade-down" data-aos-duration="3000">
            <img src={logo} alt="Furniro" className="section-banner__logo__el" />
          </div>
          <h2 className="section-banner__title" data-aos="fade-right" data-aos-duration="3000">
            {title}
          </h2>
          <ul className="section-banner__list" data-aos="fade-left" data-aos-duration="3000">
            <li className="section-banner__item">
              <Link className="section-banner__link" to="/">
                {navprev}
              </Link>
            </li>
            <li className="section-banner__item">
              <BsChevronRight />
            </li>
            <li className="section-banner__item">
              <Link className="section-banner__link" to="/shop">
                {nav}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
