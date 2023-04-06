import React, { useContext } from 'react'
import '../App.css'
import { BsCart } from "react-icons/bs";
import { CartContext } from './CartContext';



function Carrito() {
  const { totalCantidad } = useContext(CartContext)


  return (
    <>
        <BsCart className='carrito'/>
        <span className='item-total'>{totalCantidad()}</span>
    </>
  )
}

export default Carrito