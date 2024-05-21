import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Button, Heading } from "@chakra-ui/react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Heading>Logo</Heading>
      </div>
      <div className="buttons">
        <Button>Harley Davidson</Button>
        <Button>Honda</Button>
        <Button>Yamaha</Button>
        <Button>Kawasaki</Button>
        <Button>Suzuki</Button>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
