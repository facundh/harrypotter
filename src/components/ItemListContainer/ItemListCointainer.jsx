import React from "react";
import { GlobalConsumer } from "../../context/GlobalContext";
import ItemList from "../ItemList/ItemList";


const ItemListCointainer = ({array}) => {

  const {search} = GlobalConsumer();

  const buscador = array.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <ItemList data={buscador} />
    </>
  );
};

export default ItemListCointainer;
