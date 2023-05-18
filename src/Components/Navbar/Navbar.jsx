import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import CartWidget from '../Cartwidgets/cartwidgets';


const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
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
  );
};

export default NavBar;