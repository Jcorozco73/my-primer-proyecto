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
     <Link to ="/Mi Tienda">
     <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Link/>
     

      <Link to ="/Nosotros">
      <Navbar.Brand href="#nosotros">Nosotros</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Link>
      
       <Link to="/Productos">
       <Navbar.Brand href="#productos">Productos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
       </Link> 

        <Link to="/Contacto">
        <Navbar.Brand href="#contacto">Contacto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Link>

        <Link to="/Blog de Cocina">
        <Navbar.Brand href="#blog">Blog Cocina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Link>

        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <CartWidget />
        </Navbar.Collapse>

      </Container> 
    
    </Navbar>
    
 
  )
};
export default NavBar

