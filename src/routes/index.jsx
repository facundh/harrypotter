import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Favoritos from '../views/Favoritos'
import Home from '../views/Home'

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favoritos' element={<Favoritos />} />
            </Routes>
        </Router>
    )
}

export default Rutas
