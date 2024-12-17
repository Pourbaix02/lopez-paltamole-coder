import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { message } from "antd"; 

const CartItem = ({ prod }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id); 
    message.success("Producto eliminado del carrito");  
  };

  return (
    <div className="d-flex align-items-center justify-content-between p-3 mb-3 border rounded shadow-sm">
      <img 
        src={prod.image} 
        alt={prod.name} 
        style={{ width: "10rem", height: "10rem", objectFit: "cover", borderRadius: "8px" }} 
      />
      
      <div className="d-flex flex-column mx-3" style={{ flex: 1 }}>
        <span className="font-weight-bold text-truncate" style={{ maxWidth: "15rem" }}>
          {prod.title} 
        </span>
        <span className="text-muted">Cantidad: {prod.cantidad}</span>
        <span className="text-muted">Precio Unitario: ${prod.price},00</span>
        <span className="font-weight-bold text-success">
          Subtotal: ${prod.cantidad * prod.price},00
        </span>
      </div>

  
      <div className="d-flex flex-column align-items-center">

        <button 
          className="btn btn-danger mt-2"
          onClick={() => handleRemove(prod.id)}  
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;

