import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

function ItemCount({stock}) {
    const [ count, setCount] = useState(0);
    
    function adding() {
        if (count < stock)
        setCount(count + 1);
    }

    function subs() {
        if (count > 0)
        setCount(count - 1)
        
    }

    function onAdd() {
        alert('Agregaste' + count + 'productos a tu carro')
    }


  return (
    <div>
  <p>{count}</p>
  <Button onClick={adding} variant="success"> <i className="iconoCarrito fas fa-cart-plus"></i> </Button>{' '}
  <Button onClick={onAdd} variant="dark">COMPRAR</Button>{' '}
  <Button onClick={subs} variant="success"><i className="iconoCarrito fas fa-minus-square"></i></Button>{' '}


    </div>
  )
}

export default ItemCount