import React from 'react'
import '../App.css'
import shop from '../imagenes/bag.svg'


function Carrito() {
  return (
    <>
        <img className='carrito' src={shop} alt='carro' />
        <span className='item-total'>0</span>
    </>
  )
}

export default Carrito