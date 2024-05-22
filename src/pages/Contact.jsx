 import React, { useState } from 'react';
import './Contact.css'
    
    function Contact() {
      const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        ciudad: '',
        mensaje: '',
        marca: 'kia' // Por defecto, se establece en Kia
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Puedes enviar los datos a través de una solicitud HTTP aquí
      };
    
      return (
        <div className='pos'>

        <div className="formulario">
          <h2>COTIZAR!</h2>
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="campo">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
            </div>
            <div className="campo">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="campo">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} rows="4" required></textarea>
            </div>
            <div className="campo">
              <label htmlFor="marca">Marca de interés:</label>
              <select id="marca" name="marca" value={formData.marca} onChange={handleChange}>
                <option value="kia">Kia</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="sanyoung">Sanyoung</option>
                <option value="hyundai">Hyundai</option>
              </select>
            </div>
            <div className="campo">
              <button  type="submit">Enviar</button>
            </div>
          </form>
        </div>
        </div>
      );
    }
    
    export default Contact;
    



 