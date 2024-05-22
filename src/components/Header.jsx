// Header.jsx
// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Copia de GEA-Photoroom.png-Photoroom.png'


const links = [
  {
    name: 'inicio',
    href: '/inicio'
  },
  {
    name: 'nosotros',
    href: '/nosotros'
  },
  {
    name: 'marcas',
    href: '/marcas'
  },
  {
    name: 'productos',
    href: '/productos'
  },
  
]

export default function Navbar() {
  return (

/*     <div className='img'>
          </div> */
      <div className='navBar'>
        <img className='logo' src={logo} alt='logo' /> {/* Utiliza la variable logo para la imagen */}
        <div className='links'>
          {links.map(menu => (
            <Link to={menu.href} className='linkUnidad'>{menu.name.toUpperCase()}</Link>
          ))}
        </div>
        <Link to="/contacto" className='button cotiza'>Cotiza ya!</Link>
      </div>
  )
} 