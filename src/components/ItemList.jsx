import Item from './Item'

const ItemList = ({products}) => {
  return (
    <>
        <div className="d-flex align-content-between flex-wrap" style={{ backgroundColor: '#000' }} >
            {products.map((product) => <Item key={product.id} product={product}/>
            )}
        </div>
</>
  )
}

export default ItemList

//me falta el tema del ID y la actividad 3
// añadir padding 