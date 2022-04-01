import React from "react";
import '../App.css';
import Caracter from "./Caracter";

export default function BannerPri(props){

    return(
<div>
<div className="imgPrincipal">
      <div className="btnComprar">
        {props.buttonComprar}
      </div>
    </div>


</div>
    );
}

<button type="button" id="btnComprar" className="btn btn-warning">
          <a href="#link">COMPRAR</a>
        </button>