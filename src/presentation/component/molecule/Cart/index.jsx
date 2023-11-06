import React from "react";
import item from "../../organism/SectionProduct";

// component
import Button from "presentation/component/atom/Button";

import { BsTrash } from "react-icons/bs";

const Cart = () => {
  return (
    <div>
      {item.map((val) => {
        return (
          <div className="header__cart__item" key={val.id}>
            <div className="header__cart__product">
              <div className="header__cart__img">
                <img src={val.image} alt={val.name} />
              </div>
              <div className="header__cart__txt">
                <p className="header__cart__product-name">{val.name}</p>
                <div className="header__cart__count-pd">
                  <p className="header__cart__total-items">
                    <span>1</span> X
                  </p>
                  <p className="header__cart__price">{val.price}</p>
                </div>
              </div>
            </div>
            <Button variant="icons trash">
              <BsTrash />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
