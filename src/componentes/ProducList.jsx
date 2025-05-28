const ProductList = ({ productos, borrarProducto }) => {
    return (
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>
                    {producto.nombre} - ${producto.precio}
                    <button onClick={() => borrarProducto(producto.id)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </li>
            ))}
        </ul>
    );
};
export default ProductList;