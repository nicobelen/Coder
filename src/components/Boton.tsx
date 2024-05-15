import React from "react";

const Boton = () => {
  const handleClick = () => {
    alert("clickeaste");
  };

  return (
    <div>
      <button onClick={handleClick}>Boton</button>
    </div>
  );
};

export default Boton;
