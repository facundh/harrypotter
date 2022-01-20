import React from "react";
import { useParams } from "react-router-dom";
import ItemListCointainer from "../components/ItemListContainer/ItemListCointainer";
import { GlobalConsumer } from "../context/GlobalContext";

const Categoria = () => {
  const { categoria } = useParams();

  const { characters } = GlobalConsumer();

  let filtrado = characters.filter(
    (character) => character.house === categoria
  );

  return (
    <div>
      {filtrado.length < 1 ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemListCointainer bg="homeContainer" array={filtrado} />
      )}
    </div>
  );
};

export default Categoria;
