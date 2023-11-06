import React, { Fragment, useEffect } from "react";

// style
import "./style.scss";

// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  const data = [
    {
      id: 1,
      img: "asset/images/dummy/feature/feature-1.png",
      title: "Hight Quality",
      desc: "crafted from top materials",
    },
    {
      id: 2,
      img: "asset/images/dummy/feature/feature-2.png",
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      id: 3,
      img: "asset/images/dummy/feature/feature-3.png",
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      id: 4,
      img: "asset/images/dummy/feature/feature-4.png",
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ];

  // --- onScroll
  useEffect(() => {
    Aos.init();
  });

  return (
    <Fragment>
      {data.map((val, index) => {
        return (
          <div key={index} className="feature__item" data-aos="fade-left" data-aos-duration="3000">
            <div className="feature__img">
              <img src={val.img} alt={val.title} className="feature__img__el" />
            </div>
            <div className="feature__text">
              <h5 className="feature__title">{val.title}</h5>
              <p className="feature__desc">{val.desc}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Feature;
