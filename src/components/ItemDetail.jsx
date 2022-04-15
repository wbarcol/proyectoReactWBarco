import React from 'react'
import ItemCount from './ItemCount'

// import Item from './Item'

function ItemDetail({nombre, precio, imagen, cantidad, detalles}) {
  return (

    <div className='containerDetail'>
    <img src={imagen} alt={nombre} />
    <div className='containerDetailInfo'>
        <h2>{cantidad + ' Disponibles'}</h2>
        <h2 className='description'>
            {nombre}
        </h2>
        <p>
          {detalles}
        </p>
        <div className='containerDetailInfoPrice'>
            <h3>{precio}</h3>
        </div>

        <ItemCount stock={cantidad}/>
    </div>
</div>

  //   <div className='producto'>
  //   <img src={imagen} alt=""/>
  //   <div className='descripcionProducto'>
  //   <h3 className='productoTitulo'>{nombre}</h3>
  //   <h6 className='cantidadProducto'>{cantidad}</h6>
  //   <p className='productoDetalles'>{detalles}</p>
  //   <span className='productoPrecio'>{precio}</span>
  //   </div>
  //   <div>
  // <ItemCount stock={cantidad}/>
  //   </div>
  //   </div>

  )
}

export default ItemDetail;