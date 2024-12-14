import { useState } from "react"
import { useCart } from "../context/CartContext"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear} = useCart();

    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const finalizarCompra = (e)=> {
        e.preventDefault()
        console.log("carrito actual:", cart)
        if(!user.name || !user.lastname || !user.email || !user.address){
            alert('los campos son obligatorios')
        } else if (user.email !== validate) {
            alert('Los emails deben ser iguales')
        } else {
            let order = {
                buyer: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas,order)
            .then((res)=> {
                // cart.forEach((item)=>{
                //     const docRef = doc(db, "productos", item.id)
                //     getDoc(docRef)
                //     .then((dbDoc)=>{
                //         updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                //     })
                // })
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
        }
    }

  return (
    <div>
        {orderId !== '' ? <div>
                    <h4>Generaste bien tu orden!</h4>
                    <h5>El id es: {orderId}</h5>
                    <Link to='/'>Volver al inicio</Link>
        </div>
        :
        <div>
      <h4>Completa tus datos</h4>
      <form className='d-flex flex-column align-items-center' onSubmit={finalizarCompra}>
            <input type="text" name='name' placeholder='Ingreso su nombre' onChange={userData}/>
            <input type="text" name='lastname' placeholder='Ingreso su apellido' onChange={userData}/>
            <input type="text" name='address' placeholder='Ingrese su dirección' onChange={userData}/>
            <input type="email" name='email' placeholder='Ingrese su correo' onChange={userData}/>
            <input type="email" name='second-email' placeholder='Repita su correo' onChange={(e)=> setValidate(e.target.value)}/>
            <input type="text" />
            <input type="text" />
            <button className='btn btn-success' type="submit">Enviar</button>
      </form>
    </div>}
    </div>
  )
}

export default Checkout
