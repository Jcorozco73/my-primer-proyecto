
import { Col, Row } from "react-bootstrap";
import { Item } from "../Item/Item";
const ItemList = ({products}) => {

  return (
    <Row>
    {
      products.map((product) => (
        <Col>
        <Item
        name={product.name}
        description={product.description}
        category={product.category}
        price={product.price}
        image={product.image}
        id={product.id}
        stock={product.stock} 
        />
        </Col>
      ))}
    </Row>
  )
      
}

export{ItemList}