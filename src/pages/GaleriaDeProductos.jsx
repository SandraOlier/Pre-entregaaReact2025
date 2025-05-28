import React from "react";
import Header from "../componentes/estaticos/Header"
import Footer from "../componentes/estaticos/Footer"
import ProductList from "../componentes/ProducList"
import loading from "../assets/loading.gif";

const GaleriaDeProductos = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />
            <h1>Galería de productos</h1>
            {cargando ? (
                <img src={loading} alt="loading" />
            ) : (
                <ProductList  agregarCarrito={agregarCarrito} productos={productos} borrarProducto={borrarProducto}/>
            )}
            <Footer />
        </>
    );
};

export default GaleriaDeProductos;
