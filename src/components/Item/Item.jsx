import React from "react";
import { Link } from "react-router-dom";
import { GlobalConsumer } from "../../context/GlobalContext";
import { isInFavorites } from "../../helper/helper";
import griffindor from '../../img/griffindor.jpeg'

const Item = ({ item }) => {
  const {agregarFav,favourites, deleteFav} = GlobalConsumer();



  return (
    <>

   
      <div className="col col-md-4 my-3">
        <div className="card" style={{ width: "25rem" }}>

            
          <img src={item.image ? item.image : griffindor} className="card-img-top" style={{height:'500px', objectFit:'center'}} alt="image" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.house}</p>
            <Link to={`/info/${item.id}`} className="btn btn-primary w-100 my-2">
              Ver Mas
              </Link>
            {
              isInFavorites(item.id,favourites) ? <button className="btn btn-warning w-100"  onClick={() => deleteFav(item.id)}>Eliminar de Favoritos</button>
              :<button className="btn btn-danger w-100" onClick={() => agregarFav(item)}>Agregar a Favoritos</button>
            }
     
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
