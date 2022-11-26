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
        <Navbar.Brand href="/home">Fidelizacion Clientes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Clientes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/home/bolsasPunto">Bolsas de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/clientes">Cliente</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Puntos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/home/conceptos">Conceptos de uso de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/reglasPuntos">Reglas de asignacion de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/puntosVencimiento">Parametrizacion de vencimientos de puntos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reportes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/home/usopunto">Uso de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/consulta_bolsa_puntos">Bolsa de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/consulta_cliente_puntos">Clientes con puntos a vencer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/consulta_cliente">Consulta de clientes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/home/carga_puntos">Carga de puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/utilizar_puntos">Utilizar puntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home/consulta_monto">Consultar puntos por x monto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Cerrar Sesion" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Login"><i class="bi bi-box-arrow-right">    Salir</i></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSis
