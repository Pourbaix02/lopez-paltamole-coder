import '../styles/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import BrandLogo from './BrandLogo';
import CartWidget from './CartWidget';

function Navbar() {



  return (
    <>
      <Nav className="fixed-nav" activeKey="/home">
        <div className="nav-section logo-section">
          <BrandLogo />
        </div>
        <div className="nav-section options-section">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Combos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Aperitivos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Tacos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Burritos</Nav.Link>
          </Nav.Item>
        </div>
        <div className="nav-section cart-section">
          <CartWidget counter={5}/>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
