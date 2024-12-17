import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductNotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-75 p-4 shadow-lg border-0 rounded-3 text-center">
        <h2 className="text-danger">Producto no encontrado</h2>
        <p className="text-muted mb-4">
          Lo sentimos, no hemos podido encontrar el producto que estás buscando.
        </p>
        <Button
          as={Link}
          to="/"
          variant="primary"
          className="px-4 py-2"
          style={{
            backgroundColor: "#D2B400",
            borderColor: "#D2B400",
            color: "#fff",
          }}
        >
          Volver a la tienda
        </Button>
      </div>
    </div>
  );
};

export default ProductNotFound;
