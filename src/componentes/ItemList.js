import React from 'react'
import Item from '../componentes/Item'

const ItemList = ( {items} ) => {
  return (
    <>
        { items.map((producto) => <Item item={producto} key={producto.id} />)  }
    </>
  )
}

export default ItemList