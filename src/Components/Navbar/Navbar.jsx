
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cartwidgets/cartwidgets';
import './Navbar.scss'
import  BranNav  from './LogoNav';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../Context/CartContext';
import React, { useContext } from 'react';



const NavBar = () =>  {
  const {getQuantity} = useContext(CartContext)

  return (
   
    <Navbar bg="light" expand="lg" className='top-menu'>
    <BranNav />
      <Container >
     <Navbar.Brand as={Link}to ="/">Mi Tienda</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
       <Navbar.Brand as={Link}to="/Productos">Productos</Navbar.Brand>
         
       
        <Navbar.Brand as={Link}to="/category/:id">Categoria</Navbar.Brand>
        
       
        <Navbar.Brand as={Link}to="/Blogcocina">Blog Cocina</Navbar.Brand>

        <Navbar.Brand as={Link}to="/Cart">Cart</Navbar.Brand>

    
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
        
        <Link to="/cart">
        <AiOutlineShoppingCart /> 
        <Badge>{getQuantity()} {CartWidget()}</Badge>
        </Link>
         
        </Navbar.Collapse>
       
      </Container> 
    
    </Navbar>
    
 
  )
};
export default NavBar

