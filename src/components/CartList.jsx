import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const CartList = () => {

    const {cart, clear, cartTotal} = useCart()

  return (
    <div>
      {cart.map((prod) => <CartItem key={prod.id} prod={prod}/>)}
      <span>Total a pagar: ${cartTotal()}</span>
      <div style ={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem',
      }}>
        <button className="btn btn-danger" onClick={clear}>Borrar Carrito</button>
        <Link className="btn btn-success" to='/checkout' onClick={clear}>Terminar Compra</Link>
      </div>
    </div>
  )
}

export default CartList
