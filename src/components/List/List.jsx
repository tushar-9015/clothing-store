import React from "react";
import "./list.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {

  // console.log(subCats);
  const subCatString = subCats.map(
    (item, idx) => `[filters][sub_categories][id][$in][${idx}]=${item}`
  ).join('&');
  
  
  const { data, loading, error } = useFetch( `/products?populate=*&[filters][categories][id]=${catId}&${subCatString}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
