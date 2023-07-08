import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Badge} from 'react-bootstrap' ;
import { CartContext } from '../Context/CartContext';


const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  return (
    <div className='justify-content-end'>
      <AiOutlineShoppingCart /> 
      <Badge> {getQuantity()} </Badge>  
    </div>
  );
};

export default CartWidget;