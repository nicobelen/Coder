/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getProductById } from "../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Flex } from "@chakra-ui/react";

import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);
  return (
    <Flex className="ItemDetailContainer">
      <ItemDetail {...product} />
    </Flex>
  );
};

export default ItemDetailContainer;
