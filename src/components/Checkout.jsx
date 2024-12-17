import { useState, useContext } from "react";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button, Form, Container } from "react-bootstrap";
import { message } from "antd";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validate, setValidate] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, cartTotal, clear } = useContext(CartContext);

  const userData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (
      !user.name ||
      !user.lastname ||
      !user.email ||
      !user.address ||
      !user.phone
    ) {
      message.error("Los campos son obligatorios");
    } else if (user.email !== validate) {
      message.error("Los correos deben coincidir");
    } else {
      message.success("Orden enviada");
      let order = {
        buyer: user,
        carrito: cart,
        total: cartTotal(),
        date: serverTimestamp(),
      };

      const ventas = collection(db, "orders");

      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id);
          clear();
          message.success(`¡Compra realizada! ID de orden: ${res.id}`);
        })
        .catch((error) => message.error("Error: ", error));
    }
  };

  return (
    <Container className="my-5">
      {orderId !== "" ? (
        <div className="text-center">
          <h4>¡Generaste bien tu orden!</h4>
          <h5>El id es: {orderId}</h5>
          <Link
            to="/"
            className="btn btn-primary mt-3"
            style={{
              backgroundColor: "#D2B400",
              borderColor: "#D2B400",
              color: "#fff",
            }}
          >
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <div>
          <h4 className="text-center mb-4">Completa tus datos</h4>
          <Form
            className="d-flex flex-column align-items-center"
            onSubmit={finalizarCompra}
          >
            <Form.Group className="mb-3 w-75" controlId="formName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={userData}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-75" controlId="formLastname">
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Apellido"
                onChange={userData}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-75" controlId="formPhone">
              <Form.Control
                type="text"
                name="phone"
                placeholder="Número de teléfono"
                onChange={userData}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-75" controlId="formAddress">
              <Form.Control
                type="text"
                name="address"
                placeholder="Dirección"
                onChange={userData}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-75" controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Correo electrónico"
                onChange={userData}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-75" controlId="formSecondEmail">
              <Form.Control
                type="email"
                name="second-email"
                placeholder="Repita su correo"
                onChange={(e) => setValidate(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-75 mb-4">
              Finalizar compra
            </Button>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
