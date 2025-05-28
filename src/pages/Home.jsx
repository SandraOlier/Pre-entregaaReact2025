import React from 'react'
import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'
import ProductList from '../componentes/ProducList'
import loading from '../assets/loading.gif'


const Home = ({ cart, productos,cargando,agregarCarrito,borrarProducto}) => {
    return (
        <>
            <Header  borrarProducto ={borrarProducto} cartItems={cart}/>
            <main>
            <h1>Bienvenidos a mi Tienda </h1>
            <p>Esta es una tienda de ejemplo para practicar React y React Router.</p>

               { cargando ? <img src={loading} alt='loading'/> :

            <ProductList agregarCarrito={agregarCarrito} productos={productos}/>}


            </main>
            <Footer />
        </>
    )
}
export default Home
