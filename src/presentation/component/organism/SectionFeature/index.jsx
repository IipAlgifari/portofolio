import React from "react";
import Feature from "presentation/component/molecule/Feature";

const SectionFeature = () => {
  return (
    <div className="feature" data-aos="fade" data-aos-duration="2000">
      <div className="container">
        <div className="feature__wrapper">
          <Feature />
        </div>
      </div>
    </div>
  );
};

export default SectionFeature;
