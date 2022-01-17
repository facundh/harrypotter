import React from "react";
import {  NavLink } from "react-router-dom";
import { GlobalConsumer } from "../../context/GlobalContext";
import ComboBox from "../ComboBox/ComboBox";

const Navbar = ({noMostrar}) => {

  const { setSearch } = GlobalConsumer();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-primary bg-success ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100 " id="navbarNavAltMarkup">
          <div className="navbar-nav w-80">
            <NavLink className="nav-link" to="/">
              {" "}
              Home{" "}
            </NavLink>
            <NavLink className="nav-link" to="/favoritos">
              {" "}
              Favoritos
            </NavLink>
            <div className="w-100">
              <form className="mx-5 d-flex justify-content-space-between align-items-center">
                <input
                  className="form-control mx-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
               
                
                {!noMostrar && <ComboBox />}
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
