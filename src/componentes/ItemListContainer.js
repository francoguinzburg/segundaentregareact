import React from 'react'
import { useState, useEffect } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from './ItemList'
import '../estilos/ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()   

    useEffect(() => {
    setLoading(true)
    pedirDatos()
    .then((response) => {
        if (!categoryId) {
            setProductos(response)
        } else {
            setProductos(response.filter((prod) => prod.categoria === categoryId))
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })
    }, [categoryId])
    

  return (
    <div className='contenedor-lista-productos'>
        { loading 
        ? <div>
            <img className='cargando-img' src='https://i.redd.it/nipg7lqamjo91.gif' alt='Cargando'/>
            <h2 className='cargando-tres-puntos'>Cargando...</h2>
        </div>
        : <ItemList items={productos} />
        }
    </div>
  )
}

export default ItemListContainer