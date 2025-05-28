import React from 'react'
import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <>
            <Header />
            <h1>404</h1>
            <button><Link to='/'>Volver al inicio </Link></button>
            <Footer />

        </>
    )
}
export default NotFound 
