import React from 'react'
import Item from './Item'

function ItemDetail({productos}) {
  return (
    
        <Item
        key={productos.id}
        nombre={productos.nombre}
        precio={productos.precio}
        imagen={productos.imagen}
        cantidad={productos.cantidad}
        detalles={productos.detalles}/>
  )
}

export default ItemDetail