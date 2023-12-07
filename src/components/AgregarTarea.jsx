import { useState } from "react";
import PropTypes from "prop-types";

export const AgregarTarea = ({ tareaAgregar }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    tareaAgregar(inputValue);
  };
  return (
    <form
      onSubmit={(event) => {
        onSubmitForm(event);
      }}
    >
      <input
        type="text"
        placeholder="Texto a ingresar "
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

AgregarTarea.propTypes = {
  tareaAgregar: PropTypes.func.isRequired,
};
