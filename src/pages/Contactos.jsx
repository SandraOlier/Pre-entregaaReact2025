import React from 'react'
import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'

const Contactos = ({cart, borrarProducto}) => {
    return (
        <>
            <Header  borrarProducto ={borrarProducto} cartItems={cart}/>
            <h1>Contactos</h1>
            <Footer />
        </>
    )
}

export default Contactos




