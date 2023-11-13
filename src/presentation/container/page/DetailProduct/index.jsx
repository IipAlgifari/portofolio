import Default from "presentation/component/template/Default";

// component
import SectionFeature from "presentation/component/organism/SectionFeature";
import RelatedProduct from "presentation/component/organism/RelatedProduct";
import SectionProductDetails from "presentation/component/organism/SectionProductDetails";

const DetailProduct = () => {
  return (
    <Default>
      <SectionProductDetails/>
      <RelatedProduct/>
      <SectionFeature/>
    </Default>
  )
}

export default DetailProduct
