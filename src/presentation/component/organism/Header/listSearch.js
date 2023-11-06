import { React } from "react";
import data from "../ShowProduct/dbProduct";

function List(props) {
  const filterByName = props.input;
  const filteredData = data.filter((i) => i.name === filterByName);

  return (
    <ul>
      {filteredData.map((item) => (
        <div key={item.id} className="header__search__item-query">
          <p>{item.name}</p>
        </div>
      ))}
    </ul>
  );
}

export default List;
