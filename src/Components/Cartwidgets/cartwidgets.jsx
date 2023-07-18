import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  return (
    <div className='justify-content-end'>
    {getQuantity}   
    </div>
  );
};

export default CartWidget;