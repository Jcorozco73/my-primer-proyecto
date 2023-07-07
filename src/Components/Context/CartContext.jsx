import React, { createContext, useState } from 'react'


export const CartContext = createContext()
 const CartProvider = ({children}) => {

    const [cartArray, SetCartArray] = useState([])

    const addToCart =(product, count) => {
        const newObj = {
            producto: product,
            cantidad:count
        }
        SetCartArray([...cartArray, newObj])
    }

    const deleteItem =(id) => {
        const updateCart = cartArray.filter(elem => elem.producto.id !== id)
        SetCartArray(updateCart)
    }

    const clearCart = () => {
        SetCartArray([])
    }

    const isInCart = (id) => {
      return  cartArray.some(product => product.id === id) ? true: false
        //comprobar si el item esta en la cesta o no
    } 
    const addProduct =(item, quantity) =>{
        if(isInCart(item.id)){
          SetCartArray (cartArray.map(product =>{
            return product.id === item.id ?{...product,quantity:product.quantity + quantity} : product
          }));
    
        }else{
          SetCartArray ([...cartArray,{...item,quantity}]);
        }
      }
    const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart,
        addProduct
    }
  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
