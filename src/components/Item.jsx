import React from 'react'
import ItemCount from './ItemCount'
import Card  from 'react-bootstrap/Card'

function Item({id, nombre, precio, imagen}) {
  return (
<Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
            <ItemCount stock={5}/>
        </Card.Body>
        </Card>
  )
}

export default Item