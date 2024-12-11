import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import  CartItem  from "./CartItem";


const CartContainer = () => {

    const {cart, clear} = useContext(CartContext)

  return (
    <div>
      {
        !cart.length 
        ? <div>
            <h2>Tu carrito está vacío</h2>
            <link to='/'> Ir a comprar</link>
        </div>
        : <div>
            <h2>Tu carrrito:</h2>
            {cart.map((prod) => <CartItem key={prod.id} prod={prod}/>)}
            <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
        </div>
      }
    </div>
  )
}

export default CartContainer
