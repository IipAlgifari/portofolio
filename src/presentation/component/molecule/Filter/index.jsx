// -- core
import React from "react";

// -- vendor-icons
// import { BsFillGridFill, BsSliders2, BsViewList } from "react-icons/bs";

// -- component
// import Button from "presentation/component/atom/Button";

// -- style
import "./style.scss";

const Filter = (props) => {
  const {judul, desc }= props;

  return (
    <div className="filter">
      <div className="container">
        <h1>{judul}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Filter;
