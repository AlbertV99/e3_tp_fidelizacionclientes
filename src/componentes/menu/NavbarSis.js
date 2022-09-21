import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarSis = () =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="house">Fidelizacion Clientes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Clientes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="bolsasPunto">Bolsas de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="clientes">Cliente</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Puntos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="conceptos">Conceptos de uso de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="reglasPuntos">Reglas de asignacion de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="puntosVencimiento">Parametrizacion de vencimientos de puntos</NavDropdown.Item>   
            </NavDropdown>
            <Nav.Link href="house">Uso de puntos</Nav.Link>
            <NavDropdown title="Reportes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="house">Uso de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="house">Clientes con puntos a vencer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="house">Consulta de clientes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="house">Carga de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="house">Utilizar puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="house">Consultar puntos por x monto</NavDropdown.Item>
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