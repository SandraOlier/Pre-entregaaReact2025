import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import GaleriaDeProductos from './pages/GaleriaDeProductos';
import Contactos from './pages/Contactos';
import NotFound from './pages/NotFound';
import DetallesProductos from './componentes/DetallesProductos';
import Admin from './componentes/Admin';
import Login from './pages/Login';
import RutasProtegidas from "./auth/RutasProtegidas";


function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('/data/data.json')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
          setError(false);
        }, 2000);
      })
      .catch(error => {
        console.error("Error al cargar datos:", error);
        setError(true);
        setCargando(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, cantidad: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return null;
          }
        }
        return item;
      }).filter(item => item !== null);
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home borrarProducto={handleRemoveFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />
        <Route path="/acercade" element={<AcercaDe borrarProducto={handleRemoveFromCart} cart={cart} />} />
        <Route path="/productos" element={<GaleriaDeProductos borrarProducto={handleRemoveFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />
        <Route path="/productos/:id" element={<DetallesProductos productos={productos} />} />
        <Route path="/admin"element= {<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contactos borrarProducto={handleRemoveFromCart} cart={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
