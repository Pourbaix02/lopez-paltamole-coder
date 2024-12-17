import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart, clear, cartTotal } = useCart();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tu Carrito de Compras</h2>

      <div className="cart-items mb-4">
        {cart.map((prod) => (
          <CartItem key={prod.id} prod={prod} />
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center p-3 border-top mt-4">
        <span className="font-weight-bold fs-4 text-primary">
          Total a pagar: <span className="text-success">${cartTotal()}</span>
        </span>

        <div className="d-flex gap-3">
          <button
            className="btn btn-danger btn-lg px-4 py-2"
            onClick={clear}
          >
            Borrar Carrito
          </button>
          <Link
            className="btn btn-success btn-lg px-4 py-2"
            to="/checkout"
          >
            Terminar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartList;
