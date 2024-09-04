import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Item = ({ producto }) => {
  return (
    <Card
      key={producto.id}
      style={{ width: "18rem", padding: "1rem" }}
      className="m-3 mt-5 shadow-sm p-3 mb-5 bg-body rounded"
    >
      <Card.Img variant="top" src={producto.imageId} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>Flavor: {producto.flavor}</Card.Text>
        <div className="mt-auto">
          <Link to={`/item/${producto.id}`}>
            <Button className="btn-secondary fw-bold w-100 btn-outline-dark text-white">
              Conseguilo por ${producto.price}
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
