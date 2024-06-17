/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react";
import React from "react";
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
  return (
    <Flex>
      <IoMdCart size={"1.5rem"} />
      <h3>0</h3>
    </Flex>
  );
};

export default CartWidget;
