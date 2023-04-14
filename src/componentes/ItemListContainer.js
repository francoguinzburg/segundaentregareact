import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import '../estilos/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()   

    useEffect(() => {
    setLoading(true)
    // referencia
    const productosRef = collection(db, "productos")
    const q = categoryId
    ? query(productosRef, where("categoria", "==", categoryId))
    : productosRef

    // pedir referencia
        getDocs(q)
        .then((res) => {
            const docs = res.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })
            setProductos(docs)
        })
        .finally(() => 
        setLoading(false))

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