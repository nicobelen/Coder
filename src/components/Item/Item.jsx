/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import "./Item.css";
import { Flex } from "@chakra-ui/react";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <Flex>
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
          <p className="Info">Precio: ${price}</p>
          <p className="Info">Stock disponible: {stock}</p>
        </section>
        <footer className="ItemFooter">
          <button className="Option">Ver detalle</button>
        </footer>
      </article>
    </Flex>
  );
};

export default Item;
