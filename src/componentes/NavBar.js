import React, { useContext } from 'react';
import Neco from '../imagenes/dibu.png'
import Carrito from './Carrito';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';


function NavBar() {
  const { cart } = useContext(CartContext)
  return (
    <header>
        <nav>
            <div className='contenedor-logo'>
              <Link to='/'>
                <img src={Neco} className='logo' href='/' alt='Neco-Arc'/>
              </Link>
            </div>
            <div>
              <ul>
                <Link to='/'><button className='boton-categoria'>Inicio</button></Link>
                <Link to='/productos/hombre'><button className='boton-categoria'>Hombres</button></Link>
                <Link to='/productos/mujer'><button className='boton-categoria'>Mujeres</button></Link>
                <Link><button className={`boton-carrito ${cart.length > 0 ? 'carro-activo' : ''}`}>{cart.length > 0 && <Carrito />}</button></Link>
              </ul>
            </div>
        </nav>
    </header>
  );
}

export default NavBar;