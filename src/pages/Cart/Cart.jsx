import React, { useContext } from 'react'
import { CartContext } from '../../Components/Context/CartContext'
import CartItem from '../CartItem/CartItem'


const CartContainer = () => {
    const {cartArray, deleteItem} = useContext(CartContext)


    return (
        <div>
        {cartArray.map(product => <CartItem key={product.item.id} producto={product} deleteItem={deleteItem} />)}
        </div>
    )
}

export default CartContainer