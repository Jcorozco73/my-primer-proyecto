import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const Item = ({name, description, id, category, image, price, stock, onItemClicked, textButtom}) => {
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
        <Button as={Link}to= {(`/detalle/${id}`)} onClick={onItemClicked}>
        {textButtom}
        </Button>
 
        <div className="btn">
        <Button className="btn btn-primary">Añadir al Carrito</Button>
        </div>
        </div>
      </div>   
    )

}

export {Item}