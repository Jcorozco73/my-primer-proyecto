import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import useFetch from '../Hooks/usefetch';
import Products from '../Products/Products';


const ItemListContainer = (props) => {
  const products= useFetch('./productos.json', null)

  const {id} = useParams()

  return (
    <>
    <h1 className='text-center'>{props.greeting}:{id} </h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/category/1">Categoria 1</NavLink>
        </li>
      </ul>
      <Products products={products} />
    </nav>
    
    </>
   
    
  )

}

export default ItemListContainer;