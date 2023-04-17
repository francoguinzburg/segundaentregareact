import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import '../estilos/ItemListContainer.css'
import ItemCount from './ItemCount'
// import ColorPicker from './ColorPicker'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ( {item} ) => {
  const [cantidad, setCantidad] = useState(1);
  // const [color, setColor] = useState(null);
  const { agregarAlCarrito, isInCart } = useContext(CartContext)

  const navigate = useNavigate()

  const handleVolver = () => {
    navigate('/')
  }

  const handleAgregar = () => {
    const newItem = {
    ...item,
    cantidad
    }
    agregarAlCarrito(newItem)
  }

  return (
    <div className='contenedor-productos-detalle'>
      <h3>{item.titulo}</h3>
      <img className='imagen-del-producto' src={item.imagen} alt={item.titulo} />
      <p>Precio: <strong>${item.precio}</strong></p>
      <p>{item.descripcion}</p>
      {/* <ColorPicker setColor={setColor} options={item.colores} /> */}
      { item.stock <= 5 &&
        <p><strong>
          {
            item.stock === 1
            ? `Queda solo 1 unidad!`
            : `Quedan solo ${item.stock} unidades!`
          }
        </strong></p> }

      {
        isInCart(item.id)
        ? <Link to='/cart' className='boton-terminar-compra'>Terminar compra</Link>
        : <ItemCount item={item} cantidad={cantidad} setCantidad={setCantidad} handleAgregar={handleAgregar} />
      }
      <button onClick={handleVolver} className='boton-volver'>Volver</button>
    </div>
  )
}

export default ItemDetail