import React, { useContext, useState} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContex'
import {addDoc, collection, getFirestore, serverTimestamp, doc, getDoc } from "firebase/firestore";
import Formulario from './Formulario';
import Venta from './Venta';



export default function Validacion(){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");

    const [orderID, setOrderID] = useState("");

  const { cart, total, buyAll } = useContext(CartContext);

  const order = {
    buyer: { name, lastname, phone, email},
    items: cart.map((prod) => ({
        id: prod.id,
        producto: prod.nombre,
        precio: prod.precio,
        cantidad: prod.cantidad,
    })),
    total: total(),
    date: serverTimestamp()

}

const sendOrder = () => {
    const db = getFirestore();
    const ventasRef = collection(db, "ventas");

    addDoc(ventasRef, order).then(({ id }) => {
        setOrderID(id);
        buyAll();
    })
}

    return(

<div>

{!orderID ?
            <Formulario
                name={name}
                lastname={lastname}
                email={email}
                phone={phone}
                setName={setName}
                setLastname={setLastname}
                setPhone={setPhone}
                setEmail={setEmail}
                sendOrder={sendOrder}
            /> :
            <Venta 
            orderID={orderID}
            name={name}
            lastname={lastname}
            email={email}/>
        } 


</div>

    );
}