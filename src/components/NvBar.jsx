
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
    <Navbar.Brand><Link to={'/'}> <img src={logo} className="logoNav"/> </Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to={'/'}>INICIO</Link></Nav.Link>
        <Nav.Link href="#link">NOSOTROS</Nav.Link>
        <NavDropdown title="COMPRAR" id="basic-nav-dropdown">
          <NavDropdown.Item> <Link to={'/category/repuestos'}> REPUESTOS</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={'/category/accesorios'}> ACCESORIOS</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link"><Icon cant={0} /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
}