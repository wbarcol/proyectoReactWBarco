import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);


    const addToCart = (item) =>{

    const indexProducto = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexProducto !== -1) {

      const newCart = [...cart];
      newCart[indexProducto].count = newCart[indexProducto].count + item.count;
      
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
};


    const removeFromCart = (id) =>{
        setCart(cart.filter((producto) => producto.id !== id));
    }

    
    const removeUni = (id, cantidad, count) =>{

        if (count <= cantidad && count > 1) {
        const indexP = cart.findIndex((cartI) => cartI.id === id);
        if (indexP !== -1) {
            const nCart = [...cart];
      nCart[indexP].count = nCart[indexP].count -1;
          
          setCart(nCart);
        } 
    }}

    const addUni = (id, cantidad, count) =>{

        if (count < cantidad && count >= 1 ) {
        const indexP = cart.findIndex((cartI) => cartI.id === id);
        if (indexP !== -1) {
            const nCart = [...cart];
      nCart[indexP].count = nCart[indexP].count +1;
          
          setCart(nCart);
        } 
    }}

    const total = () => {
        return cart.reduce((total, item) => total + item.count*item.precio, 0)
    }

    const buyAll = () => setCart([]);

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll, removeUni, addUni, total}}>{children}</CartContext.Provider>
    )
}

export default CartContextProvider;