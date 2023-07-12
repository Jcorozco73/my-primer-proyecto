import React, { useContext } from 'react'
import { CartContext } from '../../Components/Context/CartContext'
import CartItem from '../CartItem/CartItem'


const CartContainer = () => {
    const {cartArray, deleteItem, getTotal} = useContext(CartContext)


    return (
        <div>
        {cartArray.map(product => <CartItem key={product.id}
             product={product} deleteItem={deleteItem} />)}
             <p>Total a pagar: ${getTotal()}</p>

        </div>
    )
}

export default CartContainer