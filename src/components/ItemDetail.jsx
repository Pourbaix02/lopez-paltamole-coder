import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} de productos`)
    }



  return (
    <div>
        <h1>Detalle del producto: {producto.title} </h1>
        <img src={producto.image} alt={producto.image}/>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
        <ItemCount stock = {producto.stock} onAdd={onAdd} initial={1}/>
    </div>
  )
}

export default ItemDetail
