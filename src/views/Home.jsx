import React, {useEffect} from "react";
import ItemListCointainer from "../components/ItemListContainer/ItemListCointainer";
import Navbar from "../components/Navbar/Navbar";
import { GlobalConsumer } from "../context/GlobalContext";

const Home = () => {
  const { getData, characters} = GlobalConsumer();

  useEffect(() => {
      
    if(characters.length < 1 ){
      getData();
    }
  
}, []);
  return (
    <>
    <div className="homeContainer">
      <Navbar />
      <ItemListCointainer array={characters}/>
    </div>
    </>
  );
};

export default Home;
