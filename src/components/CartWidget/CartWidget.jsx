import { Box } from "@chakra-ui/react";
import React from "react";
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
  return (
    <Box>
      <IoMdCart size={"1.5rem"} />
    </Box>
  );
};

export default CartWidget;
