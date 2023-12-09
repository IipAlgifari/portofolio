import React from "react";
import CartTotals from "presentation/component/molecule/CartTotals";
import { BsTrash } from "react-icons/bs";

import "./style.scss";
import Input from "presentation/component/atom/Input";
import useCart from "core/state/useCart";
import formatRupiah from "core/util/FormatRupiah/formatRupiah";


const SectionCart = () => {
  const cartMenu = ["Product", "Price", "Quantity", "Subtotal"];
  const cartMenuList = cartMenu.map((list) => {
    return <li className="cart__menu__item">{list}</li>;
  });
  const { items: listCart, remove: deleteCart } = useCart();

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
                {listCart.map((val) => {
                  return (
                    <div className="cart__product__item" key={val.id}>
                      <Input type="checkbox" variant="checkbox-cart" />
                      <div className="cart__product__img">
                        <img src={val.image} alt={val.name} className="cart__product__img__el" />
                      </div>
                      <div className="cart__product__name">
                        <p> Asgaard sofa Lorem ipsum dolor sit amet. </p>
                      </div>
                      <p className="cart__product__price">{formatRupiah(val.price)}</p>
                      <Input type="number" variant="count i-cart" value={val.qty} />
                      <p className="cart__product__subtotal">Rp250.000</p>
                      <span>
                        <BsTrash />
                      </span>
                    </div>
                  );
                })}
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
