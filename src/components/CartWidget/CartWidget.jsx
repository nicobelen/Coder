/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { IoMdCart } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQuantity > 0 ? "flex" : "none" }}
    >
      <IoMdCart size={"1.5rem"} />
      <h3>{totalQuantity}</h3>
    </Link>
  );
};

export default CartWidget;
