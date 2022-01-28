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
    styles: ""
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
        {
          input.type === "submit" && <div className="d-flex flex-column mt-5">
            
             <input type="text" 
               placeholder="estilo del boton"
               onChange={CreateItem}
               name="styles"
               className="my-2"
             />
              <label>Colocar estilos bootstrap v5 - <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">ir a bootstrap</a> </label>
          </div>
        }
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
