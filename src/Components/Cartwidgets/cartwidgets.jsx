import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const CartWidget = () => {
  return (
    <div className='justify-content-end'>
      <AiOutlineShoppingCart /> 
      <p>0</p>  
    </div>
  );
};

export default CartWidget;