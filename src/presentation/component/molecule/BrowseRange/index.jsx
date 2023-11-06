// -- core
import React, {useEffect} from "react";

// style
import "./style.scss";

// -- react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// react on-scroll
import Aos from "aos";
import "aos/dist/aos.css";

const BrowseRange = (props) => {
  const { id, subtitle, img1, img2, img3 } = props;
  // const dataImg = [
  //   {
  //     id: 1,
  //     subtitle: "Dining",
  //     imgThumb: "asset/images/dummy/browse/dining/image-1.png",
  //     gallery: [
  //       {
  //         imgOri: "asset/images/dummy/browse/dining/image-1.png",
  //       },
  //       {
  //         imgOri: "asset/images/dummy/browse/dining/image-2.png",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     subtitle: "Living",
  //     imgThumb: "asset/images/dummy/browse/living/image-2.png",
  //     gallery: [
  //       {
  //         imgOri: "asset/images/dummy/browse/living/image-1.png",
  //       },
  //       {
  //         imgOri: "asset/images/dummy/browse/living/image-2.png",
  //       },
  //       {
  //         imgOri: "asset/images/dummy/browse/living/image-3.png",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     subtitle: "Bedroom",
  //     imgThumb: "asset/images/dummy/browse/bedroom/image-3.png",
  //     gallery: [
  //       {
  //         imgOri: "asset/images/dummy/browse/bedroom/image-1.png",
  //       },
  //       {
  //         imgOri: "asset/images/dummy/browse/bedroom/image-2.png",
  //       },
  //       {
  //         imgOri: "asset/images/dummy/browse/bedroom/image-3.png",
  //       },
  //     ],
  //   },
  // ];


  // --- slider
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplayspeed: 5000,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
          bottom: "36px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // --- onScroll
  useEffect(() => {
    Aos.init({duration: 2000});
  });

  return (
    <div className="section-browse__inner" data-aos="fade-up">
      <div className="section-browse__box" key={id}>
        <Slider {...settings}>
          <div className="section-browse__item">
            <img src={img1} alt={subtitle} className="section-browse__img" />
          </div>
          <div className="section-browse__item">
            <img src={img2} alt={subtitle} className="section-browse__img" />
          </div>
          <div className="section-browse__item">
            <img src={img3} alt={subtitle} className="section-browse__img" />
          </div>
        </Slider>
      </div>
      {/* <dibotv className="section-browse__list">
        {dataImg.map((data) => {
          return (
            <div className="section-browse__item" key={data.id}>
              <div className="section-browse__thumbnail">
                <div className="section-browse__box">
                  <img src={data.imgThumb} alt={data.subtitle} className="section-browse__img" />
                </div>
                <p className="section-browse__subtitle">{data.subtitle}</p>
              </div>
              {data.gallery.map((post) => (
                <div className="section-browse__popup">
                  <div className="container">
                    <div className="section-browse__popup__img" key={data.id}>
                      <img src={post.imgOri} alt={data.subtitle} className="section-browse__popup__img__el" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </dibotv> */}
      <p className="section-browse__subtitle">{subtitle}</p>
    </div>
  );
};

export default BrowseRange;
