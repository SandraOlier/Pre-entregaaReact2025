import React from 'react'
import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'

const AcercaDe = ({cart, borrarProducto}) => {
    return (
        <>
            <Header borrarProducto = {borrarProducto} cartItems={cart}/>
            <h1>Acerca De</h1>

            <Footer />
        </>
    )
}
export default AcercaDe



