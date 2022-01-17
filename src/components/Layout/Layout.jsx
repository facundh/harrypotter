import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalConsumer} from '../../context/GlobalContext';
import Navbar from '../Navbar/Navbar';
const Layout = ({rutas, children}) => {

    const {characters} = GlobalConsumer()
    return (
        <div>

            <Navbar characters={characters} />
            {rutas && <Outlet />}
            {!rutas && children}
            
        </div>
    )
}

export default Layout
