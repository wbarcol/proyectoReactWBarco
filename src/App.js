import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NvBar from './components/NvBar';
import Principal from './components/Principal';
// import Principal from './components/Principal';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Banner from './components/Banner';
import Cart from './components/Cart';
import Validacion from './components/Validacion';
import CartContextProvider from './contex/CartContex';


function App() {


  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NvBar/>
        <Routes>
          <Route exact path='/' element={<><Principal/>,<ItemListContainer/></>} />
          <Route exact path='/category/:categoryId'element={<><Banner/>,<ItemListContainer/></>} />
          <Route exact path='/item/:id'element={<><Banner/>,<ItemDetailContainer/></>} />
          <Route exact path='/cart' element={<><Banner/>,<Cart/></>} />
          <Route exact path='/validar' element={<><Banner/>,<Validacion/></>} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
