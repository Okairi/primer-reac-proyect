import { useState } from "react";

export const ContadorApp = ({ value }) => {
  const [contador, setContador] = useState(value);
  const clickeame = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>Contador : </h1>
      {contador}
      <br />
      <button
        onClick={() => {
          clickeame();
        }}
      >
        BUtton
      </button>{" "}
    </>
  );
};
