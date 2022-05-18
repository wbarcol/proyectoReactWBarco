import React from 'react'
import '../App.css';

export default function Formulario({name, lastname, phone, email, setName, setLastname, setPhone, setEmail, sendOrder}){

    return(

<div>

{/* FORMULARIO */}

<div className="main__formulario">
    <h5>DATOS DEL CLIENTE</h5>
<form action="" className="formulario" id="formulario" onSubmit={(e) => { e.preventDefault(); sendOrder()}}>

    {/* <!-- Grupo: Nombre --> */}
<div className="formulario__grupo" id="grupo__nombre">
    <label  className="formulario__label">Nombre</label>
    <div className="formulario__grupo-input">
        <input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Solo letras" value={name} onChange={(e) => { setName(e.currentTarget.value) }} required />
    </div>
</div>


    {/* <!-- Grupo: Apellido --> */}
    <div className="formulario__grupo" id="grupo__apellido">
        <label className="formulario__label">Apellido</label>
        <div className="formulario__grupo-input">
            <input type="text" className="formulario__input" name="apellido" id="apellido" placeholder="Solo letras" value={lastname} onChange={(e) => { setLastname(e.currentTarget.value) }} required/>
        </div>
    </div>

                {/* <!-- Grupo: Telefono --> */}
    <div className="formulario__grupo" id="grupo__telefono">
        <label className="formulario__label">Teléfono</label>
        <div className="formulario__grupo-input">
            <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder="Solo números sin espacios" value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} required/>
        </div>
    </div>


        {/* <!-- Grupo: Correo --> */}
        <div className="formulario__grupo" id="grupo__correo">
            <label className="formulario__label">E-mail</label>
            <div className="formulario__grupo-input">
                <input type="email" className="formulario__input" name="correo" id="correo" placeholder="example@example.com" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} required/>
            </div>
        </div>


    <div className="formulario__grupo formulario__grupo-btn-enviar">
<button type="submit" className="formulario__btn">Finalizar compra</button>
    </div>

</form>

</div>
</div>
);
}