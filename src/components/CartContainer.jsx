import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";


const CartContainer = () => {

    const {cart} = useContext(CartContext)

  return (
    <div>
      {
        !cart.length 
        ? <EmptyCart/>
        : <div>
            <CartList/>
        </div>
      }
    </div>
  )
}

export default CartContainer
