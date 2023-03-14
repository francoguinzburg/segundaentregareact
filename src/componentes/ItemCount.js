import React from 'react'
import { useState, useEffect } from 'react'
import '../estilos/contador.css'

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));

    const aumentar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        setCount(count - 1);
    }

    useEffect(() => {
    setCount(parseInt(initial));
    }, [initial]);
    
  return (
    <div className='contador-items'>
        <span className='numero-contador'>{count}</span>
        <div>
            <button className='boton-sumar' disabled={count >= stock} onClick={aumentar}>+</button>
            <button className='boton-restar' disabled={count <= 0} onClick={restar}>-</button>
        </div>
        <div>
            <button className='agregar-carrito' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount