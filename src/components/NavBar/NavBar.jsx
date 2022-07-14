import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';


const NavBar = () => {

    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><img src="../../../imagenes/logo.PNG" alt="LOGO" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Recetas</Nav.Link>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Proteinas</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Creatinas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Pre-entrenos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Todos los productos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                Contacto
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    );
}

export default NavBar
