/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ItemCount from "./../ItemCount/ItemCount";
import { Flex } from "@chakra-ui/react";

import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <Flex className="CardContainer">
      <article className="CardItem">
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
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={(quantity) => console.log("Added quantity")}
          />
        </footer>
      </article>
    </Flex>
  );
};

export default ItemDetail;
