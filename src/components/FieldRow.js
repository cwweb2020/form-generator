import React from "react";

const FieldRow = ({ campo, i }) => {


  return (
    <>
      <tr>
        <th scope="row">{i + 1}</th>
        <td scope="col">{campo.label}</td>
        <td scope="col">{campo.type}</td>
        <td scope="col">{campo.required ? "si" : "no"}</td>
      </tr>
    </>
  );
};

export default FieldRow;
