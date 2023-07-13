import React, { useContext } from 'react'
import { CartContext } from '../../Components/Context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Button} from 'react-bootstrap'


const CartContainer = () => {
    const {cartArray, deleteItem, getTotal, clearCart} = useContext(CartContext)


    return (
        <div>
        {cartArray.map(product => <CartItem key={product.id}
             product={product} deleteItem={deleteItem} />)}
             <p className='fw-bold'>Total a pagar: ${getTotal()}</p>

            <Button variant='danger' onClick={clearCart}>Vaciar Carrito</Button>
        </div>
    )
}

export default CartContainer