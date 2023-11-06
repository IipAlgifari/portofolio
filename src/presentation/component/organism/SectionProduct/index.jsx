import React, { useEffect } from "react";

// core-globalState
import useGlobalState, { stateCart } from "core/state/cart";

// dataProduct
import DataProduct from "./dataProducts";
import Button from "../../atom/Button";

// component
import ProductCard from "presentation/component/molecule/ProductCard";

// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

// style
import "./style.scss";

const SectionProduct = () => {
  const [, setCart] = useGlobalState(stateCart);
  // -- onScroll
  useEffect(() => {
    Aos.init();
  });

  // -- handleClick-item
  const handleClickItem = (item) => {
    setCart(item);
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

export default SectionProduct;
