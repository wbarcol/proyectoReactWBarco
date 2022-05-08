import React, { useEffect, useState } from 'react'
import '../App.css';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


export default function ItemDetailContainer(){

    const [producto, setProducto] = useState({});

    const {id} = useParams();

    useEffect(() => {

        const db = getFirestore();
        const prodRef = doc(db, "products", id);
        getDoc(prodRef).then((res) => {
            setProducto({id: res.id, ...res.data()});
        });
  
    }, [])
  

    
    // useEffect(() => {
    //     traerProducto(id)
    //         .then((res) => {
    //             setProducto(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [id]);

    return(



<div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">DETALLES DEL PRODUCTO</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">


<ItemDetail {...producto}/>
</div>
</div>
</div>

    );
}

