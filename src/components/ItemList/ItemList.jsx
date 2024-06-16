/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Item from "../Item/Item";
import { Flex } from "@chakra-ui/react";

import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <Flex className="ListGroup" justify="space-between" gap="20px">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </Flex>
  );
};

export default ItemList;
