import React from "react";
import Input from "./Input";

const FormGen = ({ form, nombre }) => {
  const { campos } = form;
  console.log(campos);

  return (
    <>
      <form className="form-control covid-form">
        <h3 className="text-center">{nombre}</h3>
        <Input className="form-control" campos={campos} />
      </form>
    </>
  );
};

export default FormGen;
