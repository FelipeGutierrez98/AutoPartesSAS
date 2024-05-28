import React from 'react'
import './BannerContact.css'
import { Link } from 'react-router-dom';
const BannerContact = () => {
  return (
    <section id="contacto" class="contacto ">
          <div class="containerp">
            <div class="rectangulo ">
              <div class="cont">
                <div class="seccion-titulo">
                  <h1 className='cont'>Contactanos !</h1>
                </div>

                <button className='button'>
                  <Link to="/contacto" className=''>+ Info</Link>
                </button>


              </div>
            </div>
          </div>
        </section>
  )
}

export default BannerContact
