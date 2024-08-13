import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "./CartWidget";
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">CAQAO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/Tabletas">Tabletas</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={NavLink} to="/category/Conitos">Conitos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    );
};