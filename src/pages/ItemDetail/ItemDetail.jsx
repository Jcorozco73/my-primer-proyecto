import { Button } from "react-bootstrap"




const ItemDetail = ({id, name, description, category, price, stock, image, onItemClicked, textButtom}) => {


    return (
     
        <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
        <h2>Productos</h2>
        <img src={image} className="card-img-top" alt="ImageCards" />
        <div className="card-body">
          <p className="card-text-title">{name}</p>
          <p className="card-text-title">{category}</p>
          <p className="card-text">{description}</p>
          <p className="card-text-title">Price: ${price}</p>
          <p className="card-text">Stock: {stock}</p>
         
 
        <div className="btn">
        <Button className="btn btn-primary">Añadir al Carrito</Button>
        </div>
        </div>
      </div>   

    )

}

export {ItemDetail}
