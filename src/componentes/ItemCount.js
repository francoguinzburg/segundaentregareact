import React from 'react'
import '../estilos/contador.css'

const ItemCount = ( {item, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

  return (
    <div className='contador-items'>
        <div>
            <button className='boton-sumar' onClick={handleSumar}>+</button>
            <span className='numero-contador'>{cantidad}</span>
            <button className='boton-restar' onClick={handleRestar}>-</button>
        </div>
        <div>
            <button className='agregar-carrito' onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount