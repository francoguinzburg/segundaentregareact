import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import { Link, Navigate } from 'react-router-dom'
import { db } from '../firebase/config'
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore'

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues(
            {...values,
            [e.target.name]: e.target.value}
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //validaciones
        if(values.nombre.length < 3) {
            alert('Nombre invalido')
            return
        }
        if(values.direccion.length < 3) {
            alert('Direccion invalida')
            return
        }
        if(values.email.length < 3) {
            alert('Email invalido')
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, nombre: prod.titulo, precio: prod.precio, cantidad: prod.cantidad})),
            total: totalCompra(),
            fecha: new Date()
        }

        console.log('Submit', orden)

        const productosRef = collection(db, 'productos')

        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) => {
                    if(doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock del producto que estas solicitando")
                    }
                })
        });

        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
    }

    if (orderId) {
        return (
            <div className='contenedor-orden-num'>
                <h2>Tu orden se registro con exito!</h2>
                <p>Guarda tu numero de orden: {orderId}</p>
                <Link to='/' className='volver-inicio'>Volver al inicio</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return <Navigate to='/' />
    }

  return (
    <div className='contenedor-checkout'>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} className='formulario'>
            <input
            onChange={handleInputChange}
            value={values.nombre}
            type={'text'}
            placeholder='Tu nombre'
            className='form-inputs'
            name='nombre'
            />
            <input
            onChange={handleInputChange}
            value={values.direccion}
            type={'text'}
            placeholder='Direccion'
            className='form-inputs'
            name='direccion'
            />
            <input
            onChange={handleInputChange}
            value={values.email}
            type={'email'}
            placeholder='Email'
            className='form-inputs'
            name='email'
            />
            <button type='submit' className='enviar-form'>Enviar</button>
        </form>
    </div>
  )
}

export default Checkout