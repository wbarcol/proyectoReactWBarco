import React, { useEffect, useState } from 'react'
import '../App.css';
import BannerPri from "./BannerPri";
import Caracter from "./Caracter";
import ItemList from "./ItemList";
import customFetch from '../Utils/customFetch';
import productos from '../Utils/productos';


export default function ItemListContainer(props){

        const [items, setItems] = useState([]);
    
        useEffect(() => {
            customFetch(3000, productos)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));
        }, [items])

    return(
<div>

    <BannerPri
    buttonComprar = {<button type="button" id="btnComprar" className="btn btn-warning">
    <a href="#link">COMPRAR</a>
  </button>}
    />

    <Caracter
        caract1 = {{nombre:"Productos de Calidad", icono:<i className="far fa-check-circle fa-4x"></i>}}
        caract2 = {{nombre:"Delivery Regional", icono:<i className="fas fa-bicycle fa-4x"></i>}}
        caract3 = {{nombre:"Envios a nivel Nacional", icono:<i className="fas fa-truck fa-4x"></i>}}
    />

<ItemList productos={items}/>


</div>
    );
}