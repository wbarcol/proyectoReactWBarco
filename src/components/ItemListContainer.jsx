import React, { useEffect, useState } from 'react'
import '../App.css';
import ItemList from "./ItemList";
import customFetch from '../Utils/customFetch';
import productos from '../Utils/productos';


export default function ItemListContainer(){

        const [items, setItems] = useState([]);
    
        useEffect(() => {
            customFetch(3000, productos)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));
        }, [items])

    return(
<div>
<ItemList productos={items}/>
</div>
    );
}