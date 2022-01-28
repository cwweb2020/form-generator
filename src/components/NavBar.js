import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <section className="nav">
        <div className="navwrapper">
          <Link to="/">Crear formulario</Link>
           <span className="text-white"> <span style={{opacity: "0"}}>/</span> | <span style={{opacity: "0"}}>/</span> </span>
          <Link to="formularios">Formularios</Link>
        </div>
      </section>
    </>
  );
}

export default NavBar;
