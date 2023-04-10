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
            <button className={cantidad === item.stock ? 'ya-esta-2' : 'boton-sumar'} onClick={handleSumar} disabled={cantidad === item.stock}>+</button>
            <span className='numero-contador'>{cantidad}</span>
            <button className={cantidad === 1 ? 'ya-esta' : 'boton-restar'} onClick={handleRestar} disabled={cantidad === 1}>-</button>
        </div>
        <div>
            <button className='agregar-carrito' onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount