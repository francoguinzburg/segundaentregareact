import React from 'react'
import '../estilos/ItemListContainer.css'

const ItemDetail = ( {item} ) => {
  return (
    <div className='contenedor-productos-detalle'>
      <h3>{item.titulo}</h3>
      <img src={item.imagen} alt={item.titulo} />
      <p>Precio: <strong>${item.precio}</strong></p>
      <p>{item.descripcion}</p>
    </div>
  )
}

export default ItemDetail