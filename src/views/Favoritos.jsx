import React from "react";
import ItemListCointainer from "../components/ItemListContainer/ItemListCointainer";
import Navbar from "../components/Navbar/Navbar";
import { GlobalConsumer } from "../context/GlobalContext";

const Favoritos = () => {
  const { favourites } = GlobalConsumer();
  return (
    <>
      <Navbar noMostrar />
      {favourites.length < 1 ? (
        <h1>'No Hay Favoritos'</h1>
      ) : (
        <div className="favouritesContainer">
          <ItemListCointainer array={favourites} />
        </div>
      )}
    </>
  );
};

export default Favoritos;
