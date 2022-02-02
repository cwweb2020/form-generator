import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateCampos = ({ agregarCampos, editableState, editForm, updateCampo }) => {
  const categorias = [
    "checkbox",
    "submit",
    "date",
    "number",
    "password",
    "email",
    "text",
  ];

  const [input, setInput] = useState(
    editableState || {
      label: "",
      type: "",
      required: false,
      styles: "",
      id: uuid(),
    }
  );

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
        value={input.label}
      />
      <select
        className="form-control"
        name="type"
        value={input.type}
        onChange={CreateItem}
      >
        <option>Seleccionar Tipo</option>
        {categorias.map((cat, i) => (
          <option value={cat} key={i}>
            {cat}
          </option>
        ))}
      </select>
      {input.type === "submit" && (
        <div className="d-flex flex-column mt-5">
          <input
            type="text"
            placeholder="Estilos del boton.."
            onChange={CreateItem}
            name="styles"
            className="my-2"
            value={input.styles}
          />
          <label>
            Colocar estilos bootstrap v5 -{" "}
            <a
              href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
              target="_blank"
            >
              ir a bootstrap
            </a>{" "}
          </label>
        </div>
      )}
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ width: "28%" }}
      >
        <label>Es requerido</label>
        <input
          type="checkbox"
          checked={input.required}
          onChange={(e) =>
            setInput({
              ...input,
              required: e.target.checked,
            })
          }
        />
      </div>
      {editForm ? (
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => updateCampo(input)}
          style={{ width: "50%", margin: "auto" }}
        >
          Editar..
        </button>
      ) : (
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => agregarCampos(input)}
          style={{ width: "50%", margin: "auto" }}
        >
          Agregar campo
        </button>
      )}
    </>
  );
};

export default CreateCampos;
