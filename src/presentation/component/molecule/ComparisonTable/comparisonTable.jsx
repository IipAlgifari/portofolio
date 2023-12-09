import React from "react";
import "./comparisonTbl.scss";
const ListOfSpecification = ({ list }) => (
  <ul>
    {list.map((val) => (
      <li>{val}</li>
    ))}
  </ul>
);

const ComparisonTable = ({ comparation }) => {
  return (
    <div className="comparison__tbl">
      {comparation.items.map((item, index) => {
        return (
          <div className="comparison__tbl__box">
            <div className="comparison__tbl__wrapper">
              <div className="comparison__tbl__item">
                <div className="txt">
                  <h3 className="comparison__tbl__title">{index === 0 ? comparation.title : ""}</h3>
                </div>
                <ListOfSpecification list={item.values} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ComparisonTable;
