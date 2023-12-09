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
          <div className="filter__left">
            <div className="filter__box">
              <div className="filter__list-btn">
                <Button type="button" variant="icons">
                  <BsSliders2 />{" "}
                </Button>
                <span>Filter</span>
                <Button type="button" variant="icons">
                  <BsFillGridFill />
                </Button>
                <Button type="button" variant="icons">
                  <BsViewList />
                </Button>
              </div>
              <div className="filter__results">
                <p>
                  Showing 1–16 of <span>32</span> results
                </p>
              </div>
            </div>
          </div>
          <div className="filter__right">
            <div className="showing">
              show
              <span>16</span>
            </div>
            <div className="filter__short">
              <span>Short By</span>
              <select name="shortby" id="_short">
                <option value="default">Default</option>
                <option value="sofa">Sofa</option>
                <option value="table">Table</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
