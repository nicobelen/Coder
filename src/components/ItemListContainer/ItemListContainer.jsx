/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { getProducts } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  });
  return (
    <Flex>
      <center>
        <Heading>{title}</Heading>
        <ItemList products={products} />
      </center>
    </Flex>
  );
};

export default ItemListContainer;
