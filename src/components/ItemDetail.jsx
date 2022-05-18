import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContex'


function ItemDetail(producto) {

  const { addToCart} = useContext(CartContext);
 
  const [goCart, setGoCart] = useState(0);

const onAdd = (count) =>{
  setGoCart(count)
  addToCart({...producto, count}); 
}



  return (

    <div className='App'>
    <div className='containerDetail'>
    <img src={producto.imagen} alt={producto.nombre} />
    <div className='containerDetailInfo'>
        <h2>{producto.cantidad + ' Disponibles'}</h2>
        <h2 className='description'>
            {producto.nombre}
        </h2>
        <p>
          {producto.detalles}
        </p>
        <div className='containerDetailInfoPrice'>
            <h3>U$D {producto.precio}</h3>
        </div>

        {
        (goCart === 0) ? <ItemCount stock={producto.cantidad} onAdd={onAdd} /> : <Link to={'/cart'}> <Button onClick={() =>{setGoCart(0)}} className='btn btn-warning'>IR AL CARRITO</Button> </Link> 
        }

    </div>
</div>
</div>

  )
}

export default ItemDetail;