
import React from 'react'
import Item from './Item'

function ItemList({productos}) {
  return (
    productos.map(p => (
        <Item
        key={p.id}
        nombre={p.nombre}
        precio={p.precio}
        imagen={p.imagen}
        cantidad={p.cantidad}
        detalles={p.detalles}/>
    ))
  )
}

export default ItemList