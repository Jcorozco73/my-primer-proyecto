import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/usefetch';
import Products from '../Products/Products';

const ItemListContainer = (props) => {
  const products= useFetch('./productos.json', null)

  const {id} = useParams()

  return (
    <div>

    <h1 className='text-center'>{props.greeting}:{id} </h1>
    <Products products={products} />

    </div>
     
  )

}

export default ItemListContainer;