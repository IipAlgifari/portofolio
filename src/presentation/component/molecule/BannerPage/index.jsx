// -- core
import React, {useEffect} from "react";

// style
import "./style.scss";

// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

const BannerText = (props) => {
  const { title, description} = props;

  // --- onScroll
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="section-banner__card" data-aos="fade-left" data-aos-duration="2000">
      <div className="section-banner__txt">
        <h2 className="section-banner__title">{title}</h2>
        <p className="section-banner__desc">{description}</p>
      </div>
    </div>
  );
};

export default BannerText;
