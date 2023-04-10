import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const agregarAlCarrito = (item) => {
    setCart( [...cart, item] )
    }   

    const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
    }   

    const totalCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }
    
    const vaciarCarrito = () => {
    setCart([])
    }

    const eliminarDelCarrito = (id) => {
    setCart(cart.filter((prod) => prod.id !== id ))
    }

    return (
        <CartContext.Provider value={{cart, agregarAlCarrito, isInCart, totalCantidad, totalCompra, vaciarCarrito, eliminarDelCarrito}}>
            {children}
        </CartContext.Provider>
    )
}