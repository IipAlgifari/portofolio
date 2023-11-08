import { Fragment } from "react";
import { useEffect } from "react";

// data
import dataInspirations from "../../organism/SectionInspiration/dataInspirations";

// ---vendor
import { FaArrowRightLong } from "react-icons/fa6";
// -- react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

// style
import "./style.scss";

const Inspirations = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  // --- onScroll
  useEffect(() => {
    Aos.init();
  });

  return (
    <Fragment>
      <Slider {...settings}>
        {dataInspirations.map((slide, index) => {
          return (
            <div className="inspirations__item" key={index}>
              <div className="inspirations__img" data-aos="fade" data-aos-duration="2000">
                <img src={slide.image} alt={slide.category} className="inspirations__img__el" />
              </div>
              <div className="inspirations__content">
                <div className="inspirations__content__box">
                  <p className="inspirations__content__txt">{slide.category}</p>
                  <h4 className="inspirations__content__title">{slide.subtitle}</h4>
                  <div className="inspirations__btn-arrow">
                    <button className="btn--arrow">
                      <span className="fn-icon">
                        <FaArrowRightLong />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
};

export default Inspirations;
