import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NvBar from './components/NvBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import Validacion from './components/Validacion';
import CartContextProvider from './contex/CartContex';
import Formula from './components/Formula';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';


function App() {


  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="">
        <NvBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/category/:categoryId'element={<ItemListContainer/>} />
          <Route exact path='/item/:id'element={<ItemDetailContainer/>} />
          <Route exact path='/clientes'element={<Nosotros/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/validar' element={<Validacion/>} />
          {/* <Route exact path='/' element={<><Banner/>,<Formula/></>} /> */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
