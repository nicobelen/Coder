import { Flex, Button, Center } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./ItemCount.css";

// eslint-disable-next-line react/prop-types
const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Flex className="Container" flexDirection={"column"}>
      <Center className="Quantity">
        <Button className="Button" onClick={decrement}>
          -
        </Button>
        <h4 className="Number">{quantity}</h4>
        <Button className="Button" onClick={increment}>
          +
        </Button>
      </Center>
      <Center>
        <Button
          className="ButtonAdd"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Add to cart
        </Button>
      </Center>
    </Flex>
  );
};

export default ItemCount;
