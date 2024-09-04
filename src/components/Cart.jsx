import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, removeItem, reset } = useContext(ItemsContext);

  const handleChange = (ev) => {
    setBuyer((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada");
        }
      })
      .finally(() => {
        reset();
        setBuyer(initialValues);
      });
  };

  if (items.length === 0)
    return <h1 className="text-center">CARRITO VACÍO.</h1>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          {items.map((item) => (
            <Card className="mb-3" key={item.id}>
              <Card.Body className="d-flex align-items-center">
                <img
                  src={item.imageId}
                  alt={item.title}
                  height={100}
                  className="me-3"
                />
                <div>
                  <h5>{item.title}</h5>
                  <p className="text-muted">
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </div>
                <Button
                  variant="danger"
                  className="ms-auto"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </Button>
              </Card.Body>
            </Card>
          ))}
          <Button variant="danger" onClick={reset} className="w-100 mt-2">
            Vaciar Carrito
          </Button>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <h4>Total: ${total}</h4>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={buyer.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    value={buyer.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={buyer.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </Card.Body>
          </Card>
          <Button variant="success" className="w-100" onClick={sendOrder}>
            Comprar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
