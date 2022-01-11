import React from "react";
import griffindor from '../../img/griffindor.jpeg'

const Item = ({ item }) => {



  return (
    <>

   
      <div className="col col-md-4 my-3">
        <div className="card" style={{ width: "25rem" }}>

            
          <img src={item.image ? item.image : griffindor} className="card-img-top" style={{height:'500px', objectFit:'center'}} alt="image" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.house}</p>
            <button className="btn btn-primary w-100 my-2">Ver Mas</button>
            <button className="btn btn-danger w-100">Agregar a Favoritos</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
