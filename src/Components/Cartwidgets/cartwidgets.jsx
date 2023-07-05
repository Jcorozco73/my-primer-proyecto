import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Badge} from 'react-bootstrap' ;


const CartWidget = () => {
  return (
    <div className='justify-content-end'>
      <AiOutlineShoppingCart /> <Badge>0</Badge>  
    </div>
  );
};

export default CartWidget;