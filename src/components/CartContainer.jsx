import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";


const CartContainer = () => {

    const {cart} = useContext(CartContext)

  return (
    <div style={{ backgroundColor: '#000' , color: 'fff', paddingTop: '0px'}}>
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
