import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';


const NavBar = () => {
  const {cantidadTotal} = useCartContext()
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to='/'>
              <Navbar.Brand><img src='../../../imagenes/logo.PNG' alt="logo" className='w-60'/></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="#action2">Recetas</Nav.Link>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item><NavLink to='/categoria/Proteina' className='m-2 nav-link'>Proteina</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/categoria/Creatina' className='m-2 nav-link'>Creatina</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/categoria/Pre-Entreno' className='m-2 nav-link'>Pre-Entreno</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><NavLink to='/' className='m-2 nav-link'>Todos los Productos</NavLink></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="#">Contacto</Nav.Link>
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
          <Link to='/cart'>
          { cantidadTotal() !== 0 && cantidadTotal() }
            <CartWidget />
          </Link>
          
        </Container>
      </Navbar>



    );
}

export default NavBar
