import PropTypes from "prop-types";
import { useState } from "react";
import { AgregarTarea } from "../components/AgregarTarea";

const Item = ({ item }) => {
  return <li> {item}</li>;
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export const ListadoApp = () => {
  const [valueItem, setValueItem] = useState([]);

  const onAgregarTarea = (val) => {
    if (val < 1) return;
    setValueItem([...valueItem, val]);
  };

  return (
    <>
      <h1>Listado de Temas</h1>

      <AgregarTarea tareaAgregar={onAgregarTarea}></AgregarTarea>

      <br />
      <br />
      {valueItem.map((val, index) => {
        return <Item key={index} item={val}></Item>;
      })}
    </>
  );
};
