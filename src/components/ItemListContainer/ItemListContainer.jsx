/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { getProducts } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((response) => {
        const productsToShow = categoryId
          ? response.filter((product) => product.category == categoryId)
          : response;
        setProducts(productsToShow);
      })
      .catch((error) => console.log(error));
  });
  return (
    <center className="container">
      <Flex direction="column" align="center" width="100%">
        <Heading>{title}</Heading>
        <ItemList products={products} />
      </Flex>
    </center>
  );
};

export default ItemListContainer;
