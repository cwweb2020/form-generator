import React, { useEffect } from "react";
import config from "./config";
import FormGen from "./components/FormGen";
import "./style.scss";

function App() {
  const form = config.formularios;
 // console.log(form);


  const prueba = () => {
    form.map(f => {
  //  console.log(f);
    })
  }
  useEffect(() => {
    prueba();
  }, [])

  return (

    <>
      <section className="accor-total">
        <div className="container wrapper">
          <div className="accordion" id="accordionExample">
       {form.map((f, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {f.nombre}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                     <FormGen form={f} nombre={f.nombre} /> 
                </div>
              </div>
            </div>
       ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
