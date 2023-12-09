import React from "react";

import Default from "presentation/component/template/Default";
import SectionBanner from "presentation/component/organism/SectionBanner";
import SectionFeature from "presentation/component/organism/SectionFeature";

// component


const About = () => {
  return (
    <Default>
      <SectionBanner  logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="About" navprev="Home" nav="About"/>
      <SectionFeature/>
    </Default>
  );
};

export default About;
