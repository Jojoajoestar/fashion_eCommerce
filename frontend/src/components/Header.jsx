import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logoT3.png'; // Importing the logo image

/**
 * Header Component
 * This component displays the navigation bar at the top of the application.
 * It includes links for the home page, cart, and user sign-in.
 */
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Brand Logo and Name */}
          <Navbar.Brand as={Link} to="/" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo Image */}
            <img src={logo} alt="Thrift Daddy"style={{ height: '100px', marginRight: '5px' }}/>
            {/* Brand Name */}
            Thrift Daddy
          </Navbar.Brand>

          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Navigation Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Cart Link */}
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>

              {/* Sign In Link */}
              <Nav.Link as={Link} to="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
