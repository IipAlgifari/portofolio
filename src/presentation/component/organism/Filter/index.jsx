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
            <div className="filter__icon-btn">
              <Button type="button"><BsSliders2/> <span>Filter</span></Button>
              <Button type="button"><BsFillGridFill/></Button>
              <Button type="button"><BsViewList/></Button>
            </div>
            <div className="filter__results">
              <p>Showing 1–16 of <span>32</span> results</p>
            </div>
          </div>
          <div className="filter__right">
            <div className="showing">
              show 
              <span>16</span>
            </div>
            <div className="short">
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
