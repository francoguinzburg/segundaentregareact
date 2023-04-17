import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import { Link, Navigate } from 'react-router-dom'
import { db } from '../firebase/config'
import { collection, addDoc, doc, getDoc, updateDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                    .required('Este campo es obligatorio')
                    .min(4, 'El nombre debe tener un minimo de 4 caracteres')
                    .max(30, 'Maximo 30 caracteres'),
    direccion: Yup.string()
                    .required('Este campo es obligatorio')
                    .min(5, 'La direccion debe tener un minimo de 4 caracteres')
                    .max(30, 'Maximo 30 caracteres'),
    email: Yup.string()
                    .email('El email es invalido')
                    .required('Este campo es obligatorio')
})

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    
    const [orderId, setOrderId] = useState(null)


    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, nombre: prod.titulo, precio: prod.precio, cantidad: prod.cantidad})),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')

        const outOfStock = []

        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ))

        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)

            if(doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
        } else {
            alert('Hay items sin stock')
        }

        // cart.forEach((item) => {
        //     const docRef = doc(productosRef, item.id)

        //     getDoc(docRef)
        //         .then((doc) => {
        //             if(doc.data().stock >= item.cantidad) {
        //                 updateDoc(docRef, {
        //                     stock: doc.data().stock - item.cantidad
        //                 })
        //             } else {
        //                 alert("No hay stock del producto que estas solicitando")
        //             }
        //         })
        // });
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
        <Formik 
        validationSchema={schema}
        initialValues={{
            nombre: '',
            email: '',
            direccion: ''
        }}
        onSubmit={generarOrden}
        >
            {({values, handleSubmit, handleChange, isSubmitting, errors}) => (
                <form onSubmit={handleSubmit} className='formulario'>
                    <input
                    onChange={handleChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder='Tu nombre'
                    className='form-inputs'
                    name='nombre'
                    />
                    {errors.nombre && <small className='alerta'>{errors.nombre}</small>}
                    <input
                    onChange={handleChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder='Direccion'
                    className='form-inputs'
                    name='direccion'
                    />
                    {errors.direccion && <small className='alerta'>{errors.nombre}</small>}
                    <input
                    onChange={handleChange}
                    value={values.email}
                    type={'email'}
                    placeholder='Email'
                    className='form-inputs'
                    name='email'
                    />
                    {errors.email && <small className='alerta'>{errors.nombre}</small>}
                    <button type='submit' className='enviar-form' disabled={isSubmitting}>Enviar</button>
            </form>
            )}
        </Formik>
    </div>
  )
}

export default Checkout