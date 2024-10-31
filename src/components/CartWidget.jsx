import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';

const CartWidget = (props) => {

  return (
    <div className="cart-container">
      <IoCartOutline size={50} />
      <div className="cart-badge">
        <Badge bg="danger" pill>{props.counter}</Badge>
      </div>
    </div>
  );
};

export default CartWidget;
