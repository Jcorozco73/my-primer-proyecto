import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { getCategories } from '../../services/categories';
import { getItems, } from '../../services/items';
import { Button, Container } from "react-bootstrap"
import { products } from '../../Tmp/data';
import { Link } from "react-router-dom";



const ItemListContainer = () => {
  
  const {id} = useParams()

  const [item, setItems] = useState([])
    
  useEffect (() => {
    getItems().then((data) => {
      setItems(data)
      })
  }, [])


  return (
    <>
    <h1 className='text-center'>Bienvenido a la Fabrica:{id} </h1> 
     <Container>
     {products.map((product) => (
      <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
         <h2>Productos</h2>
         <img src={product.image} className="card-img-top" alt="ImageCards" />
         <div className="card-body">
           <p className="card-text-title">{product.name}</p>
           <p className="card-text-title">{product.category}</p>
           <p className="card-text">{product.description}</p>
           <p className="card-text-title">Price: ${product.price}</p>
           <p className="card-text">Stock: {product.stock}</p>
         <Button as={Link}to={(`/detalle/ ${product.id}`)} className="btn btn-primary">Ver más</Button>
  
         <div className="btn">
         <Button className="btn btn-primary">Añadir al Carrito</Button>
         </div>
         </div>
       </div>     
       ))}
        
     </Container> 
    
    </>
  )
}

export {ItemListContainer}  ;