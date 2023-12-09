import Default from "presentation/component/template/Default";

// component
import SectionBanner from "presentation/component/organism/SectionBanner";
import ProductComparison from "presentation/component/organism/ProductComparison";
import SectionFeature from "presentation/component/organism/SectionFeature";

const Comparison = () => {
  return (
    <Default>
      <SectionBanner logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="Product Comparison" navprev="Home" nav="Comparison" />
      <ProductComparison/>
      <SectionFeature />
    </Default>
  );
};

export default Comparison;
