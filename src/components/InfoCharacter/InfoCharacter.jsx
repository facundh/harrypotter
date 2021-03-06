import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalConsumer } from "../../context/GlobalContext";
import { isInFavorites } from "../../helper/helper";
import griffindor from "../../img/griffindor.jpeg";
import Navbar from "../Navbar/Navbar";

const InfoCharacter = () => {
  const { agregarFav, favourites, deleteFav, characters } = GlobalConsumer();
  const [character, setCharacter] = useState(null);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { id } = useParams();

  const getCharacters = () => {
    setCharacter(characters.find((personaje) => personaje.id === id));
  };

  useEffect(() => {
    getCharacters();
  }, [id]);

  return (
    <>
      {!character ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="cardCointainer">
          <div>
            <div
              className="card text-center mx-auto"
              style={{ width: "25rem" }}
            >
              <img
                src={character.image ? character.image : griffindor}
                className="card-img-top"
                style={{ height: "500px", objectFit: "center" }}
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.house}</p>
                <p className="font-weight-bold text-capitalize">
                  {" "}
                  Especie : {character.species}
                </p>
                <p className="font-weight-bold text-capitalize">
                  {" "}
                  Patronus : {character.patronus}{" "}
                </p>

                <button className="btn btn-dark w-100 my-2" onClick={goBack}>
                  Volver
                </button>

                {isInFavorites(character.id, favourites) ? (
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => deleteFav(character.id)}
                  >
                    Eliminar de Favoritos
                  </button>
                ) : (
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => agregarFav(character)}
                  >
                    Agregar a Favoritos
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoCharacter;
