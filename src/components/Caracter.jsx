import React from "react";
import '../App.css';

export default function Caracter(props){

    return(
<div>

    <div className="caracteristicas">
      <div className="caract">
        <div>{props.caract1.icono}</div>
        <h3>{props.caract1.nombre}</h3>
      </div>
      <div className="caract">
      <div>{props.caract2.icono}</div>
        <h3>{props.caract2.nombre}</h3>
      </div>
      <div className="caract">
      <div>{props.caract3.icono}</div>
        <h3>{props.caract3.nombre}</h3>
      </div>
    </div>

</div>
    );
}