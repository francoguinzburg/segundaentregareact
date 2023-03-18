import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirProductoPorId } from '../helpers/pedirDatos'
import ItemDetail from './ItemDetail'


const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    pedirProductoPorId(Number(itemId))
    .then(response => {
      setItem(response)
    })
    .finally(() => setLoading(false))
  }, [])
  

  return (
    <div className='contenedor-lista-productos'>
      { loading 
        ? <div>
            <img className='cargando-img' src='https://i.redd.it/nipg7lqamjo91.gif' alt='Cargando'/>
            <h2 className='cargando-tres-puntos'>Cargando...</h2>
        </div>
        : <ItemDetail item={item} />
        }
    </div>
  )
}

export default ItemDetailsContainer