import React, { useContext, createContext, useState } from "react";
import axiosClient from "../axios";
import { v4 as uuid } from "uuid";

const GlobalContext = createContext();
export const GlobalConsumer = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const characterSession = JSON.parse(sessionStorage.getItem("characters"));
  const favouriteSession = JSON.parse(sessionStorage.getItem("favourite"));
  const [characters, setCharacters] = useState(characterSession || []);
  const [favourites, setFavourites] = useState(favouriteSession || []);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await axiosClient.get("/characters");
      const array = response.data.map((e) => {
        return { ...e, id: uuid() };
      });
      sessionStorage.setItem("characters", JSON.stringify(array));
      setCharacters(array);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarFav = (character) => {
    setFavourites([...favourites, character]);
    sessionStorage.setItem(
      "favourite",
      JSON.stringify([...favourites, character])
    );
  };

  const deleteFav = (id) => {
    const delArr = favourites.filter((e) => e.id !== id);
    setFavourites(delArr);
    sessionStorage.setItem("favourites", JSON.stringify(delArr));
  };

  return (
    <GlobalContext.Provider
      value={{
        getData,
        agregarFav,
        characters,
        favourites,
        deleteFav,
        search,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
