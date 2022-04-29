
import React from 'react'
import Item from './Item'

function ItemList({productos}) {
  return (


    productos.map(product => (

        <Item
        key={product.id}
        product={product}
        
        />



    ))

  )
}

export default ItemList