import '../App.css';
import Caracter from "./Caracter";


export default function Principal(){

    return(
<div>


    <Caracter
        caract1 = {{nombre:"Productos de Calidad", icono:<i className="far fa-check-circle fa-4x"></i>}}
        caract2 = {{nombre:"Delivery Regional", icono:<i className="fas fa-bicycle fa-4x"></i>}}
        caract3 = {{nombre:"Envios a nivel Nacional", icono:<i className="fas fa-truck fa-4x"></i>}}
    />


</div>
    );
}