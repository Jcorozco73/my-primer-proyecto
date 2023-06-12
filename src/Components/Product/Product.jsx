import React from "react";
import { Button } from "react-bootstrap"
import './Product.scss'

export default function Product (props) {
    const {product} = props


    return (
   
       <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
       <h2>Productos</h2>
       <img src={product.image} className="card-img-top" alt="ImageCards" />
       <div className="card-body">
         <p className="card-text-title">{product.name}</p>
         <p className="card-text">{product.description}</p>
         <p className="card-text-title">Price: ${product.price}</p>
         <p className="card-text">Stock: {product.stock}</p>
       <Button className="btn btn-primary">Ver más</Button>
       <div className="btn">
       <Button className="btn btn-primary">Añadir al Carrito</Button>
       </div>
       </div>
     </div>  
       
    )

}