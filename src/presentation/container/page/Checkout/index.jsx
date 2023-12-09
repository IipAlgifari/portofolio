import React from "react";

import Default from "presentation/component/template/Default";

// component
import SectionBanner from "presentation/component/organism/SectionBanner";
import SectionCheckout from "presentation/component/organism/SectionCheckout";
import SectionFeature from "presentation/component/organism/SectionFeature";


const Checkout = () => {
  return (
    <Default>
      <SectionBanner logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="Checkout" navprev="Home" nav="Checkout" />
      <SectionCheckout/>
      <SectionFeature/>
    </Default>
  );
};

export default Checkout;
