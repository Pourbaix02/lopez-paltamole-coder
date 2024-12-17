import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div
        className="d-flex align-content-between flex-wrap pb-5"
        style={{ backgroundColor: "#ADCD68" }}
      >
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
