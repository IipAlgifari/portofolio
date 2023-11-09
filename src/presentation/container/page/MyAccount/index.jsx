import React from "react";

import Default from "presentation/component/template/Default";

// component
import SectionBanner from "presentation/component/organism/SectionBanner";
import SectionMyAccount from "presentation/component/organism/SectionMyAccount";
import SectionFeature from "presentation/component/organism/SectionFeature";

const MyAccount = () => {
  return (
    <Default>
      <SectionBanner logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="My Account" navprev="Home" nav="My Account" />
      <SectionMyAccount />
      <SectionFeature />
    </Default>
  );
};

export default MyAccount;
