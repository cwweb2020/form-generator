import React from "react";
import FieldRow from "./FieldRow";

const FieldsTable = ({ campos, deleteCampo, editCampo }) => {
  // console.log(campos);

  return (
    <>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Requerido</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
        {
            campos.map((campo, i) => (
                <FieldRow campo={campo} i={i} key={i} deleteCampo={deleteCampo} editCampo={editCampo} />
            ))

        }
     
        </tbody>
      </table>
    </>
  );
};

export default FieldsTable;
