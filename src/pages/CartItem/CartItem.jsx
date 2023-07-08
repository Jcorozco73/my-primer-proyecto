import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap'


const CartItem = ({product, deleteItem}) => {

    return (
        <Card>

        <Container>

        <Row>
        <Col md={6}>
            {product.name}
        </Col>
        <Col md={6}>
            {product.quantity}
        </Col>
        <Col md={6}>
            {product.price.toFixed(2)}
        </Col>
        <Col md={6}>
            <Button variant='danger' onClick={() => deleteItem(product.id)}>Delete</Button>
        </Col>
        
        </Row>


        </Container>
        
        </Card>
    )
}

export default CartItem