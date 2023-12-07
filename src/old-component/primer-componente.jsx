import PropTypes from "prop-types";

const string = "Esto es un texto";
const number = 123;
const array = ["curso", "youtube"];
const boolean = true;
const funcion = () => 1 + 1;
const fecha = new Date();
const objeto = {
  nombre: "Rias",
  edad: 18,
};

import "./styles/primer-component.css";
export const PrimerComponent = ({ nam }) => {
  return <p>{JSON.stringify(objeto)}</p>;
};

PrimerComponent.PropTypes = {
  fecha: PropTypes.string.isRequired,
};
