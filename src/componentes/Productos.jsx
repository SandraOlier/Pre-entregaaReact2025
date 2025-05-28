import React, { useState } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link correctamente
import "./styleProductos.css";

const Productos = ({ producto, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <section className="card">
            <div className="imagenContainer">
                <img src={producto.imagen} alt="" className="imagen" />
            </div>

            <h3 className="nombre">{producto.nombre}</h3>
            <p className="precio">${producto.precio}</p>
            <p className="stock">Stock disponible: {producto.stock}</p>

            <div className="cantidadContainer">
                <button className="qtyButton" onClick={decrease}>-</button>
                <span>{cantidad}</span> {/* Ahora muestra la cantidad seleccionada */}
                <button className="qtyButton" onClick={increase}>+</button>
            </div>

            <button onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>

            <Link to={`/productos/${producto.id}`}>Ver más</Link>
        </section>
    );
};

export default Productos;
