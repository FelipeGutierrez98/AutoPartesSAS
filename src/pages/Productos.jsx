import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductList from '../components/ProductList'
import Cart from '../components/Cart';
import logo from '../assets/Copia de GEA-Photoroom.png-Photoroom.png'
import nosotrosImg from '../../src/assets/repuesto.co-partes-circulo.png'
import imgpro from '../assets/vector-car-parts-tire-isolated-600nw-1962329059-Photoroom.png-Photoroom.png'
import './Productos.css'
import motor from '../assets/motor.jpeg'
import frenos from '../assets/frenos.jpeg'
import lubricantes from '../assets/lubricantes.jpeg'
import electricPart from '../assets/partes-electricas.webp'
import Transmision from '../assets/Transmision y embrague.webp'
import carroceria from '../assets/carroceria.webp'
import { Link } from 'react-router-dom';
import correaImg from '../assets/correa-auxiliar-accesorios-airedirec-suzuki-swift-alto-maru-D_NQ_NP_15784-MLA20107987824_062014-F.jpg'
import correaImg1 from '../assets/partesCarros.jpeg'
import correaImg2 from '../assets/repuesto.co-partes-circulo.png'
import correaImg3 from '../assets/camion.jpeg'

const Productos = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div>



            <div className="contenido-productos">
                {<div className='containerPro'>
                    <p className='parrafoPro'>PRODUCTOS</p>
                </div>}
            </div>

            <div className='position'>
                <div className="nosotros-container">
                    <img className='img2' src={imgpro} alt="" />
                    <div className='linea'></div>
                    <div className="texto-container">
                        <p>Ofrecemos una amplia gama de repuestos automotrices diseñados para satisfacer todas las necesidades de mantenimiento y reparación de vehículos. Desde filtros de aceite y frenos hasta correas de distribución y bujías, nuestra selección abarca todas las áreas críticas del automóvil. 
                        </p>

                        <p className='e'>
                        Ya sea que estés realizando un mantenimiento de rutina o reparando un problema específico, puedes confiar en nosotros para proporcionarte las piezas adecuadas para mantener tu vehículo funcionando de manera óptima. 
                        </p>
                        <div className='linea2'></div>
                        <button className='boton'>
              
            <Link to="/contacto" className='button'>+ Info</Link>
            </button>
                    </div>
                </div>
            </div>

            <div className='row productos'>
                {/* <h1 className="col-12 text-center">
                    <p>Provedores</p>
                </h1> */}
                <div className="col-12">
                    <div className="product-principal">
                        <article className="cart">
                            <Link to="/contacto" className='button'>
                            <figure className="producto">
                                <img className='logo1' src={frenos} alt='logo' />
                                {/*    <h1>FRENOS Y SUSPENSION</h1> */}
                                <figcaption className="overlay">
                                    <p className="overlay-texto text-center">
                                    <Link to="/contacto" className='button'>Frenos y Suspencion</Link>
                                    
                                        <div className='d-flex'>
                                            <ul>
                                                <li>Discos</li>
                                                <li>Pastillas</li>
                                                <li>Bloque de freno</li>
                                                <li>Liquido de freno</li>

                                                <li>Campanas</li>
                                                <li>Amortiguadores</li>
                                                <li>Bombones de suspencion</li>
                                                <li>Barra de direccion</li>
                                            </ul>
                                            
                                                
                                            

                                        </div>
                                    </p>
                                </figcaption>
                            </figure>
                            </Link>
                        </article>

                        <article className="cart">
                            <Link to="/contacto" className='button'>
                            <figure className="producto">
                                <img className='logo1' src={motor} alt='logo' />
                                <figcaption className="overlay">
                                    <p className="overlay-texto text-center"> 
                                    <Link to="/contacto" className='button'>Motor</Link>
                                  
                                        <div className='d-flex'>
                                            <ul>
                                                <li>Bloque</li>
                                                <li>Culata</li>
                                                <li>Cigueñal</li>
                                                <li>Eje de levas</li>
                                                <li>Piston</li>
                                                <li>Bujes</li>
                                                <li>Corona</li>

                                            </ul>
                                            <ul>

                                                <li>Anillos</li>
                                                <li>Valvulas</li>
                                                <li>Piñon</li>
                                                <li>Empaques</li>
                                                <li>Caja de cambios</li>
                                                <li>Cruceta</li>
                                                <li>Sincronizador</li>
                                            </ul>

                                        </div>
                                    </p>
                                </figcaption>
                            </figure>

                            </Link>
                        </article>

                        <article className="cart">
                            <Link to="/contacto" className='button'>

                            <figure className="producto">
                                <img className='logo1' src={lubricantes} alt='logo' />
                                <figcaption className="overlay">
                                    <p className="overlay-texto"> 
                                    <Link to="/contacto" className='button'>Lubricantes-Filtros</Link>
                                        <div className='d-flex'>
                                            <ul>
                                                <li>Filtros de combustible </li>
                                                <li>Filto de urea</li>
                                                <li>Filtro trampa de agua</li>
                                                <li>Filtro de cabina</li>
                                                <li>Filtros de aceite </li>
                                                <li>Filtros de aire </li>
                                                <li>Aceite para motor</li>
                                                <li>Aceite para transmision</li>
                                            </ul>

                                        </div>
                                    </p>
                                </figcaption>
                            </figure>
                            </Link>
                        </article>
                        <article className="cart">
                            <Link to="/contacto" className='button'>
                            
                            <figure className="producto">
                                <img className='logo1' src={electricPart} alt='logo' />
                                <figcaption className="overlay">
                                    <p className="overlay-texto"> <Link to="/contacto" className='button'>Partes Electricas</Link>
                                        <div className='d-flex'>
                                            <ul>
                                                <li>Sensor flujo de aire</li>
                                                <li>Sensor de temperatura</li>
                                                <li>Motor de arranque</li>
                                                <li>Alternador</li>
                                                <li>Sensor posicion cigueñal</li>
                                                <li>Sensor flujo de aire</li>
        
                                            </ul>

                                        </div>
                                    </p>
                                </figcaption>
                            </figure>
                            </Link>
                        </article>
                        <article className="cart">
                        <Link to="/contacto" className='button'>
                            <figure className="producto">
                                <img className='logo1' src={Transmision} alt='logo' />
                                <figcaption className="overlay">
                                    <p className="overlay-texto"> <Link>Transmision y Embrague</Link>
                                        <div className='d-flex'>
                                            <ul>
                                                <li>Discos de embrague</li>
                                                <li>Volantes de motor</li>
                                                <li>Bombas de embrague</li>
                                                <li>Rodamientos de embrague </li>
                                                <li>Prensas de embrague</li>
                                            </ul>

                                        </div>
                                    </p>
                                </figcaption>
                            </figure>
                        </Link>
                        </article>

                        <article className="cart">
                            <Link to="/contacto" className='button'>
                            <figure className="producto">
                                <img className='logo1' src={carroceria} alt='logo' />
                                <figcaption className="overlay">
                                    <p className="overlay-texto"> <Link to="/contacto" className='button' >Cabinas y Carrocaria</Link>
                                        <div className='d-flex'>
                                            <ul>
                                                <li>Faroles</li>
                                                <li>Dirrecionales</li>
                                                <li>Bomper</li>
                                                <li>Persiana radiador</li>
                                                <li>Panel frontal</li>
                                                <li>Espejos</li>
                                            </ul>

                                        </div>
                                    </p>
                                </figcaption>
                            </figure>
                            </Link>
                        </article>

                    </div>
                </div>
            </div>

           

            

            {/* 
      <div className="container">
        <h1>Car Parts Store</h1>
        <ProductList products={productsData} addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
 */}
        </div>
    );
};

export default Productos;


