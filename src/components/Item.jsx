import React from 'react'
import { Link } from 'react-router-dom';

// import ItemCount from './ItemCount'
// import Card  from 'react-bootstrap/Card'

function Item({product}) {
  return (

    <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imagen}
                  alt=""
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <Link to={`/item/${product.id}`}>

                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.nombre}

                  </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.cantidad +  ' Disponibles'}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">U$D {product.precio}</p>
              </div>
            </div>

    
  )
}

export default Item