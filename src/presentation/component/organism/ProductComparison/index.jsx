import React from "react";
// component
import ProductItemComparison from "presentation/component/molecule/ComparisonTable/productItemComparison";
import ComparisonTable from "presentation/component/molecule/ComparisonTable/comparisonTable";
import Button from "presentation/component/atom/Button";

import comparations from "./comparation";

import "./style.scss";

const ProductComparison = () => {
  return (
    <div className="comparison">
      <div className="container">
        <div className="wrapper">
          <div className="comparison__head">
            <div className="comparison__txt">
              <h4 className="comparison__title">Go to Product page for more Products</h4>
              <Button type="link" variant="view-more">
                View More
              </Button>
            </div>
            <div className="comparison__product">
              <div className="comparison__product__list">
                <ProductItemComparison />
                <ProductItemComparison />
              </div>
            </div>
            <div className="comparison__select">
              <h4 className="comparison__txt-btn">Add A Product</h4>
              <select name="product" id="product-item">
                <option value="choose">Choose a Product</option>
                <option value="sofa-asgaard">Sofa Asgaard</option>
                <option value="sofa-outdoor">Outdoor Sofa Set</option>
              </select>
            </div>
          </div>
          <div className="comparison__body">
            {comparations.map((comparation) => (
              <ComparisonTable comparation={comparation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
