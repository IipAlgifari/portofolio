import React, {useEffect} from "react";

// data
// import dataInspirations from "./dataInspirations";
// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

// component
import Inspirations from "presentation/component/molecule/Inspirations";
import Button from "presentation/component/atom/Button";

// style
import "./style.scss";

const SectionInspirations = (props) => {
  const { title, description } = props;
  // --- onScroll
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="inspirations">
      <div className="inspirations__fullhalf">
        <div className="inspirations__text">
          <h3 className="inspirations__title"data-aos="fade-right" data-aos-duration="2000">{title}</h3>
          <p className="inspirations__desc" data-aos="fade-left" data-aos-duration="2000">{description}</p>
          <div className="inspirations__btn" data-aos="fade" data-aos-duration="3000">
            <Button variant="secondary btn-inspiration">Explore More</Button>
          </div>
        </div>
        <div className="inspirations__slider">
          <div className="inspirations__box" data-aos="fade-left" data-aos-duration="1000">
            <Inspirations />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInspirations;
