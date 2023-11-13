import React, { useEffect } from "react";
// core-globalState
import useCart from "core/state/useCart";
// dataProduct
import DataProduct from "./dataRelated";
// component
import ProductCard from "presentation/component/molecule/ProductCard";
import Button from "../../atom/Button";
// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

// style
import "./style.scss";

const RelatedProduct = () => {
  const { add: addCart } = useCart();
  // -- onScroll
  useEffect(() => {
    Aos.init();
  }, []);

  // -- handleClick-item
  const handleClickItem = (item) => {
    console.log(item);
    addCart(item);
  };

  return (
    <section className="product" data-aos="fade" data-aos-duration="2000">
      <div className="container">
        <div className="product__wrapper">
          <h3 className="product__title" data-aos="fade" data-aos-duration="3000">
            Related Product
          </h3>
          <div className="product__list">
            {DataProduct.map((item) => (
              <ProductCard key={item.id} item={item} handleClickItem={handleClickItem} />
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

export default RelatedProduct;
