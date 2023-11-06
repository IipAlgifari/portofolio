import React from "react";

import Default from "presentation/component/template/Default";

// component
import SectionBanner from "presentation/component/organism/SectionBanner";
import Filter from "presentation/component/molecule/Filter";
import ShowProduct from "presentation/component/organism/ShowProduct";
import SectionFeature from "presentation/component/organism/SectionFeature";

const Shop = () => {
  return (
    <Default>
      <SectionBanner logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="Shop" navprev="Home" nav="Shop"/>
      <Filter/>
      <ShowProduct/>
      <SectionFeature/>
    </Default>
  );
};

export default Shop;
