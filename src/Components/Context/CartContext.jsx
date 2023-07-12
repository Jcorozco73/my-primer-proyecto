import React, { createContext, useState } from 'react'


export const CartContext = createContext()
 const CartProvider = ({children}) => {

    const [cartArray, SetCartArray] = useState([])

    const addToCart = (item, quantity) =>{
      if(isInCart(item.id)){
        SetCartArray (cartArray.map(product =>{
          return product.id === item.id ?{...product,quantity:product.quantity + quantity} : product
        }));
  
      }else{
        SetCartArray ([...cartArray,{...item,quantity}]);
      }
    }

    const deleteItem =(id) => {
        const updateCart = cartArray.filter(elem => elem.id !== id)
        SetCartArray(updateCart)
    }

    const clearCart = () => {
        SetCartArray([])
    }

    const isInCart = (id) => {
      return  cartArray.some(product => product.id === id) ? true: false
        //comprobar si el item esta en la cesta o no
    } 
    const getQuantity = () => {
      let cant = 0
      cartArray.forEach((e) => cant += e.quantity)
      return cant
      };

      const getTotal = () => {
        let cant = 0
        cartArray.forEach((e) => cant += e.quantity * e.price)
        return cant
        };

   
    console.log(cartArray)
    const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart,
        getQuantity,
        getTotal
        
    }
  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
