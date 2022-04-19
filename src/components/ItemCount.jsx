import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

function ItemCount({stock, addCart}) {
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
        addCart(count);
    }


  return (
    <div>
  <p>🛒{count}</p>
  <Button onClick={adding} className='btn btn-warning'> <i className="iconoCarrito fas fa-cart-plus"></i> </Button>{' '}
  <Button onClick={onAdd} variant="btn btn-warning">COMPRAR</Button>{' '}
  <Button onClick={subs} className='btn btn-warning'><i className="iconoCarrito fas fa-minus-square"></i></Button>{' '}


    </div>
  )
}

export default ItemCount