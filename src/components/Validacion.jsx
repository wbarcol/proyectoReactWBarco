import React, { useContext, useState} from 'react'
import '../App.css';
import { CartContext } from '../contex/CartContex'
import {addDoc, collection, getFirestore, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore";
import Formula from './Formula';
import Venta from './Venta';



export default function Validacion(){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    const [orderID, setOrderID] = useState("");

  const { cart, total, buyAll } = useContext(CartContext);

  const order = {
    buyer: {name, phone, email},
    items: cart.map((prod) => ({
        id: prod.id,
        producto: prod.nombre,
        precio: prod.precio,
        cantidad: prod.count,
    })),
    total: total(),
    date: serverTimestamp()

}

const sendOrder = () => {
    const db = getFirestore();

        // Actualiza stock
        cart.forEach((prod) => {
            const prodRef = doc(db, "products", prod.id);

            getDoc(prodRef).then((res) => {
                updateDoc(prodRef, {
                    "cantidad": res.data().cantidad - prod.count
                })
            })
        })

    const ventasRef = collection(db, "ventas");
    addDoc(ventasRef, order).then(({ id }) => {
        setOrderID(id);
        buyAll();
    })
}

    return(

<div>

{!orderID ?
            <Formula
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
                sendOrder={sendOrder}
            /> :
            <Venta 
            orderID={orderID} />
        } 


</div>

    );
}