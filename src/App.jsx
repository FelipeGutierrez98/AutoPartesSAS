// App.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

        <section id="sobre-mi" className="sobre-mi ">
          <div class="contenedor">
            <i class="fa-solid fa-check-to-slot "></i>
            <h2 class="seccion-titulo">Distribuidores autorizados</h2>
            <p class="seccion-texto">Nos comprometemos a proporcionar productos de la más alta calidad y confiabilidad, respaldados por la reputación y el prestigio de nuestros socios fabricantes. Trabajamos diligentemente para garantizar que cada pieza que ofrecemos cumpla con rigurosos estándares de rendimiento, brindando a nuestros clientes la tranquilidad de contar con repuestos que mantendrán sus vehículos en funcionamiento óptimo.</p>
          </div>
          <div class="contenedor">
            <i class="fa-solid fa-ship "></i>
            <h2 class="seccion-titulo">Importacion directos</h2>
            <p class="seccion-texto">Nuestra destacada posición como importadores directos de las mejores marcas en nuestro catálogo nos permite ofrecer productos de calidad superior a precios altamente competitivos. Esta ventaja nos coloca en una posición única para garantizar la satisfacción total de nuestros clientes, brindándoles acceso a productos de primera calidad a precios accesibles. Trabajamos arduamente para mantener esta reputación y continuaremos ofreciendo productos de excelencia a precios que reflejen verdadero valor para nuestros clientes.</p>
          </div>
          <div class="contenedor">
            <i class="fa-solid fa-truck-fast"></i>
            <h2 class="seccion-titulo">Atencion especializada carga pesada</h2>
            <p class="seccion-texto">Nuestro enfoque especializado se centra en brindar atención personalizada a los camiones de carga, ofreciendo soluciones adaptadas para mantener operaciones eficientes y garantizar un mantenimiento confiable de los vehículos. Nos comprometemos a entender las necesidades únicas de nuestros clientes en el sector de carga y logística, y a ofrecer servicios y productos que respalden su operatividad y rentabilidad.</p>
          </div>
        </section>

        <section id="contacto" class="contacto s">
          <div class="containerp">
            <div class="rectangulo ">
              <div class="cont">
                <div class="seccion-titulo">
                  <h1>Contactanos !</h1>
                </div>

                <button className='button'>
                  <Link to="/contacto" className=''>+ Info</Link>
                </button>


              </div>
            </div>
          </div>
        </section>
        <Footer />
        {/* </div> */}
      </Router>
    </div>
  );
};

export default App;


