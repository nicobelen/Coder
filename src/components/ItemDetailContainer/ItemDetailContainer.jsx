/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getProductById } from "../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Flex } from "@chakra-ui/react";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById("1")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Flex className="ItemDetailContainer">
      <ItemDetail {...product} />
    </Flex>
  );
};

export default ItemDetailContainer;
