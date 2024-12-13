import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  
  const {cartQuantity} = useCart()

  return (
    <div className="cart-container">
      <IoCartOutline size={50} />
      <div className="cart-badge">
       {cartQuantity() > 0 && <Badge bg="danger" pill>{cartQuantity()}</Badge>} 
      </div>
    </div>
  );
};

export default CartWidget;
