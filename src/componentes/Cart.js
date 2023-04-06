import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext)

  return (
    <div className='contenedor-de-toda-compra'>
        <h2 className='tu-compra'>Tu Compra:</h2>
        {
            cart.map((prod) =>(
                <div className='contenedor-compra' key={prod.id}>
                    <h4>{prod.titulo}</h4>
                    <img className='img-compra' src={prod.imagen} alt={prod.titulo} />
                    <h4>{prod.precio * prod.cantidad}</h4>
                    <h4>Cantidad: <span>{prod.cantidad}</span></h4>
                </div>
            ))
        }
    </div>
  )
}

export default Cart