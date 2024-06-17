/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ItemCount from "./../ItemCount/ItemCount";
import { Flex } from "@chakra-ui/react";

import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };
  return (
    <Flex className="CardContainer">
      <article className="CardItemDetail">
        <header className="Header">
          <h2 className="ItemHeader">{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
          <p className="Info">Category: {category}</p>
          <p className="Info">Description: {description}</p>
          <p className="Info">Precio: ${price}</p>
        </section>
        <footer className="ItemFooter">
          {quantityAdded > 0 ? (
            <Link to="/cart" className="option">
              Terminar Compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </article>
    </Flex>
  );
};

export default ItemDetail;
