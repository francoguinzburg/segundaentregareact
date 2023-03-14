import React from 'react';
import Neco from '../imagenes/dibu.png'
import Carrito from './Carrito';


function NavBar() {
  return (
    <header>
        <nav>
            <div className='contenedor-logo'>
                <img src={Neco} className='logo' href='/' alt='Neco-Arc'/>
            </div>
            <div>
              <ul>
                <button className='boton-categoria'>Hombres</button>
                <button className='boton-categoria'>Mujeres</button>
                <button className='boton-categoria'>Niños</button>
                <button className='boton-categoria'>Ofertas</button>
                <button className='boton-carrito'><Carrito /></button>
              </ul>
            </div>
        </nav>
    </header>
  );
}

export default NavBar;