// App.jsx
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './pages/footer';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Marcas from './pages/Marcas';
import Productos from './pages/Productos';
import BannerInicio from './components/BannerInicio'
import logo from './assets/Copia de GEA-Photoroom.png-Photoroom.png'
import Contact from './pages/Contact';
import './App.css'
import BannerContact from './components/BannerContact';
import BannerNosotros from './components/BannerNosotros';
/* import Cart from './components/Cart';
import productsData from './data/products.json';
import ProductList from './components/ProductList' */

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='color'>

      <Router>
        {/*   <div className="principal"> */}
        {/*    <BannerInicio/> */}

        {/* <div className='img'></div> */}
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        {/*  { <div className="container">
        <h1>Car Parts Store</h1>
        <ProductList products={productsData} addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div> } */}



        <div class="separador text-center text-white">
          <h3 className='provedores' >HORARIO DE ATENCION</h3>
          <p>Lunes-Viernes 8:00 a.m a 6:p.m y Sabados 8:00 a.m a 2:00 p.m </p>
        </div>

       <BannerNosotros/>

        <BannerContact/>
        <Footer />
        {/* </div> */}
      </Router>
    </div>
  );
};

export default App;


