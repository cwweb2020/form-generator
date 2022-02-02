import React from "react";
import { FaPencilAlt } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';

const FieldRow = ({ campo, i, deleteCampo, editCampo }) => {


  

  return (
    <>
      <tr>
        <th scope="row">{i + 1}</th>
        <td scope="col">{campo.label}</td>
        <td scope="col">{campo.type}</td>
        <td scope="col">{campo.required ? "si" : "no"}</td>
        <td> <FaPencilAlt onClick={() => editCampo(campo.id)}/> </td>
        <td> <ImBin onClick={() => deleteCampo(campo.id)} /> </td>
      </tr>
    </>
  );
};

export default FieldRow;
