import { useState } from 'react'
import ItemCount from './ItemCount'
import { Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
    
  
  const [compra, setCompra] = useState(false)
  const {addToCart} = useCart()

  const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} de productos`)
        setCompra(true)
        // let cartItem = {
        //   name: producto.title,
        //   image: producto.image,
        //   price: producto.price,
        //   id:producto.id,
        // }
    
        addToCart(producto, cantidad)
      }

    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card w-75 p-4 shadow-lg">
          <div className="row g-4">
            {/* Columna para la imagen */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img 
                src={producto.image} 
                alt={producto.title} 
                className="img-fluid rounded"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
            {/* Columna para el texto */}
            <div className="col-md-6">
              <h1 className="card-title mb-4">Detalle del producto: {producto.title}</h1>
              <p className="card-text">{producto.description}</p>
              <h3 className="text-success mb-4">Precio: ${producto.price}</h3>
              {compra ? <Button as={Link} to='/cart'> Ir al carrito </Button> : <ItemCount stock={producto.stock} onAdd={onAdd} initial={1} />}
            </div>
          </div>
        </div>
      </div>
    );
    
    
}

export default ItemDetail
