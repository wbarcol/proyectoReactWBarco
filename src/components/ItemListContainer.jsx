import React, { useEffect, useState } from 'react'
import '../App.css';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
// import customFetch from '../Utils/customFetch';
import { traerProductos } from '../Utils/productos';


export default function ItemListContainer(){

        const [productos, setProductos] = useState([]);


        const { categoryId } = useParams();

        useEffect(() => {
            traerProductos(categoryId)
                .then((res) => setProductos(res))
                .catch((error) => console.log(error));
        }, [categoryId]);
    

    return(



<div className="fondoC">
<div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">PRODUCTOS</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


{/* <div className='mainProductos'>
<div className='containerProductos'> */}
<ItemList productos={productos}/>
</div>
</div>
</div>
</div>



    );
}