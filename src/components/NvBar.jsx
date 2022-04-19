
import React from 'react';
import logo from '../assets/img/logo.png'
import { Container, Navbar, Nav, NavDropdown,} from 'react-bootstrap';
import '../App.css';
import Icon from './Icon';
import { Link } from 'react-router-dom';



export default function NvBar(){

    return(
<div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={'/'}> <img src={logo} className="logoNav"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={'/'}>INICIO</Nav.Link>
        <Nav.Link href="#link">NOSOTROS</Nav.Link>
        <NavDropdown title="COMPRAR" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={'/category/repuestos'}> REPUESTOS </NavDropdown.Item>
          <NavDropdown.Item as={Link} to={'/category/accesorios'}> ACCESORIOS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to={'/cart'} ><Icon cant={0} /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
}