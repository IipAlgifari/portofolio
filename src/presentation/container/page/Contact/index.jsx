import React from "react";

import Default from "presentation/component/template/Default";

// component
import SectionBanner from "presentation/component/organism/SectionBanner";
import SectionFeature from "presentation/component/organism/SectionFeature";
import SectionContact from "presentation/component/organism/SectionContact";


const Shop = () => {
  return (
    <Default>
      <SectionBanner logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="Contact" navprev="Home" nav="Contact"/>
      <SectionContact/>
      <SectionFeature/>
    </Default>
  );
};

export default Shop;
