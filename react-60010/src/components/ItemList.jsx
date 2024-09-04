import { Item } from "./Item";
import Container from "react-bootstrap/esm/Container";

export const ItemList = ({ productos }) => {
  return (
    <Container className="d-flex flex-wrap">
      {productos.map((artc) => (
        <Item key={artc.id} producto={artc} />
      ))}
    </Container>
  );
};

export default ItemList;
