// -- core
import React from "react";

// -- vendor-icons
import { BsFillGridFill, BsSliders2, BsViewList } from "react-icons/bs";

// -- component
import Button from "presentation/component/atom/Button";

// -- style
import "./style.scss";

const Filter = () => {
  return (
    <div className="filter">
      <div className="container">
        <div className="filter__wrapper">
          {/* form-left */}
          <div className="filter__form-left">
            <div className="filter__box">
              <form className="filter__form" action="/">
                <Button type="button" htmlFor="products" variant="icons">
                  <BsSliders2 />
                </Button>
                <select id="products" name="products" className="filter__fs-left">
                  <option value="furniture">Furniture</option>
                  <option value="sofa">Minimalist Sofa</option>
                  <option value="rak">minimalist table shelf</option>
                  <option value="chair">Minimalist Chair</option>
                </select>
                <span>Filter</span>
              </form>
              <div className="filter__btn-left">
                <Button type="button" variant="icons box-display">
                  <BsFillGridFill />
                </Button>
                <Button type="button" variant="icons box-display">
                  <BsViewList />
                </Button>
              </div>
              <div className="filter__txt">
                <p>Showing 1–16 of 32 results</p>
              </div>
            </div>
          </div>

          {/* form-right */}
          <div className="filter__form-right">
            <div className="filter__box">
              <div className="filter__resault-display">
                <label htmlFor="count">
                  <span>Show</span>
                  <input type="number" defaultValue={12} id="count" />
                </label>
              </div>
              <div className="filter__short">
                <form action="/shop" className="filter__form">
                  <span>Short By :</span>
                  <select id="short" name="short" defaultValue="Default">
                    <option value="default">Default</option>
                    <option value="lowestPrice">lowest price</option>
                    <option value="highestPrice">highest price</option>
                    <option value="discount">Discount</option>
                    <option value="newProduct">New Product</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
