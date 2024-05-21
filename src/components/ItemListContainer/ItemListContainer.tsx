import React from "react";
import { Heading } from "@chakra-ui/react";

const ItemListContainer = ({ title }: { title: string }) => {
  return (
    <div>
      <Heading>{title}</Heading>
    </div>
  );
};

export default ItemListContainer;
