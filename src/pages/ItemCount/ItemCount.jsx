import  { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ( {onAdd, stock, initial} ) => {
  const [contador, setContador] = useState(initial);

  const handleIncrement = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleDecrement = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <Button onClick={handleDecrement}>-</Button>
      <span>{contador}</span>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick= {() => onAdd(contador)}>Agregar al Carrito</Button>
    </div>
  );
};

export {ItemCount};