import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ItemCount } from "./ItemCount";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export const ItemDetails = ({ producto, onAdd }) => {
  return (
    <Container className="mt-4">
      <h1 className="fw-bold text-end m-4 fs-perso">{producto.categoryId}</h1>
      <Row className="shadow p-3 mb-4 bg-body rounded">
        <Col md={6}>
          <img
            height={500}
            src={producto.imageId}
            alt={producto.title}
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="text-end h1">{producto.title}</h2>
          <hr />
          <p className="fw-bold text-end display-6">${producto.price}</p>
          <h3 className="text-end fs-5 lead">{producto.description}</h3>
          <b className="me-2 text-end mt-3">Stock: {producto.stock}</b>
          <div className="d-flex justify-content-end mt-2">
            <ItemCount stock={producto.stock} onAdd={onAdd} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
