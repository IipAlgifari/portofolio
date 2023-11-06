// -- core
import React, {useEffect} from "react";


// style
import "./style.scss";

//component
import Button from "presentation/component/atom/Button";

// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

const BannerCard = (props) => {
  const { subtitle, title, description, btnTo } = props;

  // --- onScroll
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="hero-banner__card" data-aos="fade-left" data-aos-duration="2000">
      <div className="hero-banner__txt">
        <h4 className="hero-banner__subtitle">{subtitle}</h4>
        <h2 className="hero-banner__title">{title}</h2>
        <p className="hero-banner__desc">{description}</p>
        <div className="hero-banner__btn">
          <Button  href={btnTo}>
            buy now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
