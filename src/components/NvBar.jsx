
import React from 'react';
import logo from '../assets/img/logo.png'
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css';


export default function NvBar(){

    return(
<div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logo} className="logoNav"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">INICIO</Nav.Link>
        <Nav.Link href="#link">COMPRAR</Nav.Link>
        <NavDropdown title="NOSOTROS" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Tutoriales</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Clientes</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
}