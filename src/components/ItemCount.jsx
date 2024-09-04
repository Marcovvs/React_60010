import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const AddItemButton = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <>
      <button className="btn btn-outline-dark" onClick={handleIncrease}>
        +
      </button>
      <span className="text-dark m-1">{count}</span>
      <button className="btn btn-outline-dark me-2" onClick={handleDecrease}>
        -
      </button>
      <br />
      <button
        className="btn btn-secondary btn-outline-dark text-white fw-bold"
        onClick={AddItemButton}
      >
        Agregar al carrito
      </button>
    </>
  );
};
