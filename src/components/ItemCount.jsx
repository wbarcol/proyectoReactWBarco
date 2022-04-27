import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'




function ItemCount({stock, onAdd}) {
    const [ count, setCount] = useState(1);
    
    function adding() {
        if (count < stock)
        setCount(count + 1);
    }

    function subs() {
        if (count > 1)
        setCount(count - 1)
        
    }





  return (
    <div>
      <p>🛒{count}</p>
  <Button onClick={adding} className='btn btn-warning'> <i className="iconoCarrito fas fa-cart-plus"></i> </Button>{' '}

  <Button onClick={() =>{onAdd(count)}}
  
   variant="btn btn-warning">AGREGAR</Button>{' '} 

  <Button onClick={subs} className='btn btn-warning'><i className="iconoCarrito fas fa-minus-square"></i></Button>{' '}

    </div>
  )
}

export default ItemCount

