import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='contenedor-si-no-hay'>
                <h2 className='no-hay-productos'>No tienes ningun producto en el carrito</h2>
                <Link to='/' className='volver-inicio'>Ir a comprar</Link>
            </div>
        )
    }

  return (
    <div>
        {
            <div className='contenedor-de-toda-compra'>
                <h2 className='tu-compra'>Tu Compra:</h2>
                {
                    cart.map((prod) =>(
                        <div className='contenedor-compra' key={prod.id}>
                            <h4>{prod.titulo}</h4>
                            <img className='img-compra' src={prod.imagen} alt={prod.titulo} />
                            <h4>Precio unitario: ${prod.precio}</h4>
                            <h4>Cantidad: <span>{prod.cantidad}</span></h4>
                            <hr/>
                            <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                            <button onClick={ () => eliminarDelCarrito(prod.id) } className='eliminar-item'><BsFillTrashFill className='tachito'/></button>
                        </div>
                    ))
                }
            <h3 className='total-compra'>Total Compra: ${totalCompra()}</h3>
            <button onClick={vaciarCarrito} className='vaciar-carrito'>Vaciar Carrito <div className='contenedor-basura'><BsFillTrashFill className='basura'/></div></button>
            <Link className='terminar-compra' to='/checkout'>Comprar</Link>
            </div>
        }
    </div>
  )
}

export default Cart