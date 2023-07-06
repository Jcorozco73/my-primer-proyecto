import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap'


const CartItem = ({product, deleteItem}) => {

    return (
        <Card>

        <Container>

        <Row>
        <Col md={6}>
            {product.item.name}
        </Col>
        <Col md={6}>
            {product.count}
        </Col>
        <Col md={6}>
            {product.item.price}
        </Col>
        <Col md={6}>
            <Button variant='danger' onClick={() => deleteItem(product.item.id)}>Delete</Button>
        </Col>
        
        </Row>


        </Container>
        
        </Card>
    )
}

export default CartItem