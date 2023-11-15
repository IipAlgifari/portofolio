import Default from "presentation/component/template/Default";

// component
import SectionBanner from "presentation/component/organism/SectionBanner";
import SectionFeature from "presentation/component/organism/SectionFeature";
import SectionCart from "presentation/component/organism/SectionCart";

const Cart = () => {
  return (
    <Default>
      <SectionBanner logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="Cart" navprev="Home" nav="Cart" />
      <SectionCart />
      <SectionFeature />
    </Default>
  );
};

export default Cart;
