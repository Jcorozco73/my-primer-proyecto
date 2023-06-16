import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import CartWidget from '../Cartwidgets/cartwidgets';
import './Navbar.scss'
import  BranNav  from './LogoNav';
import { Link } from 'react-router-dom';



const NavBar = () =>  {
 
  return (
   
    <Navbar bg="light" expand="lg" className='top-menu'>
    <BranNav />
      <Container >
     <Navbar.Brand as={Link}to ="/">Mi Tienda</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Brand as={Link}to="/Nosotros">Nosotros</Navbar.Brand>
      
      
       <Navbar.Brand as={Link}to="/Productos">Productos</Navbar.Brand>
         
       
        <Navbar.Brand as={Link}to="/Contacto">Contacto</Navbar.Brand>
        
       
        <Navbar.Brand as={Link}to="/BlogdeCocina">Blog Cocina</Navbar.Brand>
        
    
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <CartWidget />
        </Navbar.Collapse>

      </Container> 
    
    </Navbar>
    
 
  )
};
export default NavBar

