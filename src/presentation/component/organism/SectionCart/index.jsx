import React from "react";
import CartTotals from "presentation/component/molecule/CartTotals";
import { BsTrash } from "react-icons/bs";

import "./style.scss";
import Input from "presentation/component/atom/Input";

const SectionCart = () => {
  const cartMenu = ["Product", "Price", "Quantity", "Subtotal"];
  const cartMenuList = cartMenu.map((list) => {
    return <li className="cart__menu__item">{list}</li>;
  });
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__wrapper">
          <div className="cart__box">
            <div className="cart__menu">
              <Input type="checkbox" variant="checkbox" />
              <ul className="cart__menu__list">{cartMenuList}</ul>
            </div>
            <div className="cart__product">
              <div className="cart__product__list">
                <div className="cart__product__item">
                  <Input type="checkbox" variant="checkbox-cart" />
                  <div className="cart__product__img">
                    <img src="asset/images/dummy/detail-product/asgaard-sofa3.png" alt="" className="cart__product__img__el" />
                  </div>
                  <div className="cart__product__name">
                    <p> Asgaard sofa Lorem ipsum dolor sit amet. </p>
                  </div>
                  <p className="cart__product__price">Rp250.000</p>
                  <Input type="number" variant="count i-cart" value="1" />
                  <p className="cart__product__subtotal">Rp250.000</p>
                  <span>
                    <BsTrash />
                  </span>
                </div>

                <div className="cart__product__item">
                  <Input type="checkbox" variant="checkbox-cart" />
                  <div className="cart__product__img">
                    <img src="asset/images/dummy/detail-product/asgaard-sofa3.png" alt="" className="cart__product__img__el" />
                  </div>
                  <div className="cart__product__name">
                    <p> Asgaard sofa Lorem ipsum dolor sit amet. </p>
                  </div>
                  <p className="cart__product__price">Rp250.000</p>
                  <Input type="number" variant="count i-cart" value="1" />
                  <p className="cart__product__subtotal">Rp250.000</p>
                  <span>
                    <BsTrash />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <CartTotals />
        </div>
      </div>
    </div>
  );
};

export default SectionCart;
