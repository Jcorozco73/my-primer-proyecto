import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { getCategories } from '../../services/categories';
import { getProducts } from '../../services/items';
import { Container } from "react-bootstrap"

import { ItemList } from '../ItemList/itemList';
import { Link } from 'react-router-dom';




const ItemListContainer = () => {
  
  const {id} = useParams()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  
  
  useEffect (() => {
    getProducts(id).then((data) => {
      setProducts(data)
      })
      getCategories().then((data) => {
        setCategories(data)
      })

  },[id])




  return (
    <>
    <h1 className='text-center'>Bienvenido a la Fabrica {id} </h1> 
     <Container>

     <nav>
        <ul>
        {categories.map((category) => (
          <li>
          <Link to= {`/category/${category.id}`}> 
          {category.name} 
          </Link>
          </li>
          ))}
        </ul>
        </nav>
        
        <ItemList products={products} />
        
     </Container> 
    
    </>
  )
}

export {ItemListContainer}  ;