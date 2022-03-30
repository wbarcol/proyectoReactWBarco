import React from "react";
import '../App.css';

export default function Home(){

    return(
<div>
<div className="imgPrincipal">
      <div className="btnComprar">
        <button type="button" id="btnComprar" className="btn btn-warning">
          <a href="#link">COMPRAR</a>
        </button>
      </div>
    </div>

    <div className="caracteristicas">
      <div className="caract">
        <i className="far fa-check-circle fa-4x"></i>
        <h3>Productos de calidad</h3>
      </div>
      <div className="caract">
        <i className="fas fa-bicycle fa-4x"></i>
        <h3>Delivery regional</h3>
      </div>
      <div className="caract">
        <i className="fas fa-truck fa-4x"></i>
        <h3>Envios a nivel nacional</h3>
      </div>
    </div>

</div>
    );
}