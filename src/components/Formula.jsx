import React, { useContext } from 'react'
import '../App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CartContext } from '../contex/CartContex';


const Formula = ({setName, setEmail, setPhone, sendOrder}) => {

const datosForm = (valores) => {
    setName(valores.name);
    setEmail(valores.email);
    setPhone(valores.phone);

}
  const { cart, total} = useContext(CartContext);

    return(


        <div className='App'>
        <div className='FinCompra'>
        <div id='summary' className='w-1/4 px-8 py-10'>
          <h1 className='font-semibold text-2xl border-b pb-8'>
            RESUMEN DE COMPRA
          </h1>
          <div className='flex justify-between mt-10 mb-5'>
            <span className='font-semibold text-m uppercase'>Producto</span>
            <span className='font-semibold text-m uppercase'>Cantidad</span>
            </div>
            {cart.length > 0 &&
            cart.map((item) => (
            <div key={item.id} className='flex justify-between mt-10 mb-5'>
            <span className='font-semibold text-xs '>{item.nombre}</span>
            <span className='font-semibold text-xs'>{item.count}</span>
            </div>
            ))}
          
 
  


          <div className='border-t mt-8'>
            <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
              <span>TOTAL</span>
              <span>U$D {total()}</span>
            </div>
            </div>
            </div>



<div className='contenedor'>

<Formik
initialValues={{
    name: '',
    email: '',
    phone:''
}}

validate={(valores) => {
    setName(valores.name);
    setEmail(valores.email);
    setPhone(valores.phone);
    let errores = {};

    // Validacion nombre
    if (!valores.name) {
        errores.name='Por favor ingresa un nombre'
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
        errores.name='Solo puede contener letras y espacios'
    }


        // Validacion email
        if (!valores.email) {
            errores.email='Por favor ingresa un correo'
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errores.email='Ingresar un correo verdadero (ejemplo@ejemplo.com)'
        } 

        // Validacion Telefono
        if (!valores.phone) {
            errores.phone='Por favor ingresa un número de teléfono'
        } else if (!/^\d{7,14}$/.test(valores.phone)){
            errores.phone='Ingresar un número valido (solo números)'
        } 

 return errores;
}}


onSubmit={(valores) => {
    datosForm(valores)
    sendOrder()

    

}}
> 

{({errors}) => (
<Form className='formulario'>
    <div>
        <label htmlFor="nombre">Nombre</label>
        <Field 
        type="text" 
        id="name" 
        name="name"
        placeholder='Solo letras y espacios' 
        />
        <ErrorMessage name='name' component={() => ( <div className='error'>{errors.name} </div>)}/>
    </div>

    <div>
        <label htmlFor="email">Email</label>
        <Field 
        type="email" 
        id="email" 
        name="email"
        placeholder='ejemplo@ejemplo.com' 
        />
        <ErrorMessage name='email' component={() => ( <div className='error'>{errors.email} </div>)}/>
    </div>

    <div>
        <label htmlFor="phone">Teléfono</label>
        <Field 
        type="text" 
        id="phone" 
        name="phone"
        placeholder='Solo números' 
        />
        <ErrorMessage name='phone' component={() => ( <div className='error'>{errors.phone} </div>)}/>
    </div>

    <button type='submit'>FINALIZAR COMPRA</button>
</Form>
    )}

    
</Formik>
</div>
</div>
</div>
);
}
export default Formula;