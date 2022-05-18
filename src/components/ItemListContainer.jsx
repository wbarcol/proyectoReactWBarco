import React, { useEffect, useState } from 'react'
import '../App.css';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Principal from './Principal';


export default function ItemListContainer(){

        const [productos, setProductos] = useState([]);


        const { categoryId } = useParams();
    
        useEffect(() => {
            const db = getFirestore();
      
            let productosRef = collection(db, 'products');
            if (categoryId) productosRef = query(productosRef, where("categoria", "==", categoryId));
            
            getDocs(productosRef).then((res) => {
                setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()})));
            });
              
        }, [categoryId]);

    return(

<div className='App'>
<Principal/>

<div className="fondoC">
<div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">PRODUCTOS</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


<ItemList productos={productos}/>
</div>
</div>
</div>
</div>
</div>



    );
}