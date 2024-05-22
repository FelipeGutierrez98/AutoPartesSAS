// Inicio.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/camion.jpeg'
import BannerInicio from '../components/BannerInicio'
import logo from '../assets/Copia de GEA-Photoroom.png-Photoroom.png'
import './Inicio.css'
import nosotrosImg from '../../src/assets/repuesto.co-partes-circulo.png'
import logo1 from '../assets/kia.png'
import logo2 from '../assets/Chevrolet_logo.png'
import logo3 from '../assets/479674a60c207959061a59789d4ea586-Photoroom.png-Photoroom.png'
import logo4 from '../assets/ssangyong-logo.png'


import motor from '../assets/motor.jpeg'
import frenos from '../assets/frenos.jpeg'
import lubricantes from '../assets/lubricantes.jpeg'
import electricPart from '../assets/partes-electricas.webp'
import Transmision from '../assets/Transmision y embrague.webp'
import carroceria from '../assets/carroceria.webp'

const Inicio = () => {
  return (
    <div>
      <div className="contenido-header">
        <div className='containerP'>
          <img className='logop' src={logo} alt='logo' />
          <p className='parrafo'>Importación, distribución y comercialización de autopartes y lubricantes
            para vans, buses y camiones.</p>
        </div>
      </div>
      {/*    <BannerInicio/> */}
      <div className='partner'>
        <div className="partner-heading">
          <h3 className='provedores'>MARCAS</h3>
        </div>

        <div className="logo-container">

          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />

        </div>

      </div>

      <div className='position'>
        <div className="nosotros-container">
          <img className='img2' src={nosotrosImg} alt="" />
          <div className='linea'></div>
          <div className="texto-container">
          <p>
            En GEA, nos dedicamos apasionadamente a proporcionar soluciones integrales para las necesidades de repuestos automotrices. Con un compromiso inquebrantable hacia la calidad y la excelencia en el servicio al cliente, nos enorgullece ser líderes en la industria de distribución de partes de carros. 
          </p>
           
          <p>
          Nuestro equipo altamente capacitado y experimentado se esfuerza por ofrecer una amplia gama de productos de la más alta calidad, asegurando así la satisfacción y confianza de nuestros clientes. 
          </p>
         

          
            <div className='linea2'></div>
            <button className='boton'>
              
            <Link to="/contacto" className='button'>+ Info</Link>
            </button>
          </div>
        </div>
      </div>


      <div className='row productos'>
                 <h1 className="col-12 text-center">
                    <p className='provedores'> Productos</p>
                </h1> 
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


            <div className='position'>
        <div className="nosotros-container">
          <div className="texto-container">
          <p>En nuestro catálogo, ofrecemos una cuidadosa selección de marcas de la más alta calidad, respaldadas por fabricantes de renombre en Estados Unidos, Corea y otras regiones destacadas a nivel mundial.</p>
            <p>
              Trabajamos en estrecha colaboración con nuestros proveedores para garantizar que cada artículo en nuestro inventario represente lo mejor en innovación, calidad y fiabilidad. Ya sea que estés buscando piezas de repuesto o lubricantes, puedes confiar en que nuestro catálogo cuenta con las marcas líderes en la industria que satisfarán tus necesidades automotrices con excelencia y garantía.
            </p>
            <div className='linea2'></div>
            <button className='boton'>
              
              <Link to="/contacto" className='button'>+ Info</Link>
              </button>
          </div>
          <div className='linea'></div>
          <img className='img2' src={nosotrosImg} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Inicio;
