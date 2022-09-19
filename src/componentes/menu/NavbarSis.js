import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarSis = () =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Fidelizacion Clientes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Clientes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blosas de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="clientes">Cliente</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Puntos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="conceptos">Conceptos de uso de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="reglasPuntos">Reglas de asignacion de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Parametrizacion de vencimientos de puntos</NavDropdown.Item>   
            </NavDropdown>
            <Nav.Link href="#features">Uso de puntos</Nav.Link>
            <NavDropdown title="Reportes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Uso de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Clientes con puntos a vencer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Consulta de clientes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Carga de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Utilizar puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Consultar puntos por x monto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSis