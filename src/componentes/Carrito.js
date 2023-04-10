import React, { useContext } from 'react'
import '../App.css'
import { BsCart } from "react-icons/bs";
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';



function Carrito() {
  const { totalCantidad } = useContext(CartContext)


  return (
    <Link to='/cart'>
        <BsCart className='carrito'/>
        <span className='item-total'>{totalCantidad()}</span>
    </Link>
  )
}

export default Carrito