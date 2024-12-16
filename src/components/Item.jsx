import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex col-md-6 col-lg-4 my-2 justify-content-center">
      <div
        className="card"
        style={{
          maxHeight: 200,
          width: 400,
          fontSize: "0.85rem",
          border: "none", // Elimina bordes para evitar el borde de la tarjeta si hay
          borderRadius: "0.25rem", // Agrega bordes redondeados si lo deseas
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Sombra sutil para darle más profundidad
        }}
      >
        <div className="row no-gutters"> {/* 'no-gutters' para eliminar los espacios entre columnas */}
          <div
            className="d-flex col-md-4 justify-content-center"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover", // Asegura que la imagen cubra el div completamente
              backgroundPosition: "center", // Centra la imagen
              height: "200px", // Ajusta la altura del div
              boxSizing: "border-box", // Asegura que el padding y bordes estén incluidos en las dimensiones del div
              borderTopLeftRadius: "0.25rem", // Bordes redondeados superiores si se desea
              borderBottomLeftRadius: "0.25rem", // Bordes redondeados inferiores si se desea
            }}
          >
            {/* Puedes agregar contenido adicional si es necesario dentro de este div */}
          </div>
          <div className="col-md-8 d-flex flex-column">
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
              <p className="card-price mb-0" style={{ fontSize: "0.75rem" }}>
                Precio: ${product.price}
              </p>
            </div>
            <div className="mt-auto d-flex justify-content-end">
              <button
                className="btn btn-primary btn-sm mx-2 my-2"
                onClick={() => navigate(`/item/${product.id}`)}
                style={{ padding: "0.3rem 0.5rem", fontSize: "0.75rem" }}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
