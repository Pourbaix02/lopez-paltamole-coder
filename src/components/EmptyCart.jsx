import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-center text-white">
        <h2 className="display-4">¡Tu carrito está vacío!</h2>
        <h4 className="mb-4">
          ¡Te invitamos a ver nuestros productos y añadirlos a tu carrito!
        </h4>
        <Link
          to="/"
          className="btn btn-dark btn-lg px-4 py-2 shadow-lg"
          style={{ fontSize: "1rem" }}
        >
          Ir a comprar
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
