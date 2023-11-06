import React, { Fragment, useEffect } from "react";

// component
import BrowseRange from "../../molecule/BrowseRange";

// db
import DataBrowse from "./dataBrowse";

// style
import "./style.scss";

// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

const SectionBrowse = (props) => {
  const { title, description } = props;

  // --onScroll
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="section-browse">
      <div className="container">
        <div className="section-browse__wrapper">
          <div className="section-browse__txt">
            <h2 className="section-browse__title" data-aos="fade">{title}</h2>
            <p className="section-browse__desc" data-aos="fade-up">{description}</p>
          </div>
          <div className="section-browse__gallery">
            {DataBrowse.map((val, idx) => {
              return (
                <Fragment key={`fi-${idx}`}>
                  <BrowseRange subtitle={val.subtitle} img1={val.img1} img2={val.img2} img3={val.img3} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBrowse;
