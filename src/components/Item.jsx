import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {

  const navigate = useNavigate()

  return (
    <>
      <div className="col-md-6 col-lg-4 my-2">
        <div
          className="card"
          style={{ minHeight: 200, width: 400, fontSize: "0.85rem" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={product.image}
                className="card-img"
                alt={product.title}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div
                className="card-body"
                style={{ position: "relative", padding: "0.5rem" }}
              >
                <h5 className="card-title" style={{ fontSize: "1rem" }}>
                  {product.title}
                </h5>
                <p className="card-text" style={{ fontSize: "0.75rem" }}>
                  {product.description}
                </p>
                <p className="card-price" style={{ fontSize: "0.75rem" }}>
                  Precio: ${product.price}
                </p>
                <button
                  className="btn btn-primary btn-sm" onClick={()=> navigate(`/item/${product.id}`)}
                  style={{ padding: "0.3rem 0.5rem", fontSize: "0.75rem" }}
                >
                  Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
