import React from 'react';
import './Nosotros.css'
import nosotrosImg from '../../src/assets/repuesto.co-partes-circulo.png'
import cartPart from '../assets/partes-carro.png'
import logo1 from '../assets/kia.png'
import logo2 from '../assets/Chevrolet_logo.png'
import logo3 from '../assets/479674a60c207959061a59789d4ea586-Photoroom.png-Photoroom.png'
import logo4 from '../assets/ssangyong-logo.png'
import { Link } from 'react-router-dom';
const Nosotros = () => {

  return (
    <div>
      <div className="contenido-Nosotros">
        <div className='containerMar'>
          <p className='parrafoMar '>NOSOTROS</p>
        </div>
      </div>



{/* 
      <div className='position'>
        <div className="nosotros-container">

          <div className="imagen-container">
            <img className='banner' src={nosotrosImg} alt="" />
          </div>
          <div className="texto-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lectus id feugiat blandit. Nulla facilisi. Nulla facilisi. In scelerisque, ipsum at tempor ultricies, lacus felis vehicula eros, ac molestie libero magna sed quam.</p>
          </div>
        </div>
      </div> */}

      <div className='position'>
        <div className="nosotros-container">
          <img className='img2' src={nosotrosImg} alt="" />
          <div className='linea'></div>
          <div className="texto-container">
          <p>
            En GEA, nos dedicamos apasionadamente a proporcionar soluciones integrales para las necesidades de repuestos automotrices. Con un compromiso inquebrantable hacia la calidad y la excelencia en el servicio al cliente, nos enorgullece ser líderes en la industria de distribución de partes de carros. 
          </p>
           
          <p className='e'>
          Nuestro equipo altamente capacitado y experimentado se esfuerza por ofrecer una amplia gama de productos de la más alta calidad, asegurando así la satisfacción y confianza de nuestros clientes. 
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
        <h3 className='provedores'>PROVEDORES</h3>
        </div>

        <div className="logo-container">

          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />

        </div>

      </div>
      
      <div className='position e'>
        <div className="nosotros-container">
          <div className="texto-container">
            <p className='px-3'>
            En nuestro enfoque en Innovación Automotriz, nos dedicamos a superar constantemente las expectativas de nuestros clientes, ofreciendo soluciones vanguardistas y eficientes para sus necesidades de repuestos. Nuestro compromiso se refleja en cada interacción, donde priorizamos la excelencia y la fiabilidad en cada producto y servicio que ofrecemos. Respaldados por un equipo de expertos comprometidos con la excelencia técnica y el servicio al cliente, nos esforzamos por mantenernos a la vanguardia de la industria automotriz, estableciendo así nuevos estándares de calidad y satisfacción del cliente.
            </p>
            <div className='linea2'></div>
            <button className='boton'>
              
            <Link to="/contacto" className='button'>+ Info</Link>
            </button>
          </div>
          <div className='linea'></div>
          <img className='img2' src={cartPart} alt="" />
        </div>
      </div>
    </div>


  );
};

export default Nosotros;