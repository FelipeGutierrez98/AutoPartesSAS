import React from 'react';
import './Marcas.css'

import banner from '../../src/assets/camion.jpeg'
import nosotrosImg from '../../src/assets/repuesto.co-partes-circulo.png'
import motorPartes from '../assets/life-of-car-spare-part-Photoroom.png-Photoroom.png'
import frenis from '../assets/repuestos.png'
import logo1 from '../assets/kia.png'
import logo2 from '../assets/Chevrolet_logo.png'
import logo3 from '../assets/479674a60c207959061a59789d4ea586-Photoroom.png-Photoroom.png'
import logo4 from '../assets/ssangyong-logo.png'
import { Link } from 'react-router-dom';

const Marcas = () => {
  return (

    <div>

      <div className="contenido-Marcas">
        <div className='containerMar'>
          <p className='parrafoMar'>MARCAS</p>
        </div>
      </div>

      <div className='position'>
        <div className="nosotros-container">
          <img className='img2' src={frenis} alt="" />
          <div className='linea'></div>
          <div className="texto-container">
            <p>En nuestro catálogo, ofrecemos una cuidadosa selección de marcas de la más alta calidad, respaldadas por fabricantes de renombre en Estados Unidos, Corea y otras regiones destacadas a nivel mundial.</p>
            <p className='e '>
              Trabajamos en estrecha colaboración con nuestros proveedores para garantizar que cada artículo en nuestro inventario represente lo mejor en innovación, calidad y fiabilidad. Ya sea que estés buscando piezas de repuesto o lubricantes, puedes confiar en que nuestro catálogo cuenta con las marcas líderes en la industria que satisfarán tus necesidades automotrices con excelencia y garantía.
            </p>
            <div className='linea2'></div>
            <button className='boton'>

              <Link to="/contacto" className='button'>+ Info</Link>
            </button>
          </div>
        </div>
      </div>

      <div className='partner'>
        <div className="partner-heading">
          <h3 className='provedores'>MARCAS</h3>
        </div>

        <div className="logo-container">

          <img src={logo1} alt="" />
          <img src={logo3} alt="" />
          <img src={logo2} alt="" />
          <img src={logo4} alt="" />

        </div>

      </div>

      <div className='position e'>
        <div className="nosotros-container">
          <div className="texto-container">
            <p className='px-2'>Nuestro compromiso con estas marcas prestigiosas refleja nuestra dedicación a proporcionar a nuestros clientes una selección excepcional de productos confiables y de primera calidad. Desde piezas de motor hasta componentes de suspensión y sistemas eléctricos, cada artículo en nuestro inventario representa lo mejor en innovación y excelencia en la industria automotriz.</p>
            <div className='linea2'></div>
            <button className='boton'>
              
              <Link to="/contacto" className='button'>+ Info</Link>
              </button>
          </div>
          <div className='linea'></div>
          <img className='img2' src={motorPartes} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Marcas;
