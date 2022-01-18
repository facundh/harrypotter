import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import ItemListCointainer from '../components/ItemListContainer/ItemListCointainer'
import Navbar from '../components/Navbar/Navbar'
import { GlobalConsumer } from '../context/GlobalContext'

const Categoria = () => {
    const [filtrados, setFiltrados] = useState([]);
    const {categoria} = useParams();

    const { characters } = GlobalConsumer();

    const getCharacters = () => {
       setFiltrados(characters.filter(character => character.house === categoria)); 
    }

    useEffect(() => {
        getCharacters()
    },[categoria]);
    
    return (
        <div>
        
            {
                filtrados.length < 1 ? <h1>Cargando...</h1> : <ItemListCointainer  bg='homeContainer' array={filtrados} /> 
            }
            
        </div>
    )
}

export default Categoria
