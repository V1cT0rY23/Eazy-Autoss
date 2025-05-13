import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./styling/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      
      className="custom-navbar"
    >
      <Container fluid className="navbar-container">
        <Navbar.Brand  className="logo">
        <Link to="/" style={{color:"white", textDecoration:"none"}}>Eazy Autos </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="middle-links">
            <Nav.Link><Link className="nav-item" to="/" style={{color:"#C7C8C9", textDecoration:"none"}}>Home </Link> </Nav.Link>
            <Nav.Link><Link className="nav-item" to="/vehicles" style={{color:"#C7C8C9", textDecoration:"none"}}>Vehicles </Link> </Nav.Link>
            <Nav.Link><Link className="nav-item" to="/contact" style={{color:"#C7C8C9", textDecoration:"none"}}>Testimonials </Link> </Nav.Link>
            <Nav.Link><Link className="nav-item" to="/about" style={{color:"#C7C8C9", textDecoration:"none"}}>About Us </Link> </Nav.Link>
            <Nav.Link> <Link className="nav-item" to="/contact" style={{color:"#C7C8C9", textDecoration:"none"}}>Contact Us</Link> </Nav.Link>
            <div className="signup-mobile d-md-none mt-2">
              <Button variant="outline-light" size="sm">
                Cars
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>

        <div className="right-button d-none d-md-flex">
          <Button variant="outline-light">Cars</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
