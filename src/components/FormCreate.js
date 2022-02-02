import React, { useState, useRef } from "react";
import CreateCampos from "./CreateCampos";
import FieldsTable from "./FieldsTable";

import { FormConsumer } from "../context";
import { Container } from "./styled/Container";

const FormCreate = () => {
  const formulario = useRef();
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [editableState, setEditableState] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    campos: [],
  });

  // extraigo del context
  const { agregarFormulario } = FormConsumer();

  const agregarCampos = (campo) => {
    setForm({
      ...form,
      campos: [...form.campos, campo],
    });
    formulario.current.reset();
    setShowForm(false);
  };

  const handleClick = (e) => {
    agregarFormulario(form);
    setForm({
      nombre: "",
      campos: [],
    });
  };

  // delete campo
  const deleteCampo = (id) => {
    // const campos = form.campos.filter((campo) => campo.id !== id);
    // setForm({
    //   ...form,
    //   campos
    // });

    setForm({
      ...form,
      campos: form.campos.filter((campo) => campo.id !== id),
    });
  };
  // edit campo
  const editCampo = (id) => {
    const objetoAeditar = form.campos.find((campo) => campo.id === id);
    setEditForm(true);
    setEditableState(objetoAeditar);
  };

  // update campo

  const updateCampo = (campo) => {
    setForm({
      ...form,
      campos: form.campos.map((campoActual) =>  campoActual.id === campo.id ? campo : campoActual )
    });
    setEditForm(false);
  };

  return (
    <>
      <Container bc="#6c757d0d" ai="unset" className="create-form-total">
        <form ref={formulario} className="form-control covid-form create-form">
          <h3 className="text-center">Crear Formulario</h3>
          <div className="d-flex justify-content-between buton-input-container">
            <input
              type="text"
              placeholder="Nombre del formulario"
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="form-control"
              name="nombre"
              style={{ width: "60%" }}
            />
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Ocultar Campos" : "Agregar Campos"}
            </button>
          </div>
          {editForm && (
            <CreateCampos
              editableState={editableState}
              editForm={editForm}
              updateCampo={updateCampo}
            />
          )}
          {showForm && <CreateCampos agregarCampos={agregarCampos} />}
          {/* table that shows components */}
          {!showForm && (
            <>
              {form.campos.length > 0 && (
                <FieldsTable
                  campos={form.campos}
                  deleteCampo={deleteCampo}
                  editCampo={editCampo}
                />
              )}
              {form.campos.length === 0 && (
                <h4 className="text-center">No hay campos</h4>
              )}
            </>
          )}
          <button
            className="boton-finalizar btn btn-success"
            type="button"
            style={{
              width: "100%",
              marginTop: "80px",
            }}
            onClick={handleClick}
          >
            Finalizar
          </button>
        </form>
      </Container>
    </>
  );
};

export default FormCreate;
