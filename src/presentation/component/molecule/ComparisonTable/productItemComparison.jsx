import { BsFillStarFill } from "react-icons/bs";

import "./product-item-comparison.scss";

const ProductItemComparison = () => {

  return (
    <div className="comparison__product__item">
      <div className="comparison__product__img">
        <img src="asset/images/dummy/detail-product/asgaard-sofa3.png" alt="product sofa " className="comparison__product__img__el" />
      </div>
      <div className="comparison__product__txt">
        <h3 className="comparison__product__title">Asgaard Sofa</h3>
        <p className="comparison__product__price">Rp. 250.000</p>
        <div className="comparison__product__rate">
          <div className="comparison__product__rate-stars">
            <span>4.7</span>
            <span className="str"><BsFillStarFill/></span>
            <span className="str"><BsFillStarFill/></span>
            <span className="str"><BsFillStarFill/></span>
            <span className="str"><BsFillStarFill/></span>
          </div>
          <p className="comparison__product__review">204 Review</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemComparison;
