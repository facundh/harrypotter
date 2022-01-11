import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        {data && data.map((e) => <Item key={e.name} item={e} />)}
      </div>
    </div>
  );
};

ItemList.propTypes = {};

export default ItemList;
