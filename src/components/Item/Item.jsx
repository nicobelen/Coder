/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import "./Item.css";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture className="CardItemPicture">
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <Flex direction="column">
        <section>
          <p className="Info">Precio: ${price}</p>
          <p className="Info">Stock disponible: {stock}</p>
        </section>
        <footer className="ItemFooter">
          <Link to={`/item/${id}`} className="Option">
            Ver detalle
          </Link>
        </footer>
      </Flex>
    </article>
  );
};

export default Item;
