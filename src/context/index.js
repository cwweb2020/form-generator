import { useState, createContext, useContext } from "react";
import CreateCampos from "../components/CreateCampos";



  const FormContext = createContext(); // transportador
  export const FormConsumer = () => useContext(FormContext);

const FormProvider = ({ children }) => {
  const [formularios, setFormularios] = useState([]);

  const agregarFormulario = (form) => {
    
    setFormularios([...formularios, form]);
    alert("Formulario creado");
     console.log(formularios);
  };

  
  return (
    <FormContext.Provider
      value={{
        formularios,
        agregarFormulario,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
