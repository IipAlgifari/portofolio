import React, { useEffect, useState } from "react";

// data
import dbProduct from "./dbProduct";

// component
import ProductCard from "presentation/component/molecule/ProductCard";

// style
import "./style.scss";

// global state
import useCart from "core/state/useCart";

const ShowProduct = () => {
  const productPerPage = 18;
  const [activePg, setActivePg] = useState(1);
  const [pages, setPages] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);

  const { add: addCart } = useCart();

  useEffect(() => {
    const pagesTemp = [];
    for (let i = 1; i < Math.ceil(dbProduct.length / productPerPage); i++) {
      pagesTemp.push(i);
    }

    setPages(pagesTemp);
  }, []);

  useEffect(() => {
    const last = activePg * productPerPage; //2 8
    const first = last - productPerPage;
    let displayProductTemp = [...dbProduct];
    displayProductTemp = displayProductTemp.slice(first, last);
    setDisplayProduct(displayProductTemp);
  }, [activePg]);

  const handleClickPage = (currentPage) => {
    setActivePg(currentPage);
  };

  // -- handleClick-item
  const handleClickItem = (item) => {
    console.log("test", item);
    addCart(item);
  };

  return (
    <div className="show-product">
      <div className="container">
        <div className="show-product__wrapper">
          <div className="show-product__list">
            {displayProduct.map((item) => (
              <ProductCard key={item.id} item={item} handleClickItem={handleClickItem} />
            ))}
          </div>
          <div className="show-product__btn">
            {pages.map((val, idx) => (
              <button key={`plbtn-${idx}`} className={val === activePg ? "active" : "inactive"} onClick={() => handleClickPage(val)}>
                {val}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
