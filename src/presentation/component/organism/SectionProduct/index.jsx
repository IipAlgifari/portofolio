//core
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "core/state/useCart";
import { initAnimation } from "core/util/Animate/animate";
// dataProduct
import DataProduct from "./dataProducts";
// component
import ProductCard from "presentation/component/molecule/ProductCard";
import Button from "../../atom/Button";

// style
import "./style.scss";

const SectionProduct = () => {
  const { add: addCart } = useCart();
  const navigate = useNavigate();

  // -- onScroll
  useEffect(() => {
    initAnimation();
  }, []);

  // -- handleClick-item
  const handleClickItem = (item) => {
    addCart(item);
  };
  // -- handleClick-product
  const handleClickProduct = (item) => {
    navigate(`/detail-product/${item.id}`);
  };

  return (
    <section className="product" data-aos="fade" data-aos-duration="2000">
      <div className="container">
        <div className="product__wrapper">
          <h3 className="product__title" data-aos="fade" data-aos-duration="3000">
            Our Product
          </h3>
          <div className="product__list">
            {DataProduct.map((item) => (
              <ProductCard key={item.id} item={item} handleClickItem={handleClickItem} handleClickProduct={handleClickProduct} />
            ))}
          </div>
          <div className="product__btn" data-aos="fade-left" data-aos-duration="1000">
            <Button type="link" variant="secondary" to="/shop">
              Show More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
