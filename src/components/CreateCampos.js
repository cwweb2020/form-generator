import React, { useState } from "react";

const CreateCampos = ({ agregarCampos }) => {
  const categorias = [
    "checkbox",
    "submit",
    "date",
    "number",
    "password",
    "email",
    "text",
  ];

  const [input, setInput] = useState({
    label: "",
    type: "",
    required: false,
  });

  // crea un campo
  const CreateItem = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      // required: e.target.value === "on" ? true : false
    });
  //  console.log(e.target.value);
    // console.log("muestra el input " + input);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Nombre del input"
        onChange={CreateItem}
        name="label"
      />
      <select className="form-control" name="type" onChange={CreateItem}>
        <option>Seleccionar Tipo</option>
        {categorias.map((cat, i) => (
          <option value={cat} key={i}>
            {cat}
          </option>
        ))}
      </select>
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ width: "28%" }}
      >
        <label>Es requerido</label>
        <input
          type="checkbox"
          onChange={(e) =>
            setInput({
              ...input,
              required: e.target.checked,
            })
          }
        />
      </div>

      <button
        className="btn btn-info"
        type="button"
        onClick={() => agregarCampos(input)}
        style={{ width: "50%", margin: "auto" }}
      >
          Agregar campo
      </button>
    </>
  );
};

export default CreateCampos;
