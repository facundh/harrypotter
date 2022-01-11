import React from "react";
import ItemListCointainer from "../components/ItemListContainer/ItemListCointainer";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
    <div className="container-fluid">

      <Navbar />
      <ItemListCointainer />
    </div>
    </>
  );
};

export default Home;
