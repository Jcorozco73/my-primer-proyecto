import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import CartWidget from '../Cartwidgets/cartwidgets';
import './Navbar.scss'
import  BranNav  from './LogoNav';


const NavBar = () =>  {
  return (
    <Navbar bg="primary" expand="lg" className='top-menu'>
    <BranNav />
      <Container>
        <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href="#productos">Productos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href="#contacto">Contacto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href="#blog">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <CartWidget />
        </Navbar.Collapse>

      </Container> 
    </Navbar>
    
 
  )
};
export default NavBar

