import React from "react";
import { GlobalConsumer } from "../../context/GlobalContext";
import ItemList from "../ItemList/ItemList";


const ItemListCointainer = ({array, bg}) => {

  const {search} = GlobalConsumer();

  const buscador = array.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
  return (
    
    <div className={bg && bg}>
      <ItemList data={buscador} />
    </div>
  );
};

export default ItemListCointainer;
