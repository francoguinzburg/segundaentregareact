import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {item} ) => {
  return (
    <>
        <div className='contenedor-productos'>
                <div className='contenedor-img-producto'><img className='imagen-producto' src={item.imagen} alt={item.titulo}/></div>
                <h3>{item.titulo}</h3>
                <p>Precio: <strong>${item.precio}</strong></p>
                <Link to={`/detalle/${item.id}`}><button className='boton-ver-mas'>Ver más</button></Link>
            </div>
    </>
  )
}

export default Item