import { useState } from 'react'
import ItemCount from './ItemCount'
import { Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { message } from 'antd' 

const ItemDetail = ({ product }) => {
  const [compra, setCompra] = useState(false)
  const { addToCart } = useCart()

  const onAdd = (cantidad) => {
    message.success(`Agregaste al carrito ${cantidad} ${product.title}`)
    setCompra(true)
    addToCart(product, cantidad)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-75 p-4 shadow-lg border-0 rounded-3">
        <div className="row g-4">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded-3 shadow-sm"
              style={{
                maxHeight: '400px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </div>
          <div className="col-md-6">
            <h1 className="card-title mb-3 text-primary">{product.title}</h1>
            <p className="card-text text-muted">{product.description}</p>
            <h3 className="text-success mb-4">Precio: ${product.price}</h3>
            {compra ? (
              <div className="d-flex gap-3">
                <Button as={Link} to="/cart" variant="primary" className="px-4 py-2">
                  Ir al carrito
                </Button>
                <Button as={Link} to="/store" variant="secondary" className="px-4 py-2">
                  Seguir comprando
                </Button>
              </div>
            ) : (
              <ItemCount stock={product.stock} onAdd={onAdd} initial={1} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

