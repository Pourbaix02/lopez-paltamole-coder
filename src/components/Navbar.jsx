import '../styles/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import BrandLogo from './BrandLogo';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function Navbar() {



  return (
    <>
      <Nav className="fixed-nav" activeKey="/home">
        <NavLink className="nav-section logo-section" to="/">
          <BrandLogo />
        </NavLink>
        <div className="nav-section options-section">
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/category/combos"}>Combos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/category/aperitivos"}>Aperitivos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/category/tacos"}>Tacos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/category/burritos"}>Burritos</Nav.Link>
          </Nav.Item>
        </div>
        <div className="nav-section cart-section">
          <NavLink to='/cart' style={{color:'white', textDecoration:'none'}}>
          <CartWidget/>
          </NavLink>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
