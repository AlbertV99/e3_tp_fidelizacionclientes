import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarSis = () =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
            <img
              src="/logo.png"
              width="100"
              height="45"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
        <Navbar.Brand href="home">Fidelizacion Clientes</Navbar.Brand>
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
            <NavDropdown title="Reportes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="usopunto">Uso de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="home">Bolsa de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="home">Clientes con puntos a vencer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="consulta_cliente">Consulta de clientes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="carga_puntos">Carga de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="utilizar_puntos">Utilizar puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="consulta_monto">Consultar puntos por x monto</NavDropdown.Item>
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
