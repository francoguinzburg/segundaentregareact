import React from 'react'

const Item = ( {item} ) => {
  return (
    <>
        <div className='contenedor-productos'>
                <img className='imagen-producto' src={item.imagen} alt={item.titulo}/>
                <h3>{item.titulo}</h3>
                <p>Precio: <strong>${item.precio}</strong></p>
                <button className='boton-ver-mas'>Ver más</button>
            </div>
    </>
  )
}

export default Item