import React from "react";
import CategoryList from "../CategoryList";

import ItemList from "../itemList";
import "./styles.scss";

const ItemListContainer = () => {
  return (
    <>
      <CategoryList />
      <div className="middle-block">
        <h2>¡HACÉ QUE TU ENERGÍA SEA ESPECIAL! </h2>
        <h4>Encontra tu centro con tu amuleto </h4>
      </div>
      <ItemList></ItemList>
    </>
  );
};

export default ItemListContainer;
