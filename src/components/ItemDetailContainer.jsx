import React, { useEffect, useState } from 'react'
import '../App.css';
import ItemDetail from "./ItemDetail";
import customFetch from '../Utils/customFetch';
import productos from '../Utils/productos';


export default function ItemDetailContainer(){

        const [item, setItem] = useState({});
    
        useEffect(() => {
            customFetch(1000, productos)
            .then(resultado => setItem(resultado))
            .catch(error => console.log(error));
        }, [item])

    return(
<div>
<ItemDetail productos={item}/>
</div>
    );
}