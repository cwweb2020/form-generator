import React from "react";
import FieldRow from "./FieldRow";

const FieldsTable = ({ campos }) => {
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
          </tr>
        </thead>
        <tbody>
        {
            campos.map((campo, i) => (
                <FieldRow campo={campo} i={i} key={i} />
            ))

        }
     
        </tbody>
      </table>
    </>
  );
};

export default FieldsTable;
