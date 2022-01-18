import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoCharacter from "../components/InfoCharacter/InfoCharacter";
import Layout from "../components/Layout/Layout";
import GlobalProvider from "../context/GlobalContext";
import Categoria from "../views/Categoria";
import Favoritos from "../views/Favoritos";
import Home from "../views/Home";

const Rutas = () => {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="categoria/:categoria" element={<Categoria />} />
          </Route>
            <Route path="/info/:id" element={<InfoCharacter />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
};

export default Rutas;
