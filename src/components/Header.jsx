// Header.jsx
// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Copia de GEA-Photoroom.png-Photoroom.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
  {
    name: 'contacto',
    href: '/contacto'
  },
  
]
export default function Navbar1() {

  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary ">
 <Container > 
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <img className='logo' src={logo} alt='logo' /> 
  <Navbar.Toggle  aria-controls="basic-navbar-nav " className='basic-navbar-nav1' />
  <Navbar.Collapse id="basic-navbar-nav" className='po'>
    <Nav className="me-auto ">
    {links.map(menu => (
        <Link to={menu.href} className='linkUnidad'>{menu.name.toUpperCase()}</Link>
      ))}
    </Nav>
  </Navbar.Collapse>
 </Container> 
</Navbar>
</div>
    /* <div>

    <div className='img'>
    </div> 
<div className='navBar'>
  <img className='logo' src={logo} alt='logo' /> 
  <div className='links'>
    {links.map(menu => (
      <Link to={menu.href} className='linkUnidad'>{menu.name.toUpperCase()}</Link>
    ))}
  </div>
  <Link to="/contacto" className='button cotiza'>Cotiza ya!</Link>
</div>
    </div> */
     
  )
} 