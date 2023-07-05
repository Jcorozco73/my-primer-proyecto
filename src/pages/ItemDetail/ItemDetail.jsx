import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react";




    const ItemDetail = ({id, name, description, added, category, price, stock, image, onItemClicked, textButtom}) => {

        const [quantity, setQuantity] = useState()

        const handlerAdd = (quantity) => {
            setQuantity(quantity);
            
        };




    return (
     
        <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
        <h2>Productos</h2>
        <img src={image} className="card-img-top" alt="ImageCards" />
        <div className="card-body">
          <p className="card-text-title">{id}</p>
          <p className="card-text-title">{name}</p>
          <p className="card-text-title">{category}</p>
          <p className="card-text">{description}</p>
          <p className="card-text-title">Price: ${price}</p>
          <p className="card-text">Stock: {stock}</p>
         
 
        <div className="btn">
        {added ? <Link to='/cart'> Añadir al Carrito</Link> :  <ItemCount stock={stock} initial={1} onAdd={handlerAdd} /> } 
        </div>
        </div>
      </div>   

    )

}

export {ItemDetail}
