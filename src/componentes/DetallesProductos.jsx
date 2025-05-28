import React from "react"
import { useParams } from "react-router-dom";

const DetallesProductos = ({productos}) => {
    const { id } = useParams();

    const producto = productos.find((producto) => producto.id == id);

    return(
        <div>

           <h1>Detalle del Producto : {id}</h1> 
           {producto ? (<h2>{producto.nombre}</h2>) : (<h2>Producto no encontrado</h2>)}
        </div>
    )
}
export default DetallesProductos;