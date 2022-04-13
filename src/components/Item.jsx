import React from 'react'
import ItemCount from './ItemCount'
// import Card  from 'react-bootstrap/Card'

function Item({id, nombre, precio, imagen, cantidad, detalles}) {
  return (

<div className='mainProductos' key={id}>
<div className='containerProductos'>
  <div className='producto'>
    <img src={imagen} alt=""/>
    <div className='descripcionProducto'>
    <h3 className='productoTitulo'>{nombre}</h3>
    <h6 className='cantidadProducto'>{cantidad} disponibles</h6>
    <p className='productoDetalles'>{detalles}</p>
    <span className='productoPrecio'>{precio}</span>
    </div>
    <div>
  <ItemCount stock={cantidad}/>
    </div>
    </div>

  </div>

</div>

/* <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
            <ItemCount stock={5}/>
        </Card.Body>
        </Card> */
  )
}

export default Item