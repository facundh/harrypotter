import React, {useEffect, useState} from 'react'
import axios from 'axios'
import axiosClient from '../../axios';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import Navbar from '../Navbar/Navbar';

const ItemListCointainer = () => {

    const [state, setState] = useState([]);

    const getData = async() => {
        try {
            const response = await axiosClient.get('/characters');
            setState(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
    
      <ItemList data={state}/>
        </>
    )
}

export default ItemListCointainer
