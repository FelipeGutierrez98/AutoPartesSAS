// Footer.jsx

// Footer.jsx
import React from 'react';
import './footer.css'; // Importa los estilos del footer

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>GEA</h3>
            <p>Tu tienda de confianza para repuestos de automóviles.</p>
            <div className='red-social '>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          <div className="footer-links">
            <h3>Enlaces útiles</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/acerca-de">Acerca de nosotros</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contacto</h3>
            <p><strong>Dirección:</strong> Cr68 #112-26</p>
            <p><strong>Teléfono:</strong> 3203457623</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Car Parts Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

