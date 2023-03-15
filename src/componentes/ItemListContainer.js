import React from 'react'
import { useState, useEffect } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from './ItemList'
import '../estilos/ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)    

    useEffect(() => {
    
    pedirDatos()
    .then((response) => {
        setProductos( response )
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })
    }, [])
    

  return (
    <div className='contenedor-lista-productos'>
        { loading 
        ? <h2>Cargando...</h2>
        : <ItemList items={productos} />
        }
    </div>
  )
}

export default ItemListContainer